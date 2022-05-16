/*
	The JavaScript engines are single threaded,
	they can only do one thing at a time,
	so there is only one stack, and that's the main thread.
	
	But browsers (and Node) use a mechanic to replicate a multi-threaded system,
	by the so called event loop and task queue, which act as separate threads.
	
	Event Loop:
		Communicate between task queue and main thread stack.
		If the stack is clear, and there's something in the task queue,
		It pushes the first thing on the task queue to the stack.
	Web/C++-APIs:
		It's an API that is different from the JavaScript language, (in browsers they're called WebAPIs)
		it can't use the main thread's stack directly,
		it communicates with the main stack through the task queue and event loop,
		so when it needs to access the stack it pushes callbacks to the task queue, and not in the main thread stack.
	
	DOM events, Ajax (XMLHttpRequest) and setTimeout are all webapies. (they push to task queue)
	
	This is excatly the same in Node environment,
	except instead of WebAPIs, there's C++ APIs. (and that's all node does: sitting on top of c++ apies)
*/

// setTimeout|setInterval send task to queue 
console.log('1');
setTimeout(() => console.log('2'), 0);
console.log('3');
// 1 3 2

// promises go to different queue
console.log('1');
setTimeout(() => console.log('2'), 0);
new Promise(r => r('3')).then(console.log);
console.log('4');
// 1 4 3 2