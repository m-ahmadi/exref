// basic
new Promise((resolve, reject) => resolve(10)).then(console.log)
new Promise((resolve, reject) => reject(10)).then(console.log).catch(console.log)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
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
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// error handling:

promise.then(onFulfilled, onRejected);

promise.then(onFulfilled).catch(onRejected);

// equivalents:
promise.then(onFulfilled).catch(onRejected);
promise.then(onFulfilled).then(undefined, onRejected);

function onFulfilled(value) {}
function onRejected(error) {}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
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
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Promise.all()
var promise1 = Promise.resolve(3)
var promise2 = 42
var promise3 = new Promise((res, rej) => {
  setTimeout(res, 1000, 'foo')
})

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values)
})
// after 1 second: [3, 42, 'foo']