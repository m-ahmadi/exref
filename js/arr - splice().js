var arrDeletedItems = array.splice(start, ?deleteCount, ...items)
array.splice(start)
array.splice(start, deleteCount)
array.splice(start, deleteCount, item1, item2, ...)
// splice modifies & reindexes the array in place.

// examples:
var arr = [1, 2, 3, 4]
arr.splice(1)                // remove all items after first index: [1]
arr.splice(2)                // remove all items after 2nd   index: [1]
arr.splice(0, 1)             // remove first  item:                 [2, 3, 4]
arr.splice(1, 1)             // remove second item:                 [1, 3, 4]
arr.splice(2, 1)             // remove third  item:                 [1, 2, 4]
arr.splice(2, 0, 'x')        // add item at index 2:                [1, 2, 'x', 3, 4]
arr.splice(2, 1, 'x')        // remove item and insert another:     [1, 2, 'x', 4]
arr.splice(0, 2, 10, 20)     // remove 2 items and insert 2 others: [10, 20, 3, 4]
arr.splice(arr.length-2, 2)  // remove last 2   items:              [1, 2]
arr.splice(-1, 1)            // remove last     item:               [1, 2, 3]
arr.splice(-2, 1)            // remove 2nd-last item:               [1, 2, 4]
//--------------------------------------------------------------------------------------------------------
// modify array in the middle of iteration
var a = ['a','b','c','d']
a.forEach((v,i,a) => {
	console.log(i)
	if (i === 1) a.splice(i, 1)
})
/* iteration never reaches index 3 since array is modified in place:
0
1
2
*/
//--------------------------------------------------------------------------------------------------------
// custom function
Array.prototype.move = function (from, to) {
	this.splice(to, 0, this.splice(from, 1)[0]);
};