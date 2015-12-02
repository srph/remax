if ( _SSR_ ) {
  module.exports = require('./router.server');
} else {
  module.exports = require('./router.prod');
}
