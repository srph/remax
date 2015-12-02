import fs from 'fs';
import path from 'path';

import '../../common/utils/bootstrap';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Resolver } from 'react-resolver';
import { match, RoutingContext } from 'react-router'
import routes from '../../common/routes';
import configureStore from '../../common/store/configureStore';
import Html from '../../common/Html';

export default function *appMiddleware() {
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
      .resolve(() => <Html store={store} />)
      .then(({ Resolved }) => {
        this.response.body = renderToString(<Resolved />);
      })
      .catch(err => {
        console.log(err.stack);
        this.response.status = 500;
        this.response.body = err.stack;
      });
    });
}
