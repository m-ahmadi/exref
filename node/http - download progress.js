const http = require('http');
const https = require('https');
const zlib = require('zlib');
const Progress = require('progress');

// html file (with decompression step)
http.get('http://cdn6.tsetmc.com/Loader.aspx?ParTree=15131P&i=26997316501080743&d=20200922', res => {
	if (res.statusCode !== 200) return;
	//res.setEncoding('utf8'); // Error: incorrect header check
	const total = +res.headers['content-length'];
	const bar = new Progress('[:bar] :percent :etas', {total, width:80, renderThrottle:1});
	
	const decompressStream = zlib.createGunzip();
	const writeStream = fs.createWriteStream('file.html');
	res
		.on('data', chunk => bar.tick(chunk.length))
		.pipe(decompressStream)
		.pipe(writeStream);
});

// image file (without decompression step)
https.get('https://file-examples-com.github.io/uploads/2017/10/file_example_JPG_2500kB.jpg', res => {
	if (res.statusCode !== 200) return;
	const total = +res.headers['content-length'];
	const bar = new Progress('[:bar] :percent :etas', {total, width:80, renderThrottle:1});
	const writeStream = fs.createWriteStream('file.jpg');
	res
		.on('data', chunk => bar.tick(chunk.length))
		.pipe(writeStream);
});