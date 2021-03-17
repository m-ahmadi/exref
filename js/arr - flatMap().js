var new_array = arr.flatMap(callback(currentValue, ?index, ?array), ?thisArg)


var arr = [1, 2, 3, 4];
arr.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6, 4, 8]

// same as:
arr.reduce((a, x) => a.concat([x, x * 2]), []);