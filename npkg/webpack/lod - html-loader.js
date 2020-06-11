// npm i html-loader -D

module.exports = {
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
		],
	},
};