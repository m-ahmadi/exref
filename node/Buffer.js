/*
a buffer is:
	a chunk of memory.
	similar to an array of integers but corresponds to a raw memory allocation outside the v8 heap.
	a temporary holding spot for data being moved from one place to another.
*/

Buffer.concat(list=Buffer[] | Uint8Array[], ?totalLength=int): Buffer

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Buffer.alloc(size [, fill=0[, encoding='utf8']]) /*
size:      integer
	the desired length of the new buffer.
	if size is larger than buffer.constants.MAX_LENGTH or smaller than 0, ERR_INVALID_OPT_VALUE is thrown.
	if size is 0, a zero-length Buffer is created.
	if size is not a number, a TypeError will be thrown.
fill:      string | Buffer | Uint8Array | integer
	a value to pre-fill the new Buffer with. default: 0.
	if specified, the allocated Buffer is initialized with buf.fill(fill)
	if undefined, the buffer will be zero-filled.
encoding:  string
	if fill is a string, this is its encoding. default: 'utf8'.
	if fill & encoding are specified, the allocated Buffer is initialized with buf.fill(fill, encoding).

allocates a new Buffer of size bytes.
Buffer.alloc() is slower than Buffer.allocUnsafe() but ensures that created Buffer doesn't contain sensitive data.
*/
var buf = Buffer.alloc(5)     // [0, 0, 0, 0, 0]

Buffer.alloc(4)                 // [0, 0, 0, 0] zero-filled
Buffer.alloc(4, 1)              // [1, 1, 1, 1] same as buf.fill(1)
Buffer.alloc(2, 97)             // [97, 97]
Buffer.alloc(3, 'a')            // [97, 97, 97]
Buffer.alloc(4, 'aG', 'base64') // [104, 104, 104, 104] same as: buf.fill('aG', 'base64')

Buffer.alloc(0)                 // [] zero-length
Buffer.alloc(MAX_LENGTH + 1)    // ERR_INVALID_OPT_VALUE
Buffer.alloc(-1)                // ERR_INVALID_OPT_VALUE
Buffer.alloc(''|true)           // TypeError
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
buf.fill(value [, offset=0[, end=buf.length]] [, encoding='utf8'])
buf.write(string [, offset=0[, length=buf.length - offset]][, encoding='utf8'])

var buf = Buffer.allocUnsafe(3).fill('h') // [104, 104, 104]

buf.length     // 3
buf.toString() // decode
buf.toJSON()

buf.fill('x')           // [120, 120, 120]
buf.fill('aazz', 'hex') // [170, 170, 170]
buf.fill('a')           // [97, 97, 97]

buf.write('\u00bd + \u00bc = \u00be', 0) // 3
buf // [194, 189, 32]
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Buffer.from(string[, encoding])
Buffer.from(array)
Buffer.from(buffer)
Buffer.from(object[, offsetOrEncoding[, length]])
Buffer.from(arrayBuffer[, byteOffset[, length]])
//------------------------------------------------
// from string
Buffer.from('tést')           // [116, 195, 169, 115, 116]. utf-8 bytes [0x74, 0xc3, 0xa9, 0x73, 0x74].
Buffer.from('tést', 'latin1') // [116, 233, 115, 116]. Latin-1 bytes [0x74, 0xe9, 0x73, 0x74]
Buffer.from('buffer')         // utf-8 bytes of the string 'buffer'

var buf1 = Buffer.from('this is a tést');
var buf2 = Buffer.from('7468697320697320612074c3a97374', 'hex');
//------------------------------------------------
// from array
Buffer.from([1, 2, 3])        // [1, 2, 3]
//------------------------------------------------
// from buffer
var buf1 = Buffer.from('buf'); // [98, 117, 102]
var buf2 = Buffer.from(buf1);  // [98, 117, 102]
//------------------------------------------------
// from object
var buf = Buffer.from( new String('obj') ); // [111, 98, 106]
//------------------------------------------------
// from array buffer
var arr = new Uint16Array([5000, 4000]);
var buf = Buffer.from(arr.buffer); // shares memory with `arr`.
arr[1] = 6000; // changing the original Uint16Array changes the Buffer also.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Buffer.allocUnsafe(size) /*
created buffer is uninitialized.
created buffer data are unknown and may contain sensitive data.
needs overwrite using buff.fill() or buff.write().
faster than Buffer.alloc().
*/

Buffer.allocUnsafe(2)              // [96, 4]. uninitialized buffer of length 2
Buffer.allocUnsafe(4)              // [240, 117, 233, 2]
Buffer.allocUnsafe(0)              // [] zero-length Buffer
Buffer.allocUnsafe('')             // TypeError
Buffer.allocUnsafe( -1 )           // ERR_INVALID_OPT_VALUE
Buffer.allocUnsafe(MAX_LENGTH + 1) // ERR_INVALID_OPT_VALUE
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// buffer constants
var buffer = require('buffer');
buffer.constants // not on the Buffer global or a Buffer instance.
{ 
	MAX_LENGTH: 2147483647,
	MAX_STRING_LENGTH: 268435440
}