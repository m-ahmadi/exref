var arr = [1,2,2,3];

[...new Set(arr)]                         // [1,2,3]
arr.filter((v,i,a) => a.indexOf(v) === i) // [1,2,3]