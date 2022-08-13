const net = require('net'); // https://nodejs.org/api/net.html

var server = net.createServer(?options={allowHalfOpen:false, pauseOnConnect:false}, ?connectionListener=(socket)=>)
server.listening
server.maxConnections
server.address(): {address:'',family:'',port:0} | '' | null
server.close(?callback)
server.getConnections(callback)
server.listen()
	listen(options={
		port:        0,
		host:        '',
		path:        '',
		backlog:     0,
		exclusive:   false,
		readableAll: false,
		writableAll: false,
		ipv6Only:    false,
		signal:      AbortSignal, 
	}, ?callback)
	listen(handle=Server|Socket|{_handle}|{fd}, ?backlog=0, ?callback)
	listen(path='', ?backlog=0, ?callback)
	listen(?port=0, ?host='', ?backlog=0, ?callback)
server.ref()
server.unref()
'close|connection|error|listening'

var socket =
	net.createConnection | connet()
	net.createConnection(options={
		*port:        0,              // tcp only opts:
		host:         'localhost',
		localAddress: '',
		localPort:    undefined | 0,
		family:       undefined | 0,
		hints:        undefined | 0,
		lookup:       dns.lookup(),
		part:         '',             // ipc only opt
		onread: {                     // both
			buffer:     Buffer | Uint8Array | ()=>,
			callback:   ()=>
		}
	}, ?connectListener=()=>)
	net.createConnection(path='', ?connectListener=()=>)
	net.createConnection(port=0, ?host='localhost', ?connectListener=()=>)

new net.Socket(?options={
	fd:            undefined | 0,
	allowHalfOpen: false,
	readable:      false,
	writable:      false,
	signal:        AbortSignal,
})
socket.bufferSize
socket.bytesRead
socket.bytesWritten
socket.connecting
socket.destroyed
socket.localAddress
socket.localPort
socket.pending
socket.remoteAddress
socket.remoteFamily
socket.remotePort
socket.readyState
socket.timeout
socket.address()
socket.connect()
	connect(options, ?connectListener)
	connect(path, ?connectListener)
	connect(port, ?host, ?connectListener)
socket.destroy([error])
socket.end(?data, ?encoding, ?callback)
socket.pause()
socket.ref()
socket.resume()
socket.setEncoding(?encoding)
socket.setKeepAlive(?enable, ?initialDelay)
socket.setNoDelay(?noDelay)
socket.setTimeout(timeout, ?callback)
socket.unref()
socket.write(data=''|Buffer|Uint8Array, ?encoding='utf8', ?callback)
'close|connect|data|drain|end|error|lookup|ready|timeout'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// example

// server.js
var server = net.createServer(socket => {
	socket.write('server says hello\n');
	socket.end('server says goodbye\n');
});
server.on('error', console.log);
server.listen(8080, () => {
	console.log('server listening on', server.address());
});

// client.js
var socket = net.connect(8080);
socket.on('data', v => console.log(''+v)); /*
	server says hello
	server says goodbye */