// Import all utils that needs to be initialized

if ( process.env.NODE_ENV !== 'production' ) {
  require('axios-response-logger');
  
  global.onunhandledrejection = function({reason}) {
    console.error(reason, reason.stack);
  }
}

require('axios-base-url')(process.env.API);
