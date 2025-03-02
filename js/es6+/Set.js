// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set

const set1 = new Set([1, 2, 3, 4, 5]);

// a set is a collection of unique values (unlike array which can have duplicates)

set1.has(1)     // true
set1.has(6)     // false
set1.add('str')
set1.size       // 5
set1.delete(5) 
set1.add({a: 1, b: 2})

set1[5] = 6
set1.has(6)     // false

set1.keys()
set1.values()
set1.entries()

for (let item of set1) console.log(item)

// type check
Set.prototype.toString.call(set1) == '[object Set]'

// equality
var a = new Set(1,2,3);
var b = new Set(1,2,3);
a.size === b.size && [...a].every(i => b.has(i)) // true

// union
var set1 = new Set([1,2,3]);
var set2 = new Set([2,3,4]);
var union = new Set([...set1, ...set2]);
union // [1,2,3,4]

// difference
var a = new Set([1,2,3]);
var b = new Set([2,3,4]);
a.difference(b)             // {1} (node v22+)
b.difference(a)             // {4} ...
[...a].filter(i=>!b.has(i)) // [1]
[...b].filter(i=>!a.has(i)) // [4]

// set max size
new Set(Array(2**24).keys())   // ok
new Set(Array(2**24+1).keys()) // RangeError: Set maximum size exceeded
