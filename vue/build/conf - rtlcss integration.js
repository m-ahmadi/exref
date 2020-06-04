const rtlcss = require('rtlcss'); // npm i rtlcss -D

module.exports = {
	css: {
		loaderOptions: {
			postcss: {
				plugins: [rtlcss]
      }
		},
	}
};