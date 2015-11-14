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
          <div>
            <ReduxRouter>{routes}</ReduxRouter>
            {this.renderDevTools()}
          </div>
        </Provider>
      </div>
    );
  }

  renderDevTools() {
    if ( _DEV_ ) {
      const createDevTools = require('redux-devtools').createDevTools;
      const DockMonitor = require('redux-devtools-dock-monitor');
      const LogMonitor = require('redux-devtools-log-monitor');

      const DevTools = createDevTools(
        <DockMonitor
          toggleVisibilityKey="H"
          changePositionKey="Q">
          <LogMonitor store={this.props.store.devToolsStore} />
        </DockMonitor>
      );

      return <DevTools />;
    }

    return null;
  }
}
