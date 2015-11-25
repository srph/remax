if ( _PRODUCTION_ ) {
  module.exports = require('./configureStore.prod.js');
} else {
  module.exports = require('./configureStore.dev.js');
}
