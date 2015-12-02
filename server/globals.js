var config = require('../build/config');

global._API_ = config._API_;
global._ROOT_URI_ = config._ROOT_URI_;
global._ENV_ = config._ENV_;
global._DEV_ = config._DEV_;
global._PRODUCTION_ = config._PRODUCTION_;
global._CDN_ = config._CDN_;
global._IMG_ = config._IMG_;
global._SSR_ = true; // Server-side rendering option is explicitly set to true.
