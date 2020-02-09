['x', 'y', 'a', 'b'].sort() // ['a', 'b', 'x', 'y']

// sorting array of integer numbers:
ints.sort((a, b) => a - b)       // ascending
ints.sort((a, b) => b - a)       // descending

[4, 2, 5, 1, 3].sort(ascending)  // [1, 2, 3, 4, 5]
[4, 2, 5, 1, 3].sort(descending) // [5, 4, 3, 2, 1]

function ascending(a, b)  { return a - b }
function descending(a, b) { return b - a }

// sort alphabetically
['b','a','c'].sort( (a,b) => a.localeCompare(b) ) // ['a', 'b', 'c']
['b','a','c'].sort( (a,b) => b.localeCompare(a) ) // ['c', 'b', 'a']

['آ','ب','پ'].sort( (a,b) => a.localeCompare(b, 'fa') )

// sort by object prop
var arr = [ {y:2}, {y:5}, {y:3}, {y:6}, {y:4}, {y:1} ];
arr.sort((a,b) => a.y - b.y) // {y:1}, {y:2}, ...
arr.sort((a,b) => b.y - a.y) // {y:6}, {y:5}, ...

// sorting algorithm used:
// mozila: merge sort
// chrome: quick sort, insertion sort, tim sort