// npm i css-loader style-loader -D  (these two are used together)

module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					'style-loader', // injects css into the dom
					'css-loader'    // interprets @import and url() like import/require() and resolves them
				],
			},
		],
	},
};