/*
async function flow:
	pauses execution when it reaches an await keyword.
	waits until a promise is settled.
	resumes execution when promise is resolved.
	when resumed, value of await is the resolved promise.
	throws rejected value when promise is rejected.

async functions always return a promise:
	if value after await keyword is not a promise, it's converted to a resolved promise.
	if function returns non-promise value, it's converted to a resolved promise with that value.

async function returns a pending promise to caller of function when it reaches the first await.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// basic
async function f() {
	var some = await $.get('http://site.com/get');
	console.log(some); // as if it's there
}

// with arrow functions
const f = async () => {
	var users = await axios.get('/users');
	console.log(users);
	return 'all done';
};

// another example
async function f() {
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve('done!'), 1000)
	});
	let result = await promise; // wait till the promise resolves (*)
	return result; // 'done!'
}
f().then(console.log)

// uncaptured return value
async function f() {
	await writeFile('a.txt', 'aaa'); // if an error occurs in writeFile, promise returned by f() rejects too
	await writeFile('a.txt', 'aaa'); // runs after prev call completed
	
	writeFile('a.txt', 'aaa');       // fires & forgets the asynchronous task
		// useful when:
		// order of execution doesn't matter
		// next operations don't depend on its result/effect
		// cons: out of order code, unhandled errors
}

// thening
async function f() {
	var inced = await fetch('/number').then(d => d += 1)
	console.log(inced);
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// rejected promise is thrown (if not caught)
try {
	var z = await Promise.reject('cuz i hate u');
} catch (e) {
	console.log(e); // 30
}

// handle rejected promise without try/catch block
var value = await new Promise((_,rej)=>setTimeout(rej,1000)).catch(err => (console.log(err), 'thrown & caught'));
value; // value will be 'thrown & caught' if promise is rejected

await Promise.reject('cuz i hate u').catch(err => (console.log(err), 31)) // 31
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// automatic conversion to promise
async function f() {
	return 1;
}
f() // Promise{<resolved>: 1}
f().then(console.log)

async function f() {
  var y = await 20;
  return y; // 20
}
f().then(console.log)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// different places
var value = await foo() || await bar()
var value = doSomething(await foo(), await bar())
if ( await foo() )
if ( !await bar() )
var value = await a() ? await b() : !await c();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// a shortcut syntax
async function f() { return 1 }
f().then(alert)
// same as:
f().then( r => alert(r) )

f().then(console.log) 
// same as:
f().then( r => console.log(r) )
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// nested awaits
(async () => 
	await (await fetch('https://jsonplaceholder.typicode.com/users/1')).text()
)().then(console.log)

// same as:

(async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
	const text = await res.text();
	return text;
})().then(console.log)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// example:
function asyncTask(i) {
	return new Promise(resolve => resolve(i + 5));
}

async function runAsyncTasks(i) {
	const res1 = await asyncTask(i || 0);
	const res2 = await asyncTask(res1);
	const res3 = await asyncTask(res2);
	return { res1, res2, res3 };
}

runAsyncTasks().then(console.log)  // {res1: 5,  res2: 10, res3: 15}
runAsyncTasks(5).then(console.log) // {res1: 10, res2: 15, res3: 20}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// async vs promise
const getInfo = () => axios.get('/users')
	.then(users => {
		console.log(users)
	})
	.then( () => getGroups() )
	.then(groups => {
		console.log(groups)
	})
	.then( () => getFavorites() )
	.then(favorites => {
		console.log(favorites)
		return 'all done'
	};
getInfo()

const getInfo = async () => {
	console.log(await axios.get('/users'))
	console.log(await getGroups())
	console.log(await getFavorites())
	return 'all done';
}
getInfo();