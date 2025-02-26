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

// merge
var m1 = new Map([ [1,3], [2,6] ]);
var m2 = new Map([ [1,4], [3,9] ]);
new Map([...m1, ...m2]) // {1:4, 2:6, 3:9}

// max map size
// FixedArray backing store of the Map has a maximum size of 1 GB (independent of overall heap size limit)
// dividing to 1 bit size we would get:
// 		1GB / 8B = 2^30 / 2^3 = 2^27 ~= 134 million elements
var bytesInOneGigaBytes = 2 ** 30;
var bytesInOneBit = 2 ** 3;
MAX_SIZE_THEORETICAL = bytesInOneGigaBytes / bytesInOneBit; // max num of FixedArrays that can fit into 1 GB
MAX_SIZE_THEORETICAL === 134_217_728                        // true
// but actual capacity of a map is much less than 134 million, because:
// 		1. a map needs 3 elements per entry: key, value, next bucket link
// 		2. a map has a max load factor of 50% to avoid slowdown caused by many bucket collisions
// 		3. the capacity of a map must be a power of 2
// so we must subtract these costs from the 134 million
// 		2^27 / 3 / 2 = 22_369_621
// which will leave us with the 22 million number
// but because capacity must be a power of 2 we must round down this number to a number that is a power of 2
// in order to find a power of 2 number that is lower that 22 million
// list power of 2 numbers below the original 134 million number to find final number
[27,26,25,24].map(n => (2**n).toLocaleString()) // ['134,217,728', '67,108,864', '33,554,432', '16,777,216']
// so the next power of 2 number below 22_369_621 is 16_777_216 which is the max size for a map
new Map(Array(16_777_216).entries()) // ok
new Map(Array(16_777_217).entries()) // RangeError: Map maximum size exceeded

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
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
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@