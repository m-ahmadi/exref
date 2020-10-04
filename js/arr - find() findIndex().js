arr.find(callback(element, ?index, ?arr), ?thisArg)
// returns first element that matches the test function. (otherwise undefined)
arr.findIndex(callback(element, ?index, ?arr), ?thisArg)
// returns the index of found element. (otherwise -1)

var arr = [5, 12, 8, 130, 44];

arr.find(el => el > 10)        // 12
arr.find(el => el > 44)        // 130
arr.find(el => el === 31)      // undefined

arr.findIndex(el => el > 10)   // 1
arr.findIndex(el => el > 44)   // 3
arr.findIndex(el => el === 31) // -1