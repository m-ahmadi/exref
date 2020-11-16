var buffer = new ArrayBuffer(?length=0) /*
allocates a fixed-length contiguous memory area
buffer content cannot be modified directly, only with TypedArray | DataView

buffer:
	not an array
	has fixed length (cannot be inc/dec-reased)
	takes exactly `length` much space in memory
	contains raw binary data (uninterpreted binary number)
*/

ArrayBuffer.isView(value)

ArrayBuffer.prototype.byteLength
ArrayBuffer.prototype.slice(begin=0, ?end=0)



var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer);