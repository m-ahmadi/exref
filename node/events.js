const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('event', function (a, b) {
	// this === myEmitter
	console.log(a, b, this);
});

myEmitter.on('event', (a, b) => {
	// this !== myEmitter
	console.log(a, b, this);
});

myEmitter.once('event', () => {});

myEmitter.emit('event');
myEmitter.emit('event', 'a', 'b');