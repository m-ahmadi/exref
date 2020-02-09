var t0 = performance.now();
doSomething();
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")

// detect memory limits (only in chrome)
performance.memory.jsHeapSizeLimit // js heap size
performance.memory.usedJSHeapSize  // currently using
arr = []; for(var i = 0; i < 100000; i++) arr.push(i);
performance.memory.usedJSHeapSize  // likely a larger number now