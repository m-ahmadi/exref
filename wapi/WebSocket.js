var ws = new WebSocket('ws://echo.websocket.org/echo');//ws:http://localhost:1337/web_socket.php');
console.log(ws);

ws.onopen = function(e) {
	console.log('Connection open...', e);
	
	ws.send('Hello WebSocket!');
};

ws.onmessage = function(e) {
	if(typeof e.data === 'string'){
		console.log('String message received', e, e.data);
	} else {
		console.log('Other message received', e, e.data);
	}
};

ws.onerror = function(e) {
	console.log('WebSocket Error: ' , e);
};


ws.onclose = function(e) {
	console.log('Connection closed', e);
};




//        code       reason
//ws.close(1000, 'Closing normally');