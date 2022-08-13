Array.isArray()

Array.isArray({})       // false
Array.isArray([])       // true
//------------------------------------------------
// mutate

var arr = [1,2,3];
arr.push(4)    // append    - arr: [1, 2, 3, 4]
arr.pop()      // del last  - arr: [1, 2, 3]
arr.shift()    // del first - arr: [2, 3]
arr.unshift(1) // prepend   - arr: [1, 2, 3]

//------------------------------------------------
arr.join(?separator=',')
[1,2,3].join(',')       // '1,2,3'
[1,2,3].join()          // '1,2,3'
[1,2,3].join('')        // '123'
//------------------------------------------------
arr.includes(searchElement, ?fromIndex)
[1,2,3].includes(1)     // true
[1,2,3].includes(1,1)   // false
['a','B'].includes('b') // false
//------------------------------------------------
arr.indexOf(searchElement, ?fromIndex)
[1,2,3].indexOf(3)      // 2
[1,2,3].indexOf(4)      // -1
[1,2,3].indexOf(1, 1)   // -1
//------------------------------------------------
