import React, { PropTypes } from 'react';
import {Provider} from 'react-redux';
import {Router, applyRouterMiddleware} from 'react-router';
import Helmet from 'react-helmet';
import DevTools from 'app/components/DevTools';
import routes from 'app/routes';
import config from 'app/config';

class Root extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        <Helmet titleTemplate={`${config.app.title} - %s (Dev Mode)`} />

        <Provider store={this.props.store}>
          <div>
              <Router history={this.props.history} render={applyRouterMiddleware(scroll())}>
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
