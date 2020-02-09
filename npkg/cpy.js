const cpy = require('cpy');

cpy(files, destination, [options])
cpy(['src/*.png', '!src/goat.png'], 'dist').then(() => {
	console.log('files copied');
});