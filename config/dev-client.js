const webpackBrowserLog = require('webpack-browser-log');
const merge = require('webpack-merge');
const webpackDev = require('./webpack.dev');
const base = require('./webpack.base');
const webpackConfig = merge(base,webpackDev);
const port = 8200;

new webpackBrowserLog(webpackConfig, {
  port : port,
  waitUntilValid : function () {
    console.log(`You application is running here http://localhost:${port}`)
  } // default
});
