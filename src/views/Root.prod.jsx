import React, { PropTypes } from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import Helmet from 'react-helmet';
import routes from '../routes';
import config from '../config';

class Root extends React.Component {
  render() {
    return (
      <div>
        <Helmet titleTemplate={`${config.app.title} - %s`} />

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
