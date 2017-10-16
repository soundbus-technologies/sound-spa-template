const merge = require('webpack-merge');
const webpackPro = require('./config/webpack.pro');
const webpackBase = require('./config/webpack.base');
const webpackConfig = merge(webpackBase, webpackPro);

module.exports = webpackConfig;
