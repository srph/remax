if ( _SSR_ ) {
  module.exports = require('./server');
} else {
  module.exports = require('./prod');
}
