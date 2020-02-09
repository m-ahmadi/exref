var arr = [1, 2, 3, 4, 5]           // odd length array
arr[ Math.floor(arr.length/2) ]     // 3

var arr = [1, 2, 3, 4]              // even length array
arr[ Math.floor(arr.length/2) ]     // 3 (2nd middle)
arr[ Math.floor((arr.length-1)/2) ] // 2 (1st middle)