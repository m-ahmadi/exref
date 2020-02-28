new Worker()       // dedicated worker. only accessible from the script that first spawned (called) it.
new SharedWorker() // shared    worker. can be accessed from multiple scripts.
// you can't pass function, DOM nodes and some other things to workers.

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// main.js
var myWorker = new Worker('js/worker.js');

myWorker.onmessage = function (e) {
	console.log('message received from worker: '+e.data);
};

myWorker.postMessage([2, 2]);
console.log('Message posted to worker');

myWorker.postMessage([2, 3]);
console.log('Message posted to worker');


myWorker.terminate(); // terminate a running worker from the main thread

if (!window.Worker) throw new Error('not support')
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// worker.js

importScripts('foo.js', 'bar.js'); /* when using it:
scripts may be downloaded in any order,
but will be executed in the order in which you pass the filenames.
this is done synchronously; importScripts() does not return until all the scripts have been loaded and executed. */

onmessage === self.onmessage // onmessage is same as self.onmessage

self.onmessage = function (e) {
	console.log('Message received from main script');
	var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
	console.log('Posting message back to main script');
	postMessage(workerResult);
};

close(); // closing the worker from the worker thread