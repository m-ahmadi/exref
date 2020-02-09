process.memoryUsage() // info about memory usage of process in bytes.
// kilobytes = bytes / 1000
// megabytes = bytes / 1e6
// gigabytes = bytes / 1e9
{
  rss: 4935680,
		// resident set size
		// amount of space occupied in main memory device for the process. (includes: heap, stack, code segment)
		// (a subset of total allocated memory)
  heapTotal: 1826816, // v8's memory usage
  heapUsed: 650472,   // v8's memory usage
  external: 49879     // memory usage of C++ objects bound to javascript objects managed by V8
}
/*
objects,strings,closures:  stored  in heap
variables:                 stored  in stack
actual js code:            resides in code segment

in worker threads
	rss:           valid for the entire process
	other fields:  only refer to current thread
*/

// example:
// node index.js --expose-gc
process.memoryUsage()  // initial usage
gc()                   // force a gc for the baseline
process.memoryUsage()  // baseline memory usage
var a = new Array(1e7) // allocate memory for 10m items in an array
process.memoryUsage()  // memory after allocating so many items
a = null               // allow the array to be garbage-collected
gc()                   // force gc (requires node --expose-gc)
process.memoryUsage()  // memory usage after gc
process.memoryUsage()  // memory usage after idling

// global memory
var os = require('os');
os.freemem()
os.totalmem() / 1e9 // 16.8548352 GB