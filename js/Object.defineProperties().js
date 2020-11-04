Object.defineProperties(obj, props)

var obj = {};

Object.defineProperties(obj, {
	'property1': {
		value: true,
		writable: true,
		enumerable: true,
		configurable: true
	},
	'property2': {
		value: 'Hello',
		writable: false,
		enumerable: false,
		configurable: false
	},
	'property3': {
		get: function () { return this.property2; }
	},
	'property4': {
		set: function (v) { this.property2 = v; }
	}
	// etc. etc.
});