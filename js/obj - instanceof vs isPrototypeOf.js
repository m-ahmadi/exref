//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
instanceof
/*
	The instanceof operator tests:
		
		whether an object has in its prototype chain the prototype property of a constructor.
		
		presence of constructor.prototype in object's prototype chain.
*/
// defining constructors
function C() {}
function D() {}

var o = new C();

o instanceof C;		// true, because: Object.getPrototypeOf(o) === C.prototype
o instanceof D;		// false, because D.prototype is nowhere in o's prototype chain
o instanceof Object; // true, because:
C.prototype instanceof Object // true

C.prototype = {};
var o2 = new C();

o2 instanceof C; // true
o instanceof C; // false, because C.prototype is nowhere in o's prototype chain anymore

D.prototype = new C(); // use inheritance
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Object.prototype.isPrototypeOf()
/*
	The isPrototypeOf() method checks if an object exists in another object's prototype chain.
*/
function Foo() {}
function Bar() {}
function Baz() {}

Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);

var baz = new Baz();

console.log(Baz.prototype.isPrototypeOf(baz)); // true
console.log(Bar.prototype.isPrototypeOf(baz)); // true
console.log(Foo.prototype.isPrototypeOf(baz)); // true
console.log(Object.prototype.isPrototypeOf(baz)); // true