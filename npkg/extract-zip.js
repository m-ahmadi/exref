const extract = require('extract-zip'); // it can't extract .7z files
const { resolve } = require('path');

// output path must be absolute
extract('Instruments.zip', { dir: resolve('./output') }, function (err) {
	console.log('done');
});