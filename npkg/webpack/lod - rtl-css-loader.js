// BROKEN (won't work with webpack 4)

// npm i rtl-css-loader -D

module.exports = {
	module: {
		{
			test: /\.css$/,
			use: ['style-loader', 'rtl-css-loader']
		},
	}
};