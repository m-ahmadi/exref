method(function () {
	
});

method(() => {
	// doesn't have `this` and `arguments`
	// can't be called with new
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// implicit return

// syntax:
var fn = () => ();
var fn = arg => expression; // single-value return

// example:
var fn = arg => { name: arg, age: 30 }   // SyntaxError: Unexpected token :
var fn = arg => ({ name: arg, age: 30 }) // returns whatever is between parentheses: fn() {name: undefined, age: 30}
(arg => ({ name: arg, age: 30 }))()      // same as above but anonymous: {name: undefined, age: 30}

// another example:
var evens = [2, 4, 6, 8, 10];
odds = evens.map(v => v + 1)                     // [3, 5, 7, 9, 11]
pairs = evens.map(v => ({ even: v, odd: v + 1 })) // [ {even: 3, odd: 4}, {even: 5, odd: 7}, ... ]
nums = evens.map((v, i) => v + i)

odds  = evens.map(function (v) { return v + 1; })
pairs = evens.map(function (v) { return { even: v, odd: v + 1 }; })
nums  = evens.map(function (v, i) { return v + i; })
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// return shorthands in curlyless body

// comma + parens
var f = () => (3, 4);

// logical and (ONLY if first operand truthy)
var f = () => 3 && 4; // 4
var f = () => 0 && 4; // 0

// logical or  (ONLY if first operand falsy)
var f = () => 0 || 7; // 7
var f = () => 1 || 7; // 1
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// lexical this
// arrow functions automatically bind this
// (that's why they overwrite the this value in a jquery event handler)
var log = console.log;
var obj = {
	age: 30,
	// problem:
	foo: function () {
		log(this.age); // 30
		
		setTimeout(function () {
			log(this.age); // undefined
		}, 1000);
	},
	// solution:
	bar: function () {
		log(this.age); // 30
		
		setTimeout(function () {
			log(this.age); // 30
		}.bind(this), 1000);
	},
	
	// es6:
	baz: function () {
		log(this.age); // 30
		
		setTimeout(() => {
			log(this.age); // 30
		}, 1000);
	}
};

// context of an arrow function is unchangable
function f1() {return this.a}

var a = 1;
var f2 = () => this.a;

f1.bind({a:2})() // 2
f2.bind({a:2})() // 1
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// multiple arrow function (curried function or functions that return another function)
var add = x => y => x + y;
// same as:
var add = function (x) {
	return function (y) {
		return x + y;
	};
};
add(2)(2); // 4

//--------------------------

var add4to = add(4);
add4to(10); // 14
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@