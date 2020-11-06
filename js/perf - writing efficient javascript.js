// https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// monomorphism
/*
	When declaring a function with 2 parameters the compiler takes your word for it,
	and gets rough if the parameter types, parameter count or return type of the function changes.

	Programs in general tend to work better with expected monomorphic data structures,
	the same counts for compilers.
 */
function example(a, b) {
	// we expect a, b to be numeric
	console.log(++a * ++b);
};

example();       // bad
example(1);      // still bad
example('1', 2); // dammit meg
example(1, 2);   // good

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// unfolding
/*
	The compiler can resolve a variable's value at compile time and unfold it (in best case),
	so try to express as much as possible before the program actually executes.
	
	Constants as well as variables can be unfold as long as they don't make use of any runtime related computation.
*/
const a = 42;                  // we can easily unfold this
const b = 1337 * 2;            // we can resolve this expression
const c = a + b;               // still can be resolved
const d = Math.random() * c;   // we can only unfold 'c'
const e = 'Hello ' + 'Medium'; // works for other types too

// before unfolding
a;
b;
c;
d;
e;

// after unfolding
// we can do this at compile time!
42
2674
2716
Math.random() * 2716
'Hello Medium'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// inlining
/*
	The JIT compiler can figure out, which part of your code gets commonly executed.
	By splitting your functions into small chunks,
	it can inline them at compile time and trace hot functions later easier to allow even faster execution.
 */
// Likely gets inlined
// [✓] Single return statement
// [✓] Always returns
// [✓] Monomorphic return type
// [✓] Likely monomorphic parameters
// [✓] Single body statement
// [✓] Isn't wrapped inside another function
// ...
function isNumeric(n) {
	return (n >= 48 && n <= 57);
};

let cc = '8'.charCodeAt(0);

// before inlining
if (isNumeric(cc)) {}

// after inlining
if (cc >= 48 && cc <= 57) {}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// declarations
/*
	Avoid declaring functions/closures and objects inside frequently called tasks.
	Objects (functions are objects too) get pushed into the heap which is affected by the garbage collector,
	where a lot of wat & wut is required to determine the next step (like freeing or not).

	In contrary declaring variables performs very fast because they get pushed into the stack.
	E.g. a function has its own stack frame where all relative variables get pushed into,
	whenever it exits it's stack gets immediately freed up.
 */
// bad
function a() {
	// never declare a function inside a function
	// it has to be allocated on each call
	let doSomething = function () {
		return 1;
	};
	return doSomething();
};

let doSomething = function () {
	return 1;
};

/*
	good
	doSomething is declared outside
	so we only call it, instead of
	declaring+calling it each time we call 'b'
*/
function b() {
	return doSomething();
};

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// arguments
/*
	Function calls are expensive (if the compiler cannot inline them).
	Try to use as less as possible arguments to make a call and don’t modify arguments inside a function.
*/
function mul(a, b) {
	return (arguments[0] * arguments[1]); // bad, very slow
	return (a * b); // good
};

function test(a, b) {
	a = 5; // bad, dont modify argument identifiers
	let tmp = a; // good
	tmp *= 2; // we can now modify our fake 'a'
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// data types
/*
	Try to make as much use as possible of Numbers and Booleans,
	they are a lot faster in comparison to other primitives.
	
	E.g. declaring a String turns into a big chunk of garbage because,
	Strings are complex objects with many pre-shipped properties, behind the scenes.
	Also avoid working with negative numbers and doubles with many decimal places.
*/
const ROBOT = 0;
const HUMAN = 1;
const SPIDER = 2;

let E_TYPE = {
	Robot: ROBOT,
	Human: HUMAN,
	Spider: SPIDER
};

// bad
// avoid uncached strings in heavy tasks (or better in general)
if (entity.type === 'Robot') {
	
}

// good
// the compiler can resolve member expressions
// without much deepness pretty fast
if (entity.type === E_TYPE.Robot) {
	
}

// perfect
// right side of binary expression can even get unfold
if (entity.type === ROBOT) {
	
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// strict and abstract operators
/*
	Attempt to use triple equality operators like “===” (strict) over “==” (loosely, abstract).
	Going strict guarantees the compiler to expect an specific value,
	so there is no need to compare the expression with multiple cases (eg. n>0=^true),
	which ends up in better performance scenarios at all.
*/

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// toxicity
/*
	The following is a list of language features, which reduce or block the code optimization process.
	eval
	with
	try/catch
*/

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// objects
/*
	Object instances usually try to share the same hidden classes,
	be careful when adding a new member variable to an instantiated object since,
	a new hidden class will be created and things are getting more complicated for the compiler.
*/
// our hidden class 'hc_0'
class Vector {
	constructor(x, y) {
		// compiler finds and expects member declarations here
		this.x = x;
		this.y = y;
	}
};

// both vector objects share hidden class 'hc_0'
let vec1 = new Vector(0, 0);
let vec2 = new Vector(2, 2);

// bad, vec2 got hidden class 'hc_1' now
vec2.z = 0;

// good, compiler knows this member
vec2.x = 1;
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// loops
/*
	Cache your array lengths and use arrays with monomorphic types.
	Avoid usage of “for..in” and looping over objects in general because it’s especially slow.
	The continue and break statement act faster than the if statement’s body inside loops.
	Hold your loops clean and outsource everything into small sub functions, so the compiler feels more comfortable.
	Also using the prefix increment operator (++i instead of i++) gives small performance power-ups.
*/

let badarray = [1, true, 0]; // bad, dont mix types
let array = [1, 0, 1]; // happy compiler

// bad choice
for (let key in array) {
	
};

// better
// but always try to cache the array size
let i = 0;
for (; i < array.length; ++i) {
	key = array[i];
};

// good
let i = 0;
let key = null;
let length = array.length;
for (; i < length; ++i) {
	key = array[i];
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@