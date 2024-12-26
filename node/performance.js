const performance = require('perf_hooks').performance; // node v8.5.0

var t0 = performance.now();
doSomething();
var t1 = performance.now();

console.log('Call to doSomething took ' + (t1 - t0) + ' milliseconds.')