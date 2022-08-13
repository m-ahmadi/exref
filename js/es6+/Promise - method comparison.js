Promise.all(iterable)        // 1 bad ruins all
Promise.allSettled(iterable) // w8 till all settled
Promise.race(iterable)       // race of fulfilled & rejected
Promise.any(iterable)        // 1 good is enough (chrome 85, mega modern)

Promise.resolve(value)       // returns already settled promise
Promise.reject(reason)       // ...

'fulfilled' // resolved successfully
'rejected'  // failed
'pending'   // not done: not fulfilled & not rejected
'settled'   // done:         fulfilled |     rejected

//                        breaks?       breaks on?            fulfilled on?         rejected on?
//=====================================================================================================
Promise.all()        //   ✔            first rejected        all fulfilled         first rejected
Promise.allsettled() //   ✖            never                 always                never
Promise.race()       //   ✔            first settled         first fulfilled       first rejected
Promise.any()        //   ✔            first fulfilled       first fulfilled       all rejected


// return comparison
var iterable = [Promise.resolve(1), Promise.resolve(2)];
Promise.all       (iterable) => [1, 2]               )
Promise.allSettled(iterable) => [{status: 'fulfilled', value: 1}, {status: 'fulfilled', value: 2}] )


// all
var p1 = Promise.resolve(3);
var p2 = 42;
var p3 = new Promise(res => setTimeout(res, 1000, 'foo'));
Promise.all([p1, p2, p3]).then(console.log).catch(console.log)                    // after 1 second: [3, 42, 'foo']
Promise.all([p1, p2, p3, Promise.reject(1)]).then(console.log).catch(console.log) // 1

// any
var p1 = Promise.reject(0);
var p2 = new Promise(res => setTimeout(res, 100, 'quick'));
var p3 = new Promise(res => setTimeout(res, 500, 'slow'));
Promise.any([p1, p2, p3]).then(console.log);                    // quick
Promise.any([p1, p1, p1]).then(console.log).catch(console.log); // AggregateError: All promises were rejected

// race
var p1 = new Promise(res => setTimeout(res, 500, 'one'));
var p2 = new Promise(res => setTimeout(res, 100, 'two'));
Promise.race([p1, p2]).then(console.log);                                                  // 'two'
Promise.race([Promise.reject(1), Promise.reject(2)]).then(console.log).catch(console.log); // 1

// allSettled
var p1 = Promise.resolve(3);
var p2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
Promise.allSettled([p1, p2]).then(console.log); /*
[
	{status: 'fulfilled', value: 3}
	{status: 'rejected', reason: 'foo'}
]
*/