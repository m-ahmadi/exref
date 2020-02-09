arr.find       ( callback(element[, index[, array]])[, thisArg] ) // return: first element that passes the test | undefined (NO IE)
arr.filter     ( callback(element[, index[, array]])[, thisArg] ) // return: new array with elements that pass the test | []
arr.some       ( callback(element[, index[, array]])[, thisArg] ) // return: true if a truthy value is returned for at least one element of array | false (IE9+)
arr.indexOf    ( searchElement[, fromIndex]                     ) // return: first index of the element in array | -1 if not found
arr.lastIndexOf( searchElement[, fromIndex]                     ) // return: last  index of the element in array | -1 if not found
arr.findIndex  ( callback(element[, index[, array]])[, thisArg] ) // return: index of first element in array that passes the test | -1
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//	search if an object is in array:
var arr = [ {a: 'a'}, {b: 'b'} ];
arr.some(function (el) {
	return el.name === 'WhatImLookingFor';
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*	performance

	first-items											last-items
	indexOf   (fastest) 						custom    (fastest) 
	custom    (80% slower)					indexOf   (45% slower)
	$.inArray (99% slower)					$.inArray (68% slower)
	
	indexOf: IE9+, Firefox 1.5+
*/

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@