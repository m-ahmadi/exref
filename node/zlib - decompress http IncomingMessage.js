var res = await http.request(...);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// with streams

// http.response --> compressStream --> manaul handle
var compressStream = zlib.createGunzip();

var buffers = [];
compressStream
	.on('data', buffer => buffers.push(buffer))
	.on('end', () {
		var decompressed = Buffer.concat(buffers).toString();
		fs.writeFileSync('file.txt', decompressed);
	});
res.pipe(compressStream);

// http.response --> compressStream --> writeStream
var writeStream = fs.createWriteStream('./file.html');
var encoding = res.headers['content-encoding'];

if (encoding === 'gzip') {
	res.pipe(zlib.createGunzip()).pipe(writeStream);
} else if (encoding === 'deflate') {
	res.pipe(zlib.createInflate()).pipe(writeStream);
} else {
	res.pipe(writeStream);
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// without streams

var chunks = [];
res.on('data', function(chunk) {
	chunks.push(chunk);
});

res.on('end', function () {
	var buffer = Buffer.concat(chunks);
	var encoding = res.headers['content-encoding'];
	var decompressed = 
		encoding == 'gzip'    ? zlib.gunzipSync(buffer).toString() :
		encoding == 'deflate' ? zlib.inflateSync(buffer).toString() :
		buffer.toString();
	
	fs.writeFileSync('file.txt', decompressed);
})
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// with streams + get size information (not sure)
var encoding = res.headers['content-encoding'];
var uncompressedSize = 0; // size after uncompression
var bodySize = 0;         // bytes size over the wire
var stream = 
	encoding === 'gzip'    ? zlib.createGunzip() :
	encoding === 'deflate' ? zlib.createInflate() :
	undefined;

if (stream) {
	stream.on('data', function (data) {
		uncompressedSize += data.toString().length;
	}).on('end', showSizes);
	
	res.on('data', function (data) {
		bodySize += data.length;
		uncompressedSize += bodySize += data.length;
	}).pipe(stream);
} else {
	res.on('data', function (data) {
		uncompressedSize += bodySize += data.length;
	}).on('end', showSizes);
}

function showSizes() {
	console.log('headersSize:',               Buffer.byteLength(res.rawHeaders, 'utf8'));
	console.log('content.size uncompressed:', uncompressedSize);
	console.log('bodySize compressed:',       bodySize);
	console.log('compression:',               uncompressedSize - bodySize);
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@