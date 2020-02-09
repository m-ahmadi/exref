var arr = [1, 2, 3, 4];

// super fast
Math.max.apply(Math, arr);        // 4 
Math.min.apply(Math, arr);        // 1

// slow
arr.sort((a,b)=>a-b).reverse()[0] // 4
arr.sort((a,b)=>a-b)[0]           // 1
