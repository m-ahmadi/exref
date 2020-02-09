const cpFile = require('cp-file');

cpFile(source, destination, [options])
cpFile.sync(source, destination, [options])

cpFile('src/unicorn.png', 'dist/unicorn.png').then(() => {
	console.log('File copied');
});


cpFile(src, dest).on('progress', data => {
/*
	data: {
		src: String,
		dest: String,
		size: Number,
		written: Number,
		percent: Number
	}
*/

}).then(() => {
    // ... 
})