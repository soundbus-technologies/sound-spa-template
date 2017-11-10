const { resolve } = require('path');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

module.exports = {
	output: {
		// publicPath: '/static/',
		path: resolve(__dirname, '../dist'),
		filename: '[name].js', // '[name].[chunkhash].js'
		chunkFilename: '[id].js?[chunkhash]',
	},
	resolve: {
		extensions: ['.js', '.vue', '.json', '.jsx'],
		alias: {
			'vue'  : 'vue/dist/vue.js'
		}
	},
	module: {
		// noParse: /jquery|zepto|vue|vue-router|vuex/,
		rules: [{
			test: /\.(js|vue|jsx)$/,
			loader: 'eslint-loader',
			enforce: "pre",
		}, {
			test: /iview.src.*?js$/,
			loader: 'babel',
		},{
			test: /\.js$/,
			exclude: /node_modules/,
			use: ['babel-loader'],
		}, {
			test: /\.html$/,
			use: 'html-loader'
		}, {
			test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			loader: 'url-loader',
			query: {
				limit: 10000,
				name: 'static/img/[name].[hash:7].[ext]'
			}
		}, {
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			loader: 'url-loader',
			query: {
				limit: 10000,
				name: 'static/fonts/[name].[hash:7].[ext]'
			}
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: function (module, count) {
				// any required modules inside node_modules are extracted to vendor
				return (
					module.resource &&
					/\.js$/.test(module.resource) &&
					module.resource.indexOf(
						path.join(__dirname, '../node_modules')
					) === 0
				)
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			chunks: ['vendor']
		}),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		}),
	],
	devtool: '#cheap-module-eval-source-map',
};
