const Emitter = require('events');

emitter.addListener(eventName, listener)
emitter.emit(eventName, ...?args)
emitter.eventNames()
emitter.getMaxListeners()
emitter.listenerCount(eventName)
emitter.listeners(eventName)
emitter.off(eventName, listener)
emitter.on(eventName, listener)
emitter.once(eventName, listener)
emitter.prependListener(eventName, listener)
emitter.prependOnceListener(eventName, listener)
emitter.removeAllListeners(?eventName)
emitter.removeListener(eventName, listener)
emitter.setMaxListeners(n)
emitter.rawListeners(eventName)
emitter[Symbol.for('nodejs.rejection')](err, eventName, ...?args)

event.bubbles
event.cancelBubble()
event.cancelable
event.composed
event.composedPath()
event.currentTarget
event.defaultPrevented
event.eventPhase
event.isTrusted
event.preventDefault()
event.returnValue
event.srcElement
event.stopImmediatePropagation()
event.stopPropagation()
event.target
event.timeStamp
event.type
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples
const Emitter = require('events');

class MyEmitter extends Emitter {}
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