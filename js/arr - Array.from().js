var newArray = Array.from(arrayLike, ?mapFn, ?thisArg);
// arrayLike: objects with a length property and indexed elements

Array.from('foo')                          // ['f','o','o']

Array.from( new Set([1,2,2,3]) )           // [1,2,3]

Array.from( new Map([[1,2],[2,4],[4,8]]) ) // [ [1,2], [2,4], [4,8] ]

Array.from([1,2,3], x => x*10)             // [10, 20, 30]