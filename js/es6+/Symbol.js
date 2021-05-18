Symbol()

// static props
Symbol.asyncIterator
Symbol.hasInstance
Symbol.isConcatSpreadable
Symbol.iterator
Symbol.match
Symbol.matchAll
Symbol.replace
Symbol.search
Symbol.split
Symbol.species
Symbol.toPrimitive
Symbol.toStringTag
Symbol.unscopables

// static methods
Symbol.for(key)
Symbol.keyFor(sym)

// instance props
Symbol.prototype.description

// instance methods
Symbol.prototype.toSource()
Symbol.prototype.toString()
Symbol.prototype.valueOf()
Symbol.prototype[@@toPrimitive]
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

typeof Symbol()        // 'symbol'
typeof Symbol('foo')   // 'symbol'
typeof Symbol.iterator // 'symbol'

Symbol('foo') === Symbol('foo') // false
let sym = new Symbol()          // TypeError: Symbol is not a constructor
'a' + sym                       // TypeError: Cannot convert a Symbol value to a string
sym.toString()                  // 'Symbol()'

// private properties of objects
let x = Symbol('name');
let o = {};
o[x] = 'mohammad';
o[ Symbol('age') ] = 12;
// with computed keys:
let j = {
	[ Symbol('name') ]: 'ali',
	[ Symbol('age') ]: 42,
};
Object.getOwnPropertySymbols(o) // [Symbol(name), Symbol(age)]
for (let k in o) { console.log(o[k]) } // undefined

// global symbol registry
Symbol.for()    // retrives key, creates if not found
Symbol.keyFor() // retrives key

let globalSym = Symbol.for('foo'); // create a new global symbol
Symbol.keyFor(globalSym) // 'foo'

let localSym = Symbol()
Symbol.keyFor(localSym)  // undefined


Symbol.for('foo') // create a new global symbol
Symbol.for('foo') // retrieve the already created symbol

// Same global symbol, but not locally
Symbol.for('bar') === Symbol.for('bar')  // true
Symbol('bar') === Symbol('bar')          // false