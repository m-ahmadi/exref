array.some(callback(element, index, array), ?thisArg): boolean  // true if at least one element  passes
array.every(callback(element, index, array), ?thisArg): boolean // true if          all elements pass

[1,2,3,4,5].some(n => n % 2 === 0) // true

[1,2,3,4,5].every(n => n > 10)     // true