var worker_threads = require('worker_threads');

worker_threads.Worker
worker_threads.isMainThread
worker_threads.parentPort
worker_threads.resourceLimits
worker_threads.threadId
worker_threads.workerData
worker_threads.SHARE_ENV
worker_threads.markAsUntransferable(object)
worker_threads.moveMessagePortToContext(port, contextifiedSandbox)
worker_threads.receiveMessageOnPort(port)

var worker = new worker_threads.Worker(filename=''|URL, options={
	argv:                       [],
	env:                        process.env | {},
	eval:                       false,
	execArgv:                   ['', ...],
	stdin:                      false,
	stdout:                     false,
	stderr:                     false,
	workerData:                 undefined,
	trackUnmanagedFds:          true,
	transferList:               [ {}, ... ],
	resourceLimits: {
		maxOldGenerationSizeMb:   0,
		maxYoungGenerationSizeMb: 0,
		codeRangeSizeMb:          0,
		stackSizeMb:              4,
	},
	
});

'error'           // worker threw uncaught exception (worker will be terminated)
'exit' exitCode=0 // once worker has stopped (final event)
'message' value   // worker called require('worker_threads').parentPort.postMessage()
'messageerror'    // deserializing a message failed
'online'          // worker has started executing code

worker.resourceLimits
worker.stderr
worker.stdin
worker.stdout
worker.performance
worker.performance.eventLoopUtilization(?utilization1, ?utilization2)
worker.getHeapSnapshot()
worker.postMessage(value, ?transferList)
worker.ref()
worker.terminate()
worker.threadId
worker.unref()
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

// basic

// index.js
var { Worker } = require('worker_threads');
var worker = new Worker('./myworker.js');
worker.on('message', val => {
	console.log('worker says: '+ val);
	worker.postMessage('hello to you too dear worker');
});
worker.on('error', () => {
	console.log('worker threw uncaught exception');
});
worker.on('exit', code => {
	if (code !== 0) consolw.log('worker exited with non-zero exit code');
});

// myworker.js
var { parentPort } = require('worker_threads');
parentPort.postMessage('salam');
parentPort.on('message', val => {
	console.log('boss says: '+ val);
});
//===============================================
// promise example

// manual once (browser style)
var result = await new Promise(r => {
	var onmessage = v => (worker.removeListener('message', onmessage), r(v));
	worker.on('message', onmessage);
	worker.postMessage('do it dear worker');
});

var result = await new Promise(r => {
	worker.once('message', v => r(v));
	worker.postMessage('do it dear worker');
});
//===============================================
// context detection
var { isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
	// not inside a worker thread
} else {
	// inside a worker thread
	parentPort.postMessage();
}