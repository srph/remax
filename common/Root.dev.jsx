import React, { PropTypes } from 'react';

import routes from './routes';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import Helmet from 'react-helmet';
import DevTools from 'components/DevTools';

export default class Root extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        <Helmet titleTemplate="React Redux Starter Kit - %s" />

        <Provider store={this.props.store}>
          <div>
            <ReduxRouter>{routes}</ReduxRouter>
            <DevTools />
          </div>
        </Provider>
      </div>
    );
  }
}
