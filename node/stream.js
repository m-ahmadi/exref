const fs = require('fs');
var streamR = fs.createReadStream('file1.txt');
var streamW = fs.createWriteStream('file2.txt');

streamR.setEncoding('utf8')
streamR.readableFlowing === null|false|true

// a stream is nothing but an EventEmitter.
var data = '';
streamR.on('data', chunk=> data += chunk);
streamR.on('end', console.log);

// piping
streamR.pipe(streamW)
// or:
fs.createReadStream('input.txt.gz')
  .pipe( zlib.createGzip() )
  .pipe( streamW )

// other methods
streamR.read()
streamR.pause()
streamR.resume()
streamR.unpipe()

streamW.write('Some Data!!')
streamW.end('Ended.')
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// other examples
fs.createReadStream('sample.txt', { start: 90, end: 99 }) // read last 10 bytes of a 100 bytes long file

var stream = fs.createReadStream('/dev/input/event0');
setTimeout(() => {
  stream.close(); // may not close the stream.
  stream.push(null);
  stream.read(0);
}, 100);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ref
var readOptions = {
	flags:          'r',       // file system flag (r,w,a,...)
	encoding:       null,      // 'utf8' 'base64'
	fd:             null,      // file descriptor. if specified, path arg is ignored and no 'open' event will be emitted.
	mode:           0o666,     // sets permission and sticky bits (only if file was created)
	autoClose:      true,      // true: fd is closed on 'error' | 'end'. false: fd won't be closed.
	start:          0,         // start range of bytes to read. allowed values: 0 to Number.MAX_SAFE_INTEGER.
	end:            Infinity,  // end range of bytes to read.
	highWaterMark : 64 * 1024  // readable stream default is 16 kb.
};

var writeOptions = {
	flags:          'r',
	encoding:       'utf8',    // 'base64'
	fd:             null,
	mode:           0o666,
	autoClose:      true,
	start:          0
};

fs.createReadStream(path [, options])
fs.createWriteStream(path [, options])
// path:    string|buffer|url
// options: string|object
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
