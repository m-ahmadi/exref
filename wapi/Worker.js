new Worker()       // dedicated worker. only accessible from the script that first spawned (called) it
new SharedWorker() // shared    worker. can be accessed from multiple scripts

// you can't pass function, dom nodes and some other things to workers
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// main.js---------------------------------------
var worker = new Worker('js/worker.js');

worker.onmessage = function (e) {
	console.log('message received from worker: '+e.data);
};

worker.postMessage([2, 2]);
worker.terminate(); // terminate a running worker from the main thread

// worker.js-------------------------------------
importScripts('foo.js', 'bar.js'); /*
	scripts may download in any order, but will execute in the order passed
	sync operation (won't return until all scripts downloaded and executed) */

onmessage === self.onmessage // onmessage is same as self.onmessage

self.onmessage = function (e) {
	console.log('Message received from main script');
	var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
	console.log('Posting message back to main script');
	postMessage(workerResult);
};

close(); // closing the worker from the worker thread
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// usage example with promises

// simple
var worker = new Worker('path/to/worker.js');
var result = await new Promise(resolve => {
	worker.onmessage = function (e) {
		worker.onmessage = null; // this basically means you only care about the first message (like `once` events)
		resolve(e.data);
	};
	worker.postMessage('do it dear worker');
});


// another example
// main.js---------------------------------------
var worker = new Worker('path/to/worker.js');
var result = await askWorker('doSome', 'with this input data');
function askWorker(_action='', inputData) {
	return new Promise(resolve => {
		worker.onmessage = function ({data: {action, result}}) {
			if (action !== _action) return;
			worker.onmessage = null;
			resolve(result);
		};
		
		worker.postMessage({action: 'doSome', data: input});
	});
}
// worker.js-------------------------------------
self.onmessage = function ({data: {action, data}}) {
	const result = action == 'doSome' ? doSome(data) : undefined;
	self.postMessage({action, result});
};
function doSome(input) { return input.replace(/a/g, 'b') }
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@