import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import {Router, applyRouterMiddleware} from 'react-router';
import {useScroll} from 'react-router-scroll';
import Helmet from 'react-helmet';
import DevTools from 'app/components/DevTools';
import routes from 'app/routes';
import config from 'app/config';
import store from 'app/store';
import history from 'app/history';

class Root extends React.Component {
  render() {
    return (
      <div>
        <Helmet titleTemplate={`${config.app.title} - %s (Dev Mode)`} />

        <Provider store={store}>
          <div>
              <Router history={history} render={applyRouterMiddleware(useScroll())}>
                {routes}
              </Router>

            {this.renderDevTools()}
          </div>
        </Provider>
      </div>
    );
  }

  renderDevTools() {
    return process.env.REDUX_DEVTOOLS ? <DevTools /> : null;
  }
}

export default Root;
