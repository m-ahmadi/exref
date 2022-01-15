const set1 = new Set([1, 2, 3, 4, 5]);

// a set is a collection of unique values (unlike array which can have duplicates).

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
a = new Set(1,2,3);
b = new Set(1,2,3);
a.size === b.size && [...a].every(i => b.has(i)) // true