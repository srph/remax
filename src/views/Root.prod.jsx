import React, { PropTypes } from 'react';
import {Provider} from 'react-redux';
import {Router, applyRouterMiddleware} from 'react-router';
import scroll from 'react-router-scroll';
import Helmet from 'react-helmet';
import routes from '../routes';
import config from '../config';

class Root extends React.Component {
  render() {
    return (
      <div>
        <Helmet titleTemplate={`${config.app.title} - %s`} />

        <Provider store={this.props.store}>
          <Router history={this.props.history} render={applyRouterMiddleware(scroll())}>
            {routes}
          </Router>
        </Provider>
      </div>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Root;
