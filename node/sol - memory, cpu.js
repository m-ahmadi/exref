var os = require('os');
// note
kiloBytes = bytes / 1000;
megaBytes = bytes / 1_000_000;
gigaBytes = bytes / 1_000_000_000;



// number of cores
var cpus = os.cpus(); // [{},{},...]
cpus.length // 4



// device's total memory
os.totalmem() / 1e9; // 16.8548352 GB



// available memory
process.availableMemory() // bytes
os.freemem()              // bytes
os.freemem() === process.availableMemory() // true



// available memory under os imposed limits
process.constrainedMemory() // https://docs.libuv.org/en/v1.x/misc.html#c.uv_get_constrained_memory



// used cpu time
process.cpuUsage(?previousValue)
	// time spent in user and system code (microsecond)
	// may be greater than actual elapsed time if multiple cores do the work
	// if `preventDefault` provided, returns a diff
var startUsage = cpuUsage();       // {user: 38579, system: 6986}
var now = Date.now();
while (Date.now() - now < 500);    // spin the cpu for 500 milliseconds
console.log(cpuUsage(startUsage)); // {user: 514883, system: 11226}



// used memory
process.memoryUsage()     // all in bytes
process.memoryUsage.rss() // same as `process.memoryUsage().rss` but faster
{
  rss:          int, // space occupied by c++ and js objects and code (subset of total allocated memory)
  heapTotal:    int, // v8's memory usage
  heapUsed:     int, // v8's memory usage
  external:     int, // memory usage of c++ objects bound to javascript objects managed by v8
	arrayBuffers: int, // memory allocated for ArrayBuffers and SharedArrayBuffer (also included in the `external`)
	/* in worker threads:
		rss:           valid for the entire process
		other fields:  only refer to current thread */
}

// example (must run like `node --expose-gc index.js`)
var gc = globalThis.gc;
report('initial');                // initial usage
gc();                             // force a gc for the baseline
report('baseline');               // baseline memory usage
var a = new Array(1e8).fill('a'); // allocate memory for 100 milion items in an array
report('after huge allocation');  // memory after allocating so many items
a = null;                         // allow the array to be garbage-collected
gc();                             // force gc
report('after gc');               // memory usage after gc
report('after idling');           // memory usage after idling
function report(title) {
	var r = process.memoryUsage();
	var ks = ['rss','heapTotal','heapUsed']; // Object.keys(r);
	var toMegaBytes = Object.fromEntries(ks.map(k => [k, Math.round(r[k]/1e6)]));
	console.log(title, '\n', toMegaBytes, '\n');
}



// used everything
process.resourceUsage()
{
	userCPUTime:       int, // process.cpuUsage().user
	systemCPUTime:     int, // process.cpuUsage().system
	maxRSS:            int, // maximum resident size
	sharedMemorySize:  int, // N/A everywhere
	unsharedDataSize:  int, // ...
	unsharedStackSize: int, // ...
	minorPageFault:    int, // number of minor page faults for the process
	majorPageFault:    int, // ...       major ...
	swappedOut:        int, // N/A everywhere
	fsRead:            int, // number of times file system had to perform input
	fsWrite:           int, // ...                                        output
	ipcSent:           int, // N/A everywhere
	ipcReceived:       int, // ...
	signalsCount:      int, // ...
	voluntaryContextSwitches: int,   // N/A in windows
	involuntaryContextSwitches: int, // N/A in windows
}



// v8 heap size
var v8 = require('v8');
v8.getHeapStatistics()
// https://nodejs.org/api/v8.html#v8getheapstatistics
{
  total_heap_size:             7352320,
  total_heap_size_executable:  524288,
  total_physical_size:         7352320,
  total_available_size:        2192954248,
  used_heap_size:              5753544,
  heap_size_limit:             2197815296,
  malloced_memory:             278576,
  peak_malloced_memory:        587136,
  does_zap_garbage:            0,
  number_of_native_contexts:   1,
  number_of_detached_contexts: 0,
  total_global_handles_size:   8192,
  used_global_handles_size:    4672,
  external_memory:             2354646
}
v8.getHeapStatistics().heap_size_limit / (1024*1024) // 2096 MB
