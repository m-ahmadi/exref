// https://developer.mozilla.org/en-US/docs/Web/API/WebSocketStream

var wss = new WebSocketStream(url='ws|wss|http|https:...', ?options={protocols:''|['',...], signal: AbortSignal})
wss.closed = Promise<int>
wss.opened = Promise<{extensions: '', protocol: '', readable: ReadableStream, writable: WritableStream}>
wss.url    = ''
wss.close()

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

// an example
var controller = new AbortController();
var wss = new WebSocketStream('wss://example.com/queue', {
	protocols: ['amqp', 'mqtt'],
	signal: controller.signal,
});

// another example
var wss = new WebSocketStream('wss://127.0.0.1/');
async function start() {
	var {readable, writable, extensions, protocol} = await wss.opened;
	var reader = readable.getReader();
	var writer = writable.getWriter();
	writer.write('ping');
	while (true) {
		var {value, done} = await reader.read();
		if (done) break;
		setTimeout(() => writer.write('ping'), 5000);
	}
}
