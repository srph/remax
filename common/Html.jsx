import React, { PropTypes } from 'react';
import Root from './Root';

export default class Html extends React.Component {
  static propTypes = {
    /**
     * Redux store
     */
    store: PropTypes.object
  };

  render() {
    const { html, store } = this.props;
    const state = store.getState();

    return (
      <html lang="en">
        <head>
          <title>React Redux Starter Kit</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="dist/style.css" rel="stylesheet" />
        </head>

        <body>
          <div id="mount">
            <Root store={store} />
          </div>

          <script dangerouslySetInnerHTML={{ __html: `window.__INITIAL_STATE={${JSON.stringify(state)}};` }} />
          <script src="dist/script.js"></script>
        </body>
      </html>
    );
  }
}
