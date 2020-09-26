// turn array into argument list
var arr = [3, 5, 1];

Math.max(3, 5, 1) // 5
Math.max(arr)     // NaN (Math.max expects a list of numeric arguments, not a single array)
Math.max(...arr)  // 5 (spread turns array into a list of arguments)

function foo(a,b,c) {console.log(a,b,c)}
foo(1,2,3)        // 1 2 3
foo([1,2,3])      // [1,2,3] undefined undefined
foo(...[1,2,3])   // 1 2 3
//-----------------------------------------------------------------------------
// turn string into array of characters:
[...'Foobar']           // ['F', 'o', 'o', 'b', 'a', 'r']
str = 'Hello'
[...str]                // same as str.split('')
console.log( [...str] ) // ['H', 'e', 'l', 'l', 'o']
console.log( ...str )   // H e l l o
//-----------------------------------------------------------------------------
// pass multiple iterables
var arr1 = [1, -2, 3, 4]
var arr2 = [8, 3, -8, 1]
Math.max(...arr1, ...arr2) // 8
//-----------------------------------------------------------------------------
// combine spread with normal values:
var arr1 = [1, -2, 3, 4]
var arr2 = [8, 3, -8, 1]
Math.max(1, ...arr1, 2, ...arr2, 25) // 25
//-----------------------------------------------------------------------------
// merge arrays (like concat):
var arr1 = [1, 2, 3]
var arr2 = [4, 5, 6]
var merge1 = [...arr1, ...arr2]           // [1, 2, 3, 4, 5, 6]
var merge2 = ['a', ...arr1, 'b', ...arr2] // ['a', 1, 2, 3, 'b', 4, 5, 6]
//-----------------------------------------------------------------------------
// copy object props (only copies own enumerable props, kinda like Object.assign)
var obj1 = {foo: 'a', x: 4}
var obj2 = {foo: 'b', y: 7}
var cloned = {...obj1}          // { foo: 'a', x: 4 }
var merged = {...obj1, ...obj2} // { foo: 'b', x: 4, y: 7 }

// differences with Object.assign()

// DOES NOT copy inherited props
var a = new EventTarget()
var b = {foo: 1, bar: 2}
var x1 = {...a, ...b};          x1.addEventListener // undefined
var x2 = Object.assign(a, b);   x2.addEventListener // f addEventListener() { [native code] }

// DOES NOT trigger setters
var a = { set foo(n) { this.bar = n*2 } }
{ ...a, ...{foo:3} }      // {foo: 3}
Object.assign(a, {foo:3}) // {bar: 6}

// conflict with rest parameter (acts as rest instead of spread)
var merge = (...objects) => ( { ...objects } )
merge(obj1, obj2)
// expected: {foo: 'b', x: 4, y: 7}
// got:      { 0: {foo: 'a', x: 4}, 1: {foo: 'b', y: 7} }
merge({}, obj1, obj2)
// expected: {foo: 'b', x: 4, y: 7}
// got:      { 0: {}, 1: {foo: 'a', x: 4}, 2: {foo: 'b', y: 7} }
//-----------------------------------------------------------------------------
// me
var obj = {a: 1, b: 2, c: 3, d: 4}
const { a, ...other } = obj
a     // 1
other // {b: 2, c: 3, d: 4}
//-----------------------------------------------------------------------------