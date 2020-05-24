const path = require('path');

module.exports = {
	entry: './path/to/my/entry/file.js',
	output: {
		filename: 'bundle.js'
		path: path.resolve(__dirname, './dist')
	},
	module: {
		rules: [
			{ test: /\.(js|jsx)$/, use: 'babel-loader' }
		]
	}
};

// note: rules are defined under module.rules and not rules