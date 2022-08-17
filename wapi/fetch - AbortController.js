AbortController.signal 
AbortController.abort()


var controller = new AbortController();
var { signal } = controller;
fetch('https://jsonplaceholder.typicode.com/todos/1', {signal}).then(async r => {
	console.log( await r.text() );
}).catch(e => {
	console.log(e.message);
	
	// detection
	if (e.name === 'AbortError') // aborted by user
});
controller.abort(); // user aborted the request


// abort multiple fetches
var controller = new AbortController();
var { signal } = controller;
fetch('https://jsonplaceholder.typicode.com/todos/1', {signal}).catch(e => console.log(e.message));
fetch('https://jsonplaceholder.typicode.com/todos/2', {signal}).catch(e => console.log(e.message));
controller.abort();


// abort after 1 second (won't abort if request is done under 1 second)
var controller = new AbortController();
var { signal } = controller;
fetch('https://jsonplaceholder.typicode.com/todos/1', {signal}).then(async r => {
	console.log( await r.text() );
}).catch(e => {
	console.log(e.message);
});
setTimeout(() => controller.abort(), 1000);