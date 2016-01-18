// Import all utils that needs to be initialized

if ( process.env.NODE_ENV !== 'production' ) {
  require('axios-response-logger');
}

import './axios/interceptors/concatBaseUrl';
