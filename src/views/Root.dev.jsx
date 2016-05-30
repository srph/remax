import React, { PropTypes } from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import routes from '../routes';
import Helmet from 'react-helmet';
import DevTools from 'app/components/DevTools';

class Root extends React.Component {
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

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Root;
