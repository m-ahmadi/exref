var o = {};
o.a = 1;
// or
var o2 = { b: 2, c: 3 };

// same as:
Object.defineProperty(o, 'a', {
	value: 1,
	writable: true,
	configurable: true,
	enumerable: true
});

Object.getOwnPropertyDescriptor(o, 'a') // {value: 1, writable: true, enumerable: true, configurable: true}