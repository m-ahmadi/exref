var newArray = arr.filter(callback(element, ?index, ?array), ?thisArg)
// creates a new array of elements that pass the test

[1,2,3,4].filter(i => i > 2)                  // [3, 4]
['a','b',1].filter(i => typeof i ==='string') //  ["a", "b"]
[1,0,2].filter(i => i)                        // [1,2]
[1,0,2].filter(i => i ? i : undefined)        // same as above