import React, { PropTypes } from 'react';

import {Provider} from 'react-redux';
import {Router} from 'react-router';
import routes from '../routes';
import Helmet from 'react-helmet';
import DevTools from '../components/DevTools';

class Root extends React.Component {
  render() {
    return (
      <div>
        <Helmet titleTemplate="React Redux Starter Kit - %s" />

        <Provider store={this.props.store}>
          <div>
              <Router history={this.props.history}>
                {routes}
              </Router>

            {this.renderDevTools()}
          </div>
        </Provider>
      </div>
    );
  }

  renderDevTools() {
    return _REDUX_DEVTOOLS_ ? <DevTools /> : null;
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Root;
