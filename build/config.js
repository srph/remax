var path = require('path');

exports._ENV_ = process.env.NODE_ENV || 'development';
exports._PRODUCTION_ = exports._ENV_ === 'production';
exports._DEV_ = !exports._PRODUCTION_;
exports._API_ = exports._PRODUCTION_
  ? 'http://api.www.com'
  : process.env.API || 'http://api.www.com';
exports._IMG_ = '/img';
exports._CDN_ = '//my-cdn.org/';
// This config is explicitly set in each config.
// e.g., server globals, webpack config.
// exports._SSR_ = false;
module.exports = exports;
