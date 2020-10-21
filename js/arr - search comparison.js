arr.find       ( callback(element[, index[, array]])[, thisArg] ) // return: first element that passes the test | undefined (NO IE)
arr.filter     ( callback(element[, index[, array]])[, thisArg] ) // return: new array with elements that pass the test | []
arr.some       ( callback(element[, index[, array]])[, thisArg] ) // return: true if a truthy value is returned for at least one element of array | false (IE9+)
arr.indexOf    ( searchElement[, fromIndex]                     ) // return: first index of the element in array | -1 if not found
arr.lastIndexOf( searchElement[, fromIndex]                     ) // return: last  index of the element in array | -1 if not found
arr.findIndex  ( callback(element[, index[, array]])[, thisArg] ) // return: index of first element in array that passes the test | -1

// has
[ {n: 4}, {n: 7}, {n: 3} ].some(i => i.n > 5) // true

// substr match
['a.htm', 'b.htm', 'c.asad'].filter(i => /.htm/.test(i)) // ['a.htm', 'b.htm']
