var map new Map(?iterable)
var map = new Map([ [k,v], [k,v], ... ])
// obj/primitive for key/value

map.size
map.clear()
map.delete(key)
map.entries()
map.forEach((value, key, map)=>, thisArg)
map.get(key)
map.has(key)
map.keys()
map.set(key, value)
map.values()

// iterate
map.forEach((val, key, map) =>);

for (const k of map.keys())         // iterate over keys
for (const v of map.values())       // iterate over values
for (const [k, v] of map.entries()) // iterate over key, value pairs
for (const [k, v] of map)           // ... ↑

var arr = [...map.keys()]   // convert keys to array
var arr = [...map.values()] // convert values to array

// check for map
Map.prototype.toString.call(map) === '[object Map]'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

var map = new Map([ ['a', 'hello'], ['b', 'dear'], ['c', 'world'] ])

var map = new Map([
	['foo', 3],
	['bar', {}],
	['baz', undefined]
]);

// another
var keystr = 'a string';
var keyobj = {};
var keyfn = () => {};

map.set(keystr, 'foo')
map.set(keyobj, 2)
map.set(keyfn, true)

map.size // 3

map.get(keystr) // 'foo'
map.get(keyobj) // 2
map.get(keyfn)  // true

map.get('a string')   // 'foo'             because keystr === 'a string'
map.get({})           // undefined         because keyobj !== {}
map.get(function(){}) // undefined         because keyfn !== function () {}

// anomaly
var m = new Map()
m.set(NaN, 'foo')
m.set(+0, 'bar')

m.get(NaN) // 'foo'
m.get(-0)  // 'bar'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@