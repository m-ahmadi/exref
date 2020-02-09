var newfn = oldfn.bind(thisArg [, arg1, arg2, ...])

this.x = 9; 
var module = {
	x: 81,
	getX: function() { return this.x; }
};
module.getX(); // 81
var retrieveX = module.getX;
retrieveX(); // 9
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81

// another example:
var a = {foo: 1};
var b = {foo: 2};
function f() { return this.foo }
f()         // undefined
f.bind(a)() // 1
f.bind(b)() // 2

// prepend args
function f(a,b) { console.log(a,b) }
f(1,2)                  // 1,2
f.bind(null, 6, 7)()    // 6,7
f.bind(null, 6, 7)(4,2) // 6,7

// setTimeout() use case
var log = console.log;
var obj = {
	age: 30,
	// problem:
	foo: function () {
		console.log(this.age);   // 30
		
		setTimeout(function () {
			console.log(this.age); // undefined
		}, 1000);
	},
	// solution
	bar: function () {
		console.log(this.age);   // 30
		
		setTimeout(function () {
			console.log(this.age); // 30
		}.bind(this), 1000);
	}
};