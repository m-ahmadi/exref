var obj = {},
	foo = null;

typeof obj === 'object' // true
typeof foo === 'object' // true

foo !== null && typeof foo === 'object' // false

// accept functions as objects
foo !== null && (typeof foo === 'object' || typeof foo === 'function')

// don't accept arrays as objects
foo !== null &&
typeof foo === 'object' &&
Array.prototype.toString.call(foo) !== '[object Array]'
// !$.isArray(foo)