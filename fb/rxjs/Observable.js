const observable = new rxjs.Observable(function (subscriber) {
	// subscriber is called when Observable is initially subscribed to.
  const id = setInterval(() => {
    subscriber.next('hi')
  }, 1000);
});
observable.subscribe(console.log);

// push values immediately when subscribed: (synchronously)
const observable = new rxjs.Observable(function (subscriber) {
	subscriber.next();     // next step
	subscriber.error();    // raise an error
	subscriber.complete(); // notify of a successful completion.
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// another example:
const observable = new rxjs.Observable();

function subscribe(subscriber) {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
		subscriber.next(5); // not delivered because it violates the contract
  }, 1000);
}

console.log('just before subscribe');
observable.subscribe({
  next(x) { console.log('got value ' + x); },
  error(err) { console.error('something wrong occurred: ' + err); },
  complete() { console.log('done'); }
});
console.log('just after subscribe');

/*
just before subscribe
got value 1
got value 2
got value 3
just after subscribe
got value 4
done
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// subscribe method
observable.subscribe(next, error, complete);
observable.subscribe(x => {}, err => {}, () => {});
observable.subscribe({
	next(x) {},
	error(err) {},
	complete() {}
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@