import React, { PropTypes } from 'react';

import {Provider} from 'react-redux';
import {Router} from 'react-router';
import routes from '../routes';
import Helmet from 'react-helmet';

class Root extends React.Component {
  render() {
    return (
      <div>
        <Helmet titleTemplate="React Redux Starter Kit - %s" />

        <Provider store={this.props.store}>
          <Router history={this.props.history}>
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
