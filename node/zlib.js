const zlib = require('zlib'); // compression using gzip, deflate/inflate, and brotli.

// compress data using gzip
zlib.gzip(buffer[, options], callback)
zlib.gzipSync(buffer[, options])

zlib.gzipSync("a")
zlib.gzipSync(new Uint8Array([97]))

zlib.gzip("a", (err, data) => console.log(data))
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// compress/decompress a stream
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
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
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
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// options
// https://www.zlib.net/manual.html
var options = {
	flush: Z_NO_FLUSH,
	finishFlush: Z_FINISH,
	chunkSize: 16 * 1024,
	windowBits: 8,
		// base two logarithm of the window size (the size of history buffer).
		// should be in the range 8 to 15.
		// larger values result in better compression at the expense of memory usage.
		// default value is 15 if deflateInit is used instead.
	level: -1,
		// must be -1, or between 0 and 9.
		// 1:  best speed.
		// 9:  best compression.
		// 0:  no compression.
		// -1: default. compromise between speed and compression (equal to 6) Z_DEFAULT_COMPRESSION
	memLevel: 8,
		// specifies how much memory should be allocated for internal compression state.
		// 1:  uses minimum memory but is slow and reduces compression ratio.
		// 9:  uses maximum memory for optimal speed.
		// 8:  default. Z_DEFAULT_MEMLEVEL
	strategy: 0,
		// used to tune the compression algorithm.
		// 0:  default. normal data. Z_DEFAULT_STRATEGY
		// 1:  data produced by a filter (or predictor). Z_FILTERED
		// 2:  force Huffman encoding only (no string match). Z_HUFFMAN_ONLY
		// 3:  limit match distances to one (run-length encoding). Z_RLE
	dictionary: null,
		// Buffer | TypedArray | DataView | ArrayBuffer (deflate/inflate only, empty dictionary by default)
	info: false,
		// if true, returns an object with buffer and engine.
};

// zlib.constants
DEFLATE: 1
DEFLATERAW: 5
GUNZIP: 4
GZIP: 3
INFLATE: 2
INFLATERAW: 6
UNZIP: 7
ZLIB_VERNUM: 4784
Z_BEST_COMPRESSION: 9
Z_BEST_SPEED: 1
Z_BLOCK: 5
Z_BUF_ERROR: -5
Z_DATA_ERROR: -3
Z_DEFAULT_CHUNK: 16384
Z_DEFAULT_COMPRESSION: -1
Z_DEFAULT_LEVEL: -1
Z_DEFAULT_MEMLEVEL: 8
Z_DEFAULT_STRATEGY: 0
Z_DEFAULT_WINDOWBITS: 15
Z_ERRNO: -1
Z_FILTERED: 1
Z_FINISH: 4
Z_FIXED: 4
Z_FULL_FLUSH: 3
Z_HUFFMAN_ONLY: 2
Z_MAX_CHUNK: Infinity
Z_MAX_LEVEL: 9
Z_MAX_MEMLEVEL: 9
Z_MAX_WINDOWBITS: 15
Z_MEM_ERROR: -4
Z_MIN_CHUNK: 64
Z_MIN_LEVEL: -1
Z_MIN_MEMLEVEL: 1
Z_MIN_WINDOWBITS: 8
Z_NEED_DICT: 2
Z_NO_COMPRESSION: 0
Z_NO_FLUSH: 0
Z_OK: 0
Z_PARTIAL_FLUSH: 1
Z_RLE: 3
Z_STREAM_END: 1
Z_STREAM_ERROR: -2
Z_SYNC_FLUSH: 2
Z_VERSION_ERROR: -6
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@