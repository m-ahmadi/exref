arr.slice(?begin=0, ?end=arr.length)
// creates a new array.
// extract from begin index up to end index. (not including end index)
// if begin or end is negative, then it specifies an offset from end.

var arr = ['a', 'b', 'c', 'd', 'e'];

arr.slice(0, 1)   // ['a']
arr.slice(0, 2)   // ['a', 'b']
arr.slice(0, 3)   // ['a', 'b', 'c']
arr.slice(1, 3)   // ['b', 'c']
arr.slice(1, 4)   // ['b', 'c', 'd']

arr.slice(1)      // ['b', 'c', 'd', 'e']
arr.slice(2)      // ['c', 'd', 'e']
arr.slice(-1)     // ['e']
arr.slice(-2)     // ['d', 'e']

arr.slice(0, -1)  // ['a', 'b', 'c', 'd']
arr.slice(0, -2)  // ['a', 'b', 'c']
arr.slice(0, -3)  // ['a', 'b']
arr.slice(1, -2)  // ['b', 'c', 'd']

arr.slice(-1, 2)  // []
arr.slice(-1, -2) // []

//------------------------------------------------------------------------------
var my_object = {
	'0': 'zero',
	'1': 'one',
	'2': 'two',
	'3': 'three',
	'4': 'four',
	length: 5
};
var sliced = Array.prototype.slice.call(my_object)
var sliced = Array.prototype.slice.call(my_object, 3)