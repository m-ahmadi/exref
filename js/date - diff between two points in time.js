var t1 = Date.now();
doSomething();
var t2 = Date.now();
console.log((t2 - t1) / 1000, 'seconds has passed');


var t1 = Date.now();
setTimeout(_=> console.log((Date.now()-t1)/1000, 'seconds has passed'), 3000);