function read(n=1) {
  return fetch('http://jsonplaceholder.typicode.com/posts/'+n)
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Promise.all solution (parallel requests)
// NOTE: all requests are fired at the same time 

// basic
async function multiAsync(v) {
	let [foo, bar] = await Promise.all( [asyncGetFoo(), asyncGetBar()] );
	return foo;
}

// map and reduce
async function asink(v) {
	var res = await read(v);
	return res.url;
}

async function fire() {
	var arr = [1,2,3,4,5];
  return await Promise.all( arr.map(asink) );
}

fire().then(console.log)
/* sequence is guaranteed:
http://jsonplaceholder.typicode.com/posts/1
http://jsonplaceholder.typicode.com/posts/2
http://jsonplaceholder.typicode.com/posts/3
http://jsonplaceholder.typicode.com/posts/4
http://jsonplaceholder.typicode.com/posts/5
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// for of solution (sequential requests)
// NOTE: next request is fired when previous one is done

async function fire() {
  var arr = [1,2,3,4,5];
	
  for (const v of arr) {
    var res = await read(v);
    console.log(res.url);
  }
}

fire()
/* sequence is guaranteed:
http://jsonplaceholder.typicode.com/posts/1
http://jsonplaceholder.typicode.com/posts/2
http://jsonplaceholder.typicode.com/posts/3
http://jsonplaceholder.typicode.com/posts/4
http://jsonplaceholder.typicode.com/posts/5
*/

// for await of (es8)
for await (const i of asinkFn()) console.log(i);
async function asinkFn() {
	return await (await fetch('https://jsonplaceholder.typicode.com/todos/')).json();
}

var urls = [...Array(10).keys()].map(i=> 'https://jsonplaceholder.typicode.com/todos/'+(i+1));
for (let i of urls) {
	let r = await fetch(i);
	let t = await r.text();
	console.log(t);
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// forEach()
// callbacks are not executed in sequence.
// (order of execution is not sequential)
async function fire() {
  [1,2,3,4,5].forEach(async v => {
    var res = await read(v);
    console.log(res.url);
  })
}

fire()
/* sequence is NOT guaranteed:
http://jsonplaceholder.typicode.com/posts/3
http://jsonplaceholder.typicode.com/posts/1
http://jsonplaceholder.typicode.com/posts/2
http://jsonplaceholder.typicode.com/posts/4
http://jsonplaceholder.typicode.com/posts/5
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@