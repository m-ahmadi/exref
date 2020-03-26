var newArray = arr.flat(?depth=1);

[1,2,[3,4]].flat() // [1,2,3,4]

var arr = [ 1,2,[3,4,[5,6]] ];
arr.flat()         // [1,2,3,4,[5,6]]
arr.flat(2)        // [1,2,3,4,5,6]

[1,2,[3,4,[5,6,[7,8,[9,10]]]]].flat(Infinity) // [1,2,3,4,5,6,7,8,9,10]

// flattening holes
[1,2,,4,5].flat()  // [1,2,4,5]