const zlib = require('zlib');
const fs = require('fs');
const stream = require('stream');

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// pipe readStream -> gzipStream -> writeStream
const gzip  = zlib.createGzip();
const read  = fs.createReadStream('input.txt');
const write = fs.createWriteStream('input.txt.gz');

inp.pipe(gzip)
	.on('error', ()=>)
	.pipe(out)
	.on('error', ()=>);

// or
stream.pipeline(read, gzip, write, (err) => {
	if (err) {
		console.error('An error occurred:', err);
		process.exitCode = 1;
	}
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// pipe readStream -> gunzipStream -> manual handle
const read  = fs.createReadStream('input.txt.gz');
const gunzip  = zlib.createGunzip();

const arr = [];
let filecontent;

gunzip
	.on('data', buf => arr.push(buf))
	.on('end', () => {
		var buffs = Buffer.concat(arr);
		filecontent = buffs.toString();
		// fs.writeFileSync('input.txt', buffs);
	});

stream.pipeline(read, gunzip, (err, val) => {
	if (!err) console.error('done');
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@