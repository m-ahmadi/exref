// es8
// architecture: buffers and views
//                 min          max            bytes      node    description                                         
Int8Array         -128          127            1      //  ✔        8-bit  two's complement  signed    integer
Uint8Array         0            255            1      //  ✔        8-bit                    unsigned  integer               
Uint8ClampedArray  0            255            1      //  ✔        8-bit                    unsigned  integer (clamped)     
Int16Array        -32768        32767          2      //  ✔       16-bit  two's complement  signed    integer
Uint16Array        0            65535          2      //  ✔       16-bit                    unsigned  integer
Int32Array        -2147483648   2147483647     4      //  ✔       32-bit  two's complement  signed    integer
Uint32Array        0            4294967295     4      //  ✔       32-bit                    unsigned  integer
Float32Array       1.2*10**38   3.4*10**38     4      //  ❌       32-bit  IEEE                        floating point number
Float64Array       5.0*10**324  1.8*10**308    8      //  ❌       64-bit  IEEE                        floating point number
BigInt64Array     -2**63        2**63 - 1      8      //  ❌       64-bit  two's complement  signed    integer
BigUint64Array     0            2**64 - 1      8      //  ❌       64-bit                    unsigned  integer

new TypedArray() // no actual constructor called TypedArray (just an "umbrella" term)
new TypedArray(length)
new TypedArray(typedArray)
new TypedArray(object)
new TypedArray(buffer, ?byteOffset, ?length)

TypedArray.from(source, ?mapFn, ?thisArg)
TypedArray.of(element0, ?element1, ..., ?elementN)

typedarray.set(array|typedarray, ?offset)
typedarray.map(callbackfn, ?thisArg)
typedarray.subarray(?begin, ?end)

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

Uint8Array.from('123')                 // Uint8Array [1, 2, 3]
Uint8Array.from([1, 2, 3], x => x + x) // Uint8Array [2, 4, 6]

Uint8Array.of(1)             // Uint8Array [1]
Uint8Array.of('1', '2', '3') // Uint8Array [1, 2, 3]
Uint8Array.of(1, 2, 3)       // Uint8Array [1, 2, 3]
Uint8Array.of(undefined)     // Uint8Array [0]

Int8Array.of(126, 127, 128, 129, 130)  // [126, 127, -128, -127, -126]
Uint8Array.of(254, 255, 256, 257, 258) // [254, 255, 0, 1, 2]
Uint16Array.of(65535, 65536)           // [65535, 0]

// set
var buffer = new ArrayBuffer(8)
var uint8 = new Uint8Array(buffer)
uint8.set([1, 2, 3], 3); // Uint8Array [ 0, 0, 0, 1, 2, 3, 0, 0 ]

// map
var uint8 = new Uint8Array([2, 4, 5]);
uint8.map(i => i+2) // Uint8Array(3) [4, 6, 8]

// subarray
var uint8 = new Uint8Array([1, 2, 3, 4, 5]);
uint8.subarray(1, 3) // Uint8Array [2, 3]
uint8.subarray(1)    // Uint8Array [2, 3, 4, 5]

// buffer
var buffer = new ArrayBuffer(16);
buffer.byteLength // 16

// view
var int32View = new Int32Array(buffer);
var int16View = new Int16Array(buffer);

// overflow causes the value to be 0
new Uint8Array([127, 255, 256, 257]) // [127, 255, 0, 0]
new Uint16Array([65535, 65536])      // [65535, 0]
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
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
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@