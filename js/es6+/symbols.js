Symbol('foo') === Symbol('foo'); // false
let sym = new Symbol();          // TypeError: Symbol is not a constructor
'a' + sym                        // TypeError: Cannot convert a Symbol value to a string
sym.toString()                   // 'Symbol()'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// private properties of objects
let x = Symbol('name');
let o = {};
o[x] = 'mohammad';
o[ Symbol('age') ] = 12;

o // Object {Symbol(name): 'mohammad', Symbol(age): 12}

// with computed keys:
let j = {
	[ Symbol('name') ]: 'ali',
	[ Symbol('age') ]: 42,
	
};

j // Object {Symbol(name): 'ali', Symbol(age): 42}

 Object.getOwnPropertySymbols(o) // [Symbol(name), Symbol(age)]
 
for (let k in o ) { console.log(o[k]) } // undefined
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// global symbol registry
Symbol.for()    // retrives key, creates if not found
Symbol.keyFor() // retrives key


let globalSym = Symbol.for('foo'); // create a new global symbol
Symbol.keyFor(globalSym); // 'foo'

let localSym = Symbol();
Symbol.keyFor(localSym); // undefined


Symbol.for('foo'); // create a new global symbol
Symbol.for('foo'); // retrieve the already created symbol

// Same global symbol, but not locally
Symbol.for('bar') === Symbol.for('bar'); // true
Symbol('bar') === Symbol('bar'); // false