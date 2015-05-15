var webpackService = require('webpack-service');
var reactRender = require('react-render');

module.exports = {
  functions: {
    // ...
    webpack: webpackService,
    react: reactRender
  }
};