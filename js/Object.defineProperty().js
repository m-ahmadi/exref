Object.defineProperty(obj, 'prop', descriptor={
	value:        undefined,
	writable:     false,
	configurable: false,
	enumerable:   false,
})

Object.defineProperty(obj, 'prop', {
	value: function () {
		// this is a method
	},

});

Object.defineProperty(obj, 'prop', {
	get: function () {
		// this function is executed each time this prop is accessed
		// and its return value becomes the value of this prop
		
		return; 
	},
	
	set : function () {
		// this function is executed each time a value is assigned to this prop
		// and the assigned value is passed to this function as argument
	}
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// defaults
var o = {};
o.a = 1;
// same as:
Object.defineProperty(o, 'a', {
	value: 1,
	writable: true,
	configurable: true,
	enumerable: true
});

// on the other hand,
Object.defineProperty(o, 'a', { value: 1 });
// same as:
Object.defineProperty(o, 'a', {
	value: 1,
	writable: false,
	configurable: false,
	enumerable: false
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// getter setter
var o = {};

var bValue = 38;
Object.defineProperty(o, 'b', {
	get: function () {
		return bValue;
	},
	set: function (newValue) {
		bValue = newValue;
	},
	enumerable: true,
	configurable: true
});
o.b; // 38


// a property cannot both have accessors and be writable or have a value:
Object.defineProperty(o, 'conflict', {
	value: 0x9f91102,
	get: function () {
		return 0xdeadbeef;
	}
});
// Uncaught TypeError: Invalid property.  
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// writable
var o = {}; 

Object.defineProperty(o, 'a', {
	value: 37,
	writable: false
});

console.log(o.a); // logs 37
o.a = 25;         // no error thrown (it would throw in strict mode, even if the value had been the same)
console.log(o.a); // logs 37. The assignment didn't work.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// enumerable
var o = {};

Object.defineProperty(o, 'a', {
	value: 1,
	enumerable: true
});

Object.defineProperty(o, 'b', {
	value: 2,
	enumerable: false
});

Object.defineProperty(o, 'c', {
	value: 3
}); // enumerable defaults to false

o.d = 4; // enumerable defaults to true when creating a property by setting it

for (var i in o) {
	console.log(i);
}
// logs 'a' and 'd' (in undefined order)

Object.keys(o); // ['a', 'd']

o.propertyIsEnumerable('a'); // true
o.propertyIsEnumerable('b'); // false
o.propertyIsEnumerable('c'); // false
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// configurable
var o = {};
Object.defineProperty(o, 'a', {
	get: function () { return 1; },
	configurable: false
});

Object.defineProperty(o, 'a', { configurable: true });            // throws a TypeError
Object.defineProperty(o, 'a', { enumerable: true });              // throws a TypeError
Object.defineProperty(o, 'a', { set: function() {} });            // throws a TypeError (set was undefined previously)
Object.defineProperty(o, 'a', { get: function() { return 1; } }); // throws a TypeError (even though the new get does exactly the same thing)
Object.defineProperty(o, 'a', { value: 12 });                     // throws a TypeError

console.log(o.a); // logs 1
delete o.a;       // nothing happens
console.log(o.a); // logs 1
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function Archiver() {
	var temperature = null;
	var archive = [];

	Object.defineProperty(this, 'temperature', {
	get: function () {
		console.log('get!');
		return temperature;
	},
	set: function (value) {
		temperature = value;
		archive.push({ val: temperature });
	}
	});

	this.getArchive = function () { return archive; };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@