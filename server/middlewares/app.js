import fs from 'fs';
import path from 'path';

import '../../common/utils/bootstrap';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Resolver} from 'react-resolver';
import {match, RoutingContext} from 'react-router'
import routes from '../../common/routes';
import createMemoryHistory from 'history/lib/createMemoryHistory';
import configureStore from '../../common/store/configureStore';
import Root from '../../common/Root';

const stateRegex = /window.__INITIAL_STATE__;/g;
const htmlRegex = /\${html}/g;

export default function *appMiddleware() {
  const history = createMemoryHistory();
  const store = configureStore();

  match({ routes, location: this.request.url }, (err, redirect, props) => {
    if ( err ) {
      this.response.status = 500;
      this.response.body = err.stack;
      return;
    }

    if ( redirect ) {
      this.response.redirect(`${redirect.pathname}${redirect.search}`);
      return;
    }

    Resolver
      .resolve(() => <Root history={history} store={store} />)
      .then(({ Resolved }) => {
        const state = store.getState();
        const html = path.resolve(__dirname, '../../public/index.html');
        const template = fs.readFileSync(html, 'utf-8');
        const page = template
          .replace(
            stateRegex,
            `window.__INITIAL_STATE__ = ${JSON.stringify(state)}`
          )
          .replace(
            htmlRegex,
            renderToString(<Resolved />)
          );

        this.response.body = page;
      })
      .catch(err => {
        console.log(err.stack);
        this.response.status = 500;
        this.response.body = err.stack;
      });
    });
}
