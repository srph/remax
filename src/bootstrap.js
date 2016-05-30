// Import all utils that needs to be initialized
import config from './config';

if ( process.env.NODE_ENV !== 'production' ) {
  global.onunhandledrejection = function({reason}) {
    console.error(reason, reason.stack);
  }
}

require('axios-base-url')(config.api);
