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

//												break?				break on?							fulfilled on?					rejected on?
//======================================================================================================
Promise.all()				 //		✔						first rejected				all fulfilled					first rejected
Promise.allsettled() //		✖						never									always								never
Promise.race()			 //		✔						first settled					first fulfilled				first rejected
Promise.any()				 //		✔						first fulfilled				first fulfilled				all rejected


// return comparison
var iterable = [Promise.resolve(1), Promise.resolve(2)];
Promise.all       (iterable) => [1, 2]               )
Promise.allSettled(iterable) => [{status: 'fulfilled', value: 1}, {status: 'fulfilled', value: 2}] )


// basic
var promise1 = Promise.resolve(3)
var promise2 = 42
var promise3 = new Promise((res, rej) => {
  setTimeout(res, 1000, 'foo')
})

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values)
})
// after 1 second: [3, 42, 'foo']