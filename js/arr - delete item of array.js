var arr = [1, 2, 3, 4];

// deletes and left things (fast):
delete arr[2]; 	// [1, 2, undefined, 4]


// delete and re arrange (slow):
arr.splice(2, 1);	// [1, 2, 4]


// delete all items from specified item:
arr.length = 1;		// [1]

// remove last item:
arr.pop();       // [1, 2, 3]