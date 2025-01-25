// https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API

var ws = new WebSocket(url='ws|wss|http|https:...', protocols=''|['',...])
ws.binaryType     = 'blob|arrayBuffer'     // controls binary data type being received over the connection
ws.bufferedAmount = readonly unsigned long // number of bytes of queued data
ws.extensions     = readonly string        // extensions selected by the server
ws.protocol       = readonly string        // sub-protocol selected by server
ws.readyState     = readonly enum {        // current state of connection
	WebSocket.CONNECTING, // socket created but connection is not open yet
	WebSocket.OPEN,       // connection is open and ready to communicate
	WebSocket.CLOSING,    // connection is in process of closing
	WebSocket.CLOSED,     // connection is closed or couldn't be opened
}
ws.url            = readonly ''
ws.send(data)
ws.close(?code, ?reason)

// events

ws.addEventListener('open',    Event        e => )
ws.addEventListener('message', MessageEvent e => )
ws.addEventListener('error',   Event        e => )
ws.addEventListener('close',   CloseEvent   e => )

ws[on+'open|message|error|close'] = function (e) {}

var e = new MessageEvent()
e.data        = readonly any
e.origin      = readonly string
e.lastEventId = readonly string
e.source      = readonly (MessageEventSource=WindowProxy|MessagePort|ServiceWorker)
e.ports       = readonly MessagePort[]

var e = new CloseEvent()
e.code     = readonly unsigned short // https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent/code#value
e.reason   = readonly string
e.wasClean = readonly boolean

var mp = new MessagePort()
mp.postMessage(message, ?transfer | ?options)
mp.start()
mp.close()

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

var endpoint = 'echo.websocket.org/echo';

//var ws = new WebSocket('ws://'+endpoint);  // without ssl
var ws = new WebSocket('wss://'+endpoint);   // with ssl
console.log(ws);

ws.onopen = function (e) {
	console.log('Connection open...', e);
	
	ws.send('Hello WebSocket!');
};

ws.onmessage = function (e) {
	if (typeof e.data === 'string') {
		console.log('String message received', e, e.data);
	} else {
		console.log('Other message received', e, e.data);
	}
};

ws.onerror = function (e) {
	console.log('WebSocket Error:' , e);
};

ws.onclose = function (e) {
	console.log('Connection closed', e.code, e.reason, e.wasClean);
};

ws.close(1000, 'Closing normally');
