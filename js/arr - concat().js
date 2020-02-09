var new_array = old_array.concat(...items)

[1,2].concat()            // [1, 2]

[1,2].concat([3,4])       // [1, 2, 3, 4]

[1,2,3].concat(4)         // [1, 2, 3, 4]

[1,2].concat(3).concat(4) // [1, 2, 3, 4]

[1,2].concat('a', [3,4])  // [1, 2, "a", 3, 4]