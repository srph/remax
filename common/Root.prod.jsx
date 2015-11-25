import React, { PropTypes } from 'react';

import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import Helmet from 'react-helmet';
import routes from './routes';

export default class Root extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Helmet titleTemplate="React Redux Starter Kit - %s" />

        <Provider store={this.props.store}>
          <ReduxRouter>{routes}</ReduxRouter>
        </Provider>
      </div>
    );
  }
}
