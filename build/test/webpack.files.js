/**
 * Setup context module
 * http://webpack.github.io/docs/context.html
 */
var ctx = require.context('../../src/', true, /\.spec\.js$/);
ctx.keys().forEach(ctx);
