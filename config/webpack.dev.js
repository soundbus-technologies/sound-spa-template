const webpack              = require('webpack');
const FriendLyErrorsPlugin = require('friendly-errors-webpack-plugin');
const isProduction         = process.env.NODE_ENV === 'production';
const vueLoaderConfig      = require('./vue-loader')(isProduction);

module.exports = {
	entry: {
		index: ['webpack-hot-middleware/client?reload=true', './src/main.js'],
		vendor: ['vue', 'vue-router', 'vuex', 'iview'],
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader']
		}, {
			test: /\.vue$/,
			loader: 'vue-loader',
			options: vueLoaderConfig
		}],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': JSON.stringify(process.env.NODE_ENV)
		}),
		new FriendLyErrorsPlugin({
			compilationSuccessInfo: {
				messages: ['open url http://localhost:8200'],
			},
		})
	]
};

