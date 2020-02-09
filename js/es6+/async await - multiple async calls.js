// Promise.all solution

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
// for of solution
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
// es8 for of (for await of)
var asyncIterable = {
  [Symbol.asyncIterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return Promise.resolve({ value: this.i++, done: false });
        }

        return Promise.resolve({ done: true });
      }
    };
  }
};

(async function() {
   for await (let num of asyncIterable) {
     console.log(num);
   }
})();

// 0
// 1
// 2
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function read(n=1) {
  return fetch('http://jsonplaceholder.typicode.com/posts/'+n)
}