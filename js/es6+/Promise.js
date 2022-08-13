// basic
new Promise((resolve, reject) => resolve(10)).then(console.log)
new Promise((resolve, reject) => reject(10)).then(console.log).catch(console.log)
//================================================
// code after resolve still executes if not returned
var x = await new Promise(resolve => {
	if (2+2===4) {
		resolve(4);
		//return;
	}
	console.log('dude'); // still runs
	resolve(5);
})
x // always 4
//================================================
// pass callbacks around
function finalWork(resolve) {
	resolve(357);
}
function doSomething(resolve) {
	setTimeout(finalWork, 2000, resolve);
}
async function longTask() {
	return new Promise((resolve, reject) => {
		doSomething(resolve);
	});
}
longTask().then(console.log)
//================================================
// verbose example
const myPromise = new Promise(executorFunc);

function executorFunc(resolve, reject) {
	const condition = true;
	if (condition) {
		setTimeout( () => { resolve('someValue'); }, 1000 ); // fulfilled
	} else {
		reject('failure reason'); // rejected
	}
}

myPromise
	.then(function (someValue) {
		// success
		alert(someValue);
	})
	.catch(function (reason) {
		// error
		alert(reason);
	})
	.then(function () {
		// always
		alert('This always executes!');
	});
//================================================
// error handling

promise.then(onFulfilled, onRejected);

promise.then(onFulfilled).catch(onRejected);

// equivalents:
promise.then(onFulfilled).catch(onRejected);
promise.then(onFulfilled).then(undefined, onRejected);

function onFulfilled(value) {}
function onRejected(error) {}

//================================================
// example:
function asyncTask(i) {
	return new Promise(resolve => resolve(i + 1));
}
function runAsyncTasks() {
	return asyncTask(0)
		.then(res1 => { return asyncTask(res1); })
		.then(res2 => { return asyncTask(res2); })
		.then(res3 => { return 'Everything done'; });
}
runAsyncTasks().then(result => console.log(result));
//================================================