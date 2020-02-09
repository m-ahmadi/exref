/*
	new in es8 or es2017
	typed array architecture:
	buffers and views
*/
//                   bytes    description                                         value range            available in node
Int8Array         // 1        8-bit  two's complement signed integer              -128  to  127               y
Uint8Array        // 1        8-bit  unsigned integer                                0  to  255               y
Uint8ClampedArray // 1        8-bit  unsigned integer (clamped)                      0  to  255               y
Int16Array        // 2        16-bit two's complement signed integer            -32768  to  32767             y
Uint16Array       // 2        16-bit unsigned integer	unsigned                       0  to  65535             y
Int32Array        // 4        32-bit two's complement signed integer       -2147483648  to  2147483647        y
Uint32Array       // 4        32-bit unsigned integer                                0  to  4294967295        y
Float32Array      // 4        32-bit IEEE floating point number              1.2x10^38  to  3.4x10^38         n
Float64Array      // 8        64-bit IEEE floating point number             5.0x10^324  to  1.8x10^308        n
BigInt64Array     // 8        64-bit two's complement signed integer             -2^63  to  2^63 - 1          n
BigUint64Array    // 8        64-bit unsigned integer                                0  to  2^64 - 1          n
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// constructor
new ArrayBuffer(length)

new TypedArray()
new TypedArray(length)
new TypedArray(typedArray)
new TypedArray(object)
new TypedArray(buffer [, byteOffset [, length]])
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// static methods
TypedArray.from(source [, mapFn[, thisArg]])
Uint8Array.from('123')                 // [1, 2, 3]
Uint8Array.from([1, 2, 3], x => x + x) // [2, 4, 6]

TypedArray.of(element0 [, element1[, ... [, elementN]]])
Uint8Array.of(1)             // Uint8Array [ 1 ]
Uint8Array.of('1', '2', '3') // Uint8Array [ 1, 2, 3 ]
Uint8Array.of(1, 2, 3)       // Uint8Array [ 1, 2, 3 ]
Uint8Array.of(undefined)     // Uint8Array [ 0 ]
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// instance methods
// set
typedarray.set(array|typedarray [, offset])

var buffer = new ArrayBuffer(8)
var uint8 = new Uint8Array(buffer)
uint8.set([1, 2, 3], 3); // Uint8Array [ 0, 0, 0, 1, 2, 3, 0, 0 ]
//----------------------------------------------------------------------------
// map
var uint8 = new Uint8Array([2, 4, 5]);
uint8.map(i => i+2) // Uint8Array(3) [4, 6, 8]
//----------------------------------------------------------------------------
// subarray
typedarray.subarray([begin [,end]])

const uint8 = new Uint8Array([1, 2, 3, 4, 5]);

uint8.subarray(1, 3) // Uint8Array [2, 3]
uint8.subarray(1)    // Uint8Array [2, 3, 4, 5]

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// merge two typed arrays

// needs twice the memory
var a = new Int8Array( [ 1, 2, 3 ] )
var b = new Int8Array( [ 4, 5, 6 ] )
var c = new Int8Array(a.length + b.length)
c.set(a)
c.set(b, a.length)
c // Int8Array(6) [1, 2, 3, 4, 5, 6]

// another way
var myArrays = [a, b];
var merged = Int8Array.from( Array.prototype.concat(...myArrays.map(a => Array.from(a))) );
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// buffer
var buffer = new ArrayBuffer(16);
buffer.byteLength // 16

// view
var int32View = new Int32Array(buffer);
var int16View = new Int16Array(buffer);

// overflow causes the value to be 0
new Uint8Array([127, 255, 256, 257]) // [127, 255, 0, 0]
new Uint16Array([65535, 65536])      // [65535, 0]