//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// dedicated workers
// a dedicated worker is only accessible from the script that first spawned (called) it.
// you can't pass function, DOM node and some other things to workers:

// main.js
if (window.Worker) {
	var myWorker = new Worker('worker.js');

	myWorker.onmessage = function (e) {
		console.log("message received from worker: "+e.data);
	};
	
	myWorker.postMessage([2, 2]);
	console.log('Message posted to worker');
	
	myWorker.postMessage([2, 3]);
	console.log('Message posted to worker');
	
	
	myWorker.terminate(); // terminate a running worker from the main thread

} else {
	throw new Error("Your browser does not support WebWorkers.");
}

// worker.js
// calling onmessage is the same as self.onmessage
importScripts('foo.js', 'bar.js');
/* when using importScripts()
scripts may be downloaded in any order,
but will be executed in the order in which you pass the filenames.
this is done synchronously; importScripts() does not return until all the scripts have been loaded and executed. */

onmessage = function (e) {
	console.log('Message received from main script');
	var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
	console.log('Posting message back to main script');
	postMessage(workerResult);
}
close(); // closing the worker from the worker thread
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// shared workers
// shared workers can be accessed from multiple scripts.

var myWorker = new SharedWorker('worker.js');
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@