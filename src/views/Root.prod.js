import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import {Router, applyRouterMiddleware} from 'react-router';
import {useScroll} from 'react-router-scroll';
import Helmet from 'react-helmet';
import routes from 'app/routes';
import config from 'app/config';
import store from 'app/store';
import history from 'app/history';

class Root extends React.Component {
  render() {
    return (
      <div>
        <Helmet titleTemplate={`${config.app.title} - %s`} />

        <Provider store={store}>
          <Router history={history} render={applyRouterMiddleware(useScroll())}>
            {routes}
          </Router>
        </Provider>
      </div>
    );
  }
}

export default Root;
