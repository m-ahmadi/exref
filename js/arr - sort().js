arr.sort(compareFn)
function compareFn(firstEl, secondEl) {
	return -1 // a comes first
	return 1  // b comes first
	return 0  // leave a and b unchanged
}
// sorting algorithm used:
// mozila: merge sort
// chrome: quick sort, insertion sort, tim sort

['x', 'y', 'a', 'b'].sort() // ['a', 'b', 'x', 'y']

// sorting array of integer numbers:
ints.sort((a, b) => a - b)       // ascending
ints.sort((a, b) => b - a)       // descending

[4, 2, 5, 1, 3].sort((a,b)=>a-b) // [1, 2, 3, 4, 5]
[4, 2, 5, 1, 3].sort((a,b)=>b-a) // [5, 4, 3, 2, 1]

// integers are sorted alphabetically by default
[...Array(50).keys()].sort()           // [0, 1, 10, 11, 12, ...]
[...Array(50).keys()].sort((a,b)=>a-b) // [0, 1, 2, 3, 4, ...]

// sort alphabetically
['b','a','c'].sort( (a,b) => a.localeCompare(b) ) // ['a', 'b', 'c']
['b','a','c'].sort( (a,b) => b.localeCompare(a) ) // ['c', 'b', 'a']

['آ','ب','پ'].sort( (a,b) => a.localeCompare(b, 'fa') )

// sort by object prop
var arr = [ {y:2}, {y:5}, {y:3}, {y:6}, {y:4}, {y:1} ];
arr.sort((a,b) => a.y - b.y) // {y:1}, {y:2}, ...
arr.sort((a,b) => b.y - a.y) // {y:6}, {y:5}, ...

// sort array of arrays
var arr = [  ['c',3], ['a',1], ['f',6], ['d',4], ['b',2]  ];
arr.sort((a,b) => b[1] - a[1] ) // [  ['f',6], ['d',4], ...  ]
arr.sort((a,b) => a[1] - b[1] ) // [  ['a',1], ['b',2], ...  ]

// sort array of arrays by length
var arr = [ [1,1], [1,1,1], [1] ];
arr.sort((a,b) => a.length - b.length) // [ [1], [1,1], [1,1,1] ]
arr.sort((a,b) => b.length - a.length) // [ [1,1,1], [1,1], [1] ]