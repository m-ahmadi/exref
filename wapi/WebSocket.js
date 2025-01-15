// https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API

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




//        code       reason
//ws.close(1000, 'Closing normally');
