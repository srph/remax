// Import all utils that needs to be initialized

if ( process.env.NODE_ENV !== 'production' ) {
  require('axios-response-logger');
}

require('axios-base-url')(process.env.API);
