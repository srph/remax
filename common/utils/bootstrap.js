// Import all utils that needs to be initialized

if ( _DEV_ ) {
  require('axios-response-logger');
}

import './axios/interceptors/concatBaseUrl';
