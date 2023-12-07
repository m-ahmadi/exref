arr.keys()
// returns object of type `Array Iterator` that contains key of each index in array

[1,2,3].keys()        // Array Iterator{}
[ ...[1,2,3].keys() ] // [0, 1, 2]

for (const key of [1,2,3].keys()) doSome()
