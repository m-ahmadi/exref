var stream = require('stream');

// https://nodejs.org/api/stream.html#class-writeStreamritable
var w = new stream.Writable() extends EventEmitter
'close|drain|error|finish|pipe|unpipe'
w.closed                = boolean
w.destroyed             = boolean
w.errored               = Error
w.writable              = boolean
w.writableAborted       = boolean
w.writableEnded         = boolean
w.writableCorked        = int
w.writableFinished      = boolean
w.writableHighWaterMark = number
w.writableLength        = number
w.writableNeedDrain     = boolean
w.writableObjectMode    = boolean
w.cork()
w.destroy([error])
w.end([chunk[, encoding]][, callback])
w.setDefaultEncoding(encoding)
w.uncork()
w.write(chunk[, encoding][, callback])
w[Symbol.asyncDispose]()

// https://nodejs.org/api/stream.html#class-readStreameadable
var r = new stream.Readable() extends EventEmitter
'close|data|end|error|pause|readable|resume'
r.closed                = boolean
r.destroyed             = boolean
r.readable              = boolean
r.readableAborted       = boolean
r.readableDidRead       = boolean
r.readableEncoding      = null | string
r.readableEnded         = boolean
r.errored               = Error
r.readableFlowing       = null | false | true
r.readableHighWaterMark = number
r.readableLength        = number
r.readableObjectMode    = boolean
r.destroy([error])
r.isPaused()
r.pause()
r.pipe(destination[, options])
r.read([size])
r.resume()
r.setEncoding(encoding)
r.unpipe([destination])
r.unshift(chunk[, encoding])
r.wrap(stream)
r[Symbol.asyncIterator]()
r[Symbol.asyncDispose]()

r.compose(stream[, options])
r.drop(limit[, options])
r.every(fn[, options])
r.filter(fn[, options])
r.forEach(fn[, options])
r.find(fn[, options])
r.flatMap(fn[, options])
r.iterator([options])
r.map(fn[, options])
r.some(fn[, options])
r.reduce(fn[, initial[, options]])
r.toArray([options])
r.take(limit[, options])


// https://nodejs.org/api/stream.html#streampipelinesource-transforms-destination-callback
stream.pipeline(source[, ...transforms], destination, callback)
stream.pipeline(streams, callback)


var fs = require('fs');
// https://nodejs.org/api/fs.html#fscreatereadstreampath-options
fs.createReadStream(path=''|Buffer|URL, ?options=''|{
	flags:          'r',       // file system flag (r,w,a,...)
	encoding:       null,      // 'utf8' 'base64'
	fd:             null,      // file descriptor. if specified, path arg is ignored and no 'open' event will be emitted.
	mode:           0o666,     // sets permission and sticky bits (only if file was created)
	autoClose:      true,      // true: fd is closed on 'error' | 'end'. false: fd won't be closed.
	start:          0,         // start range of bytes to read. allowed values: 0 to Number.MAX_SAFE_INTEGER.
	end:            Infinity,  // end range of bytes to read.
	highWaterMark : 64 * 1024, // readable stream default is 16 kb.
})

// https://nodejs.org/api/fs.html#fscreatewritestreampath-options
fs.createWriteStream(path=''|Buffer|URL, ?options=''|{
	flags:          'r',
	encoding:       'utf8',    // 'base64'
	fd:             null,
	mode:           0o666,
	autoClose:      true,
	start:          0,
})

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

// write chunks to file
var writeStream = fs.createWriteStream('file.txt');
var count = 0;
var timeoutId = setInterval(() => {
	var line = 'hello my name is ' + Math.random() + '\n';
	writeStream.write(line);
	count++;
	console.log(`wrote line ${count} to file`);
	if (count > 10) {
		writeStream.end('Ended.');
		clearTimeout(timeoutId);
	}
}, 100);



// read file in 65536 bytes chunks
fs.writeFileSync('file.txt', Array(10).fill('a'.repeat(65536)).join('\n'));
var readStream = fs.createReadStream('file.txt');
readStream.setEncoding('utf8');
var data = '';
readStream.on('data', chunk => {
	console.log('read chunk', chunk.length);
	data += chunk
});
readStream.on('end', () => console.log('done. total:', data.length));



// piping
fs.writeFileSync('a.txt', Array(10).fill('a'.repeat(65536)).join('\n'));
var readStream = fs.createReadStream('a.txt');
var writeStream = fs.createWriteStream('b.txt');
readStream.pipe(writeStream);



// piping - with middleman
var zlib = require('zlib');
fs.writeFileSync('a.txt', Array(100).fill('a'.repeat(65536)).join('\n'));
var readStream = fs.createReadStream('a.txt');
var writeStream = fs.createWriteStream('a.txt.gz');
readStream
	.pipe( zlib.createGzip() )
	.pipe( writeStream );



// piping - pipeline
var zlib = require('zlib');
fs.writeFileSync('input.txt', Array(1000).fill('a'.repeat(65536)).join('\n'));
var readStream = fs.createReadStream('input.txt');
var gzipStream = zlib.createGzip();
var writeStream = fs.createWriteStream('input.txt.gz');
stream.pipeline(readStream, gzipStream, writeStream, (err) => {
	if (err) console.error('error occurred:', err);
});



// read last 10 bytes of a 100 bytes long file
fs.createReadStream('sample.txt', {start: 90, end: 99})



// read chunks manually
fs.writeFileSync('a.txt', [...Array(10)].map(Math.random).join('\n'));
var readStream = fs.createReadStream('a.txt');
readStream.on('readable', () => {
  var chunk;
  while (null !== (chunk = readStream.read())) {
    console.log('chunk', ''+chunk); // notice how things are printed
  }
});
readStream.on('end', () => console.log('end'));



// closing conundrum
var stream = fs.createReadStream('/dev/input/event0');
setTimeout(() => {
	stream.close(); // may not close the stream
	stream.push(null);
	stream.read(0);
}, 100);



// read file line by line
fs.writeFileSync('a.txt', [...Array(100)].map(Math.random).join('\n'));
var readline = require('readline');
var writeStream = fs.createWriteStream('b.txt');
var rd = readline.createInterface({
	input: fs.createReadStream('a.txt'),
	output: process.stdout,
	console: false,
});
rd.on('line', line => writeStream.write(line + (line.includes('77')?'\t###':'') + '\n'));
rd.on('close', () => console.log('all done'));
