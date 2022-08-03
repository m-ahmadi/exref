// runtime array, no extra processing necessary
var arr = [];
arr.length // 0

// creating initialized array (all return the created array):
[...Array(4)]                         // [undefined, undefined, undefined, undefined]
Array(4).fill(0)                      // [0, 0, 0, 0]
[...Array(4).keys()]                  // [0, 1, 2, 3]

[...Array(4)].map((v,i)=>i)           // [0, 1, 2, 3]
Array(4).fill(1).map((v,i)=>i)        // [0, 1, 2, 3]


Array.from(arrayLike, ?mapFn, ?thisArg) /*
arrayLike:    iterable or array-like object
mapFn:        fn to call on every element of `arrayLike`
thisArg:      `this` inside `mapFn`
*/
Array.from( Array(4) )                // [undefined, undefined, undefined, undefined]
Array.from( 'x'.repeat(4) )           // ['x', 'x', 'x', 'x']
Array.from({length: 4}, (v, i) => i)  // [0, 1, 2, 3]
Array.from(Array(4), (x, i) => i)     // ...
Array.from(new Array(4), (x, i) => i) // ...
/*
	calling the constructor and generating an object
	one extra option this way:
	setting the length of array when creating it
*/
arr = new Array(4);
arr.length // 4