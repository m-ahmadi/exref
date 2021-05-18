var socket = new io.Socket('localhost', {
	port: 8080
});
socket.connect();

// add a connect listener
socket.on('connect', function () {
	console.log('Client has connected to the server!');
});
// add a connect listener
socket.on('message', function (data) {
	console.log('Received a message from the server!', data);
});
// add a disconnect listener
socket.on('disconnect', function () {
	console.log('The client has disconnected!');
});

// Sends a message to the server via sockets
function sendMessageToServer(message) {
	socket.send(message);
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// another example:

var socket = io(); // tries to connect to the host that serves the page (by default)
var socket = io.connect('ws://127.0.0.1:2000');

socket.emit('chat message', 'message');

socket.on('server msg', function (v) {
	console.log(v);
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// basic server
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 3000;

app.get('/', function (req, res) {
	res.sendFile('index.html');
});

io.on('connection', function (socket) {
	console.log('a user connected');
	
	socket.on('disconnect', function () {
		console.log('user disconnected');
	});
	
	socket.on('chat message', function (msg) {
		console.log('message: ' + msg); // receive
	});
	
	socket.on('str message', function (msg) {
		socket.emit('server', 'asdolah'); // send
	});
	
	socket.on('some event', function () {
		socket.broadcast.emit('some event');
	});
});

http.listen(port, function () {
	console.log('listening on *:' + port);
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@