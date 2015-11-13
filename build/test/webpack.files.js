/**
 * Setup context module
 * http://webpack.github.io/docs/context.html
 */
var ctx = require.context('../../common/', true, /\.spec\.js$/);
ctx.keys().forEach(ctx);
