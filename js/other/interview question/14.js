//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	What will the code below output to the console and why?
*/
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	The logged output will be:
*/
"array 1: length=5 last=j,o,n,e,s"
"array 2: length=5 last=j,o,n,e,s"
/*
	arr1 and arr2 are the same after the above code is executed for the following reasons:
	
	Calling an array object’s reverse() method doesn’t only return the array in reverse order,
	it also reverses the order of the array itself (i.e., in this case, arr1).
	The reverse() method returns a reference to the array itself (i.e., in this case, arr1).
	As a result, arr2 is simply a reference to (rather than a copy of) arr1.
	Therefore, when anything is done to arr2 (i.e., when we invoke arr2.push(arr3);),
	arr1 will be affected as well since arr1 and arr2 are simply references to the same object.
	
	And a couple of side points here that can sometimes trip someone up in answering this question:
	Passing an array to the push() method of another array pushes that entire array as a single element onto the end of the array.
	As a result,
	the statement arr2.push(arr3); adds arr3 in its entirety as a single element to the end of arr2
	(i.e., it does not concatenate the two arrays, that’s what the concat() method is for).
	
	Like Python,
	JavaScript honors negative subscripts in calls to array methods like slice(),
	as a way of referencing elements at the end of the array;
	e.g., a subscript of -1 indicates the last element in the array, and so on.
*/