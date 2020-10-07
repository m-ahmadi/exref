const zlib = require('zlib');

// piping source stream data through a zlib stream into a destination stream:
const gzip = zlib.createGzip(); // creates a stream
const fs = require('fs');
const inp = fs.createReadStream('input.txt');
const out = fs.createWriteStream('input.txt.gz');

inp.pipe(gzip)
	.on('error', () => {
		// handle error
	})
	.pipe(out)
	.on('error', () => {
		// handle error
	});


// another example:
const stream = require('stream');
const fs = require('fs');
const gzip = zlib.createGzip();
const source = fs.createReadStream('input.txt');
const destination = fs.createWriteStream('input.txt.gz');

stream.pipeline(source, gzip, destination, (err) => {
	if (err) {
		console.error('An error occurred:', err);
		process.exitCode = 1;
	}
});