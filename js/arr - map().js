var new_array = arr.map(callback(currentValue, ?index, ?array), ?thisArg) /*
callback:      function to run against each item of array
currentValue:  current array element being processed
indexOptional: index of current array element being processed
array:         array map was called upon
thisArg:       value to use as this when executing callback */

//---------------------------------------------------------------------------------------
// simple:
const arr = [1, 2, 3, 4];
const map1 = arr.map(x => x * 2);
map1 // [2, 4, 6, 8]
//---------------------------------------------------------------------------------------
// another example:
var arr = [1, 2, 3, 4];
arr.map(function (el, index, arr) {
	return el + arr[arr.length-1];
});
//---------------------------------------------------------------------------------------