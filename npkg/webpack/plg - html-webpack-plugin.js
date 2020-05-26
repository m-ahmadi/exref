const HtmlWebpackPlugin = require('html-webpack-plugin'); // npm i html-webpack-plugin -D
const path = require('path');

module.exports = {
	entry: 'index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist'),
	},
	plugins: [new HtmlWebpackPlugin({template: './src/index.html'})]
	// https://github.com/jantimon/html-webpack-plugin#options
};

/* creates:
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>webpack App</title>
	</head>
	<body>
		<script src="index_bundle.js"></script>
	</body>
</html>
*/