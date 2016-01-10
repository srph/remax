if ( _PRODUCTION_ ) {
  module.exports = require('./Root.prod');
} else {
  module.exports = require('./Root.dev');
}
