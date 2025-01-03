const zlib = require('zlib'); // compression using gzip, deflate/inflate, and brotli.

// compress data using gzip
zlib.gzip(buffer, ?options, callback)
zlib.gzipSync(buffer, ?options)

zlib.gzipSync('a')
zlib.gzipSync(new Uint8Array([97]))

zlib.gzip('a', (err, data) => console.log(data))


fs.writeFileSync('out.gz', zlib.gzipSync(fs.readFileSync('in.txt')))   // zip
fs.writeFileSync('out.txt', zlib.gunzipSync(fs.readFileSync('in.gz'))) // unzip
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// compress/decompress data in a single step:
const input = '.................................';
zlib.deflate(input, (err, buffer) => {
	if (!err) {
		console.log(buffer.toString('base64'));
	} else {
		// handle error
	}
});

const buffer = Buffer.from('eJzT0yMAAGTvBe8=', 'base64');
zlib.unzip(buffer, (err, buffer) => {
	if (!err) {
		console.log(buffer.toString());
	} else {
		// handle error
	}
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// options
// https://www.zlib.net/manual.html
var options = {
	flush: Z_NO_FLUSH,
	finishFlush: Z_FINISH,
	chunkSize: 16 * 1024,
	windowBits: 8, /*
		base two logarithm of the window size (the size of history buffer).
		should be in the range 8 to 15.
		larger values result in better compression at the expense of memory usage.
		default value is 15 if deflateInit is used instead. */
	level: -1, /*
		must be -1, or between 0 and 9.
		1:  best speed.
		9:  best compression.
		0:  no compression.
		-1: default. compromise between speed and compression (equal to 6) Z_DEFAULT_COMPRESSION */
	memLevel: 8, /*
		specifies how much memory should be allocated for internal compression state.
		1:  uses minimum memory but is slow and reduces compression ratio.
		9:  uses maximum memory for optimal speed.
		8:  default. Z_DEFAULT_MEMLEVEL */
	strategy: 0, /*
		used to tune the compression algorithm.
		0:  default. normal data. Z_DEFAULT_STRATEGY
		1:  data produced by a filter (or predictor). Z_FILTERED
		2:  force Huffman encoding only (no string match). Z_HUFFMAN_ONLY
		3:  limit match distances to one (run-length encoding). Z_RLE */
	dictionary: null,
		// Buffer | TypedArray | DataView | ArrayBuffer (deflate/inflate only, empty dictionary by default)
	info: false,
		// if true, returns an object with buffer and engine.
};

// stream creators
zlib.createBrotliCompress(?options)
zlib.createBrotliDecompress(?options)
zlib.createDeflate(?options)
zlib.createDeflateRaw(?options)
zlib.createGunzip(?options)
zlib.createGzip(?options)
zlib.createInflate(?options)
zlib.createInflateRaw(?options)
zlib.createUnzip(?options)

// convenience methods
zlib.gzip(buffer, ?options, callback)									zlib.gzipSync(buffer, ?options)
zlib.gunzip(buffer, ?options, callback)								zlib.gunzipSync(buffer, ?options)

zlib.brotliCompress(buffer, ?options, callback)				zlib.brotliCompressSync(buffer, ?options)
zlib.brotliDecompress(buffer, ?options, callback)			zlib.brotliDecompressSync(buffer, ?options)

zlib.deflate(buffer, ?options, callback)							zlib.deflateSync(buffer, ?options)
zlib.deflateRaw(buffer, ?options, callback)						zlib.deflateRawSync(buffer, ?options)
zlib.inflate(buffer, ?options, callback)							zlib.inflateSync(buffer, ?options)
zlib.inflateRaw(buffer, ?options, callback)						zlib.inflateRawSync(buffer, ?options)

zlib.unzip(buffer, ?options, callback)								zlib.unzipSync(buffer, ?options)

// zlib.constants
zlib.DEFLATE:    1
zlib.DEFLATERAW: 5
zlib.GUNZIP:     4
zlib.GZIP:       3
zlib.INFLATE:    2
...
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
