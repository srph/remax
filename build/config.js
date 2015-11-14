var path = require('path');

exports.alias = function(base) {
  return {
    '': path.join(base, 'server'),
    'client': path.join(base, 'client'),
    'common': path.join(base, 'common'),
    'components': path.join(base, 'common/components'),
    'modules': path.join(base, 'common/modules'),
    'store': path.join(base, 'common/store'),
    'selectors': path.join(base, 'common/selectors'),
    'utils': path.join(base, 'common/utils'),
    'views': path.join(base, 'common/views')
  };
}

exports._ENV_ = process.env.NODE_ENV || 'development';
exports._PRODUCTION_ = exports._ENV_ === 'production';
exports._DEV_ = !exports._PRODUCTION_;
exports._API_ = exports._PRODUCTION_
  ? 'http://api.www.com'
  : process.env.API || 'http://api.www.com';
exports._IMG_ = '/img';
exports._CDN_ = '//my-cdn.org/';
module.exports = exports;
