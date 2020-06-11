const webpack = require('webpack');

module.exports = {
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			_: 'lodash'
		}),
	]
};

// provides global modules (instead of having to import them everywhere)