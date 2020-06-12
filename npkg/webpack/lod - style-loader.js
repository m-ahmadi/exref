// npm i style-loader -D

module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					'style-loader', // injects css into the dom
					'css-loader'
				],
			},
		],
	},
};

// recommended to combine with css-loader