// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy

var proxy = new Proxy(target={}, handler={
	construct(target, argumentsList, newTarget) {},
	apply(target, thisArg, argumentsList) {},
	defineProperty(target, property, descriptor) {},
	deleteProperty(target, property) {},
	get(target, property, receiver) {},
	getOwnPropertyDescriptor(target, property) {},
	getPrototypeOf(target) {},
	has(target, property) {},
	isExtensible(target) {},
	ownKeys(target) {},
	preventExtensions(target) {},
	set(target, property, value, receiver) {},
	setPrototypeOf(target, prototype) {},
})

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

var a = new Proxy({}, {
	get: function (target, prop) {
		console.log('the property', prop, 'been read');
		return target[prop];
	}
});
a.foo = 32;
a.foo // 32    log: 'prop foo been read'


var b = new Proxy({}, {
	set: function (target, prop, val) {
		target[prop] = val;
		console.log('prop', prop, 'been set');
	}
});
b.foo = 24; // log: 'prop foo been set'
b.foo       // 24
