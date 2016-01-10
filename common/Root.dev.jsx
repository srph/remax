import React, { PropTypes } from 'react';

import {Provider} from 'react-redux';
import {Router} from 'react-router';
import {syncReduxAndRouter} from 'redux-simple-router';
import routes from './routes';
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';

export default class Root extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.bootstrapReduxRouter();
  }

  render() {
    return (
      <div>
        <Helmet titleTemplate="React Redux Starter Kit - %s" />

        <Provider store={this.props.store}>
          <div>
              <Router history={this.props.history}>
                {routes}
              </Router>

            <DevTools />
          </div>
        </Provider>
      </div>
    );
  }

  bootstrapReduxRouter() {
    syncReduxAndRouter(this.props.history, this.props.store);
  }
}
