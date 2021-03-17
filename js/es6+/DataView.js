var dataView = new DataView(buffer=ArrayBuffer|SharedArrayBuffer, ?byteOffset=0, ?byteLength=0)

DataView {
	buffer
	byteLength
	byteOffset

	getInt8()
	getUint8()
	getInt16()
	getUint16()
	getInt32()
	getUint32()
	getFloat32()
	getFloat64()
	getBigInt64()
	getBigUint64()
	setInt8()
	setUint8()
	setInt16()
	setUint16()
	setInt32()
	setUint32()
	setFloat32()
	setFloat64()
	setBigInt64()
	setBigUint64()
}


var buffer = new ArrayBuffer(16);
var view = new DataView(buffer, 0);

view.setInt16(1, 42)
view.getInt16(1) // 42