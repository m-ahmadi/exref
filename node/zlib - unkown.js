// unkown examples related to http reponse size (res is http res)
// 1
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
})

// 2
var outStream = fs.createWriteStream('./sample.html')
var encoding = res.headers['content-encoding']
if (encoding == 'gzip') {
	res.pipe(zlib.createGunzip()).pipe(outStream)
} else if (encoding == 'deflate') {
	res.pipe(zlib.createInflate()).pipe(outStream)
} else {
	res.pipe(outStream)
}

// 3
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
	}).on('end', function () {
		console.log('headersSize:', Buffer.byteLength(res.rawHeaders, 'utf8'));
		console.log('content.size uncompressed:', uncompressedSize);
		console.log('bodySize compressed:', bodySize);
		console.log('compression:', uncompressedSize - bodySize);
	});
	res.on('data', function (data) {
		bodySize += data.length;
		uncompressedSize += bodySize += data.length;
	}).pipe(stream);
} else {
	res.on('data', function (data) {
		uncompressedSize += bodySize += data.length;
	}).on('end', function () {
		console.log('headersSize:', Buffer.byteLength(res.rawHeaders, 'utf8'));
		console.log('content.size uncompressed:', uncompressedSize);
		console.log('bodySize compressed:', bodySize);
		console.log('compression:', uncompressedSize - bodySize);
	});
}