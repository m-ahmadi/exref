// https://www.zlib.net/manual.html
var options = {
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
	
	// additional options, for internal needs:
	chunkSize: 16 * 1024, // size of generated data chunks
	raw: false,           // do raw deflate
	gzip: true,           // create gzip wrapper
	to: "",               // if equal to 'string', then result will be "binary string" (each char code [0..255])
	header: {             // custom header for gzip
		text: true,         // true if compressed data believed to be text
		time: 0,            // modification time, unix timestamp
		os: 0,              // operation system code
		extra: [],          // array of bytes with extra data (max 65536)
		name: "",           // file name (binary string)
		comment: "",        // comment (binary string)
		hcrc: false         // true if header crc should be added
	}
};