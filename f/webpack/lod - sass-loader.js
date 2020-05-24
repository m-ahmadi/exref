// npm i sass-loader sass -D

module.exports = {
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader', // creates `style` nodes from js strings
					'css-loader',   // translates css into commonjs
					'sass-loader',  // compiles sass to css
				],
			},
		],
	},
};