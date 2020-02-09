Object.entries(obj)
// returns own enumerable string-keyed properties

//----------------------------------------------------------------------------------
Object.entries({name: 'John', age: 30}) // [ ['name','John'], ['age',30] ]
//----------------------------------------------------------------------------------
const obj = { foo: 'bar', baz: 42 };
Object.entries(obj) // [ ['foo', 'bar'], ['baz', 42] ]
//----------------------------------------------------------------------------------
// array like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
Object.entries(obj) // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]
//----------------------------------------------------------------------------------
// array like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
Object.entries(anObj) // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]
//----------------------------------------------------------------------------------
// only enumerable props show up
const myObj = Object.create({}, { baz: { enumerable: false } });
myObj.foo = 35;
Object.entries(myObj) // [ ['foo', 35] ]
//----------------------------------------------------------------------------------
// non-object coerced to object
Object.entries('foo') // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]
//----------------------------------------------------------------------------------
// empty array for any primitive type (since they don't have any own properties)
Object.entries(100) // [ ]
//----------------------------------------------------------------------------------