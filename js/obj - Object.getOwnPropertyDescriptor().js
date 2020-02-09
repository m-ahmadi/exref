Object.getOwnPropertyDescriptor(obj, prop)
/*
	Browser compatibility
	
	Desktop
		Chrome					Firefox (Gecko)				Internet Explorer		Opera				Safari
		5						4.0 (2)						8						12					5
		
	Mobile
		Android					Firefox Mobile (Gecko)		IE Mobile				Opera Mobile		Safari Mobile
		Chrome for Android		?							?						?					?
		?
*/

var o;
o = {
	get foo() {
		return 17;
	}
};
Object.getOwnPropertyDescriptor(o, 'foo');
// Object { configurable: true, enumerable: true, get: /*the getter function*/, set: undefined }

o = {
	bar: 42
};
Object.getOwnPropertyDescriptor(o, 'bar');
// Object { configurable: true, enumerable: true, value: 42, writable: true }

o = {};
Object.defineProperty(o, 'baz', {
	value: 8675309,
	writable: false,
	enumerable: false
});
Object.getOwnPropertyDescriptor(o, 'baz');
// Object { value: 8675309, writable: false, enumerable: false, configurable: false }


/*
	In ES5, if the first argument to this method is not an object (a primitive), then it will cause a TypeError.
	In ES6, a non-object first argument will be coerced to an object at first.
*/
Object.getOwnPropertyDescriptor("foo", 0);
// ES5:		TypeError: "foo" is not an object
// ES6:		{configurable:false, enumerable:true, value:"f", writable:false}