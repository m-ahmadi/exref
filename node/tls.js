const tls = require('tls'); // https://nodejs.org/api/tls.html

tls.DEFAULT_ECDH_CURVE
tls.DEFAULT_MAX_VERSION
tls.DEFAULT_MIN_VERSION
tls.DEFAULT_CIPHERS
tls.rootCertificates

tls.checkServerIdentity(hostname, cert)
var tlsSocket = tls.connect(options[, callback])
var tlsSocket = tls.connect(path[, options][, callback])
var tlsSocket = tls.connect(port[, host][, options][, callback])
tls.createSecureContext([options])

new tls.TLSSocket(socket[, options]) // extends net.Socket
// https://nodejs.org/api/tls.html#class-tlstlssocket
tlsSocket.on('keylog', (line=Buffer)=>)
tlsSocket.on('OCSPResponse', (response=Buffer)=>)
tlsSocket.on('secureConnect', (line=Buffer)=>)
tlsSocket.on('session', (session=Buffer)=>)

new tls.Server() // extends net.Server
// https://nodejs.org/api/tls.html#class-tlsserver
function secureConnectionListener(socket=TLSSocket) {}
var server = tls.createServer([options][, secureConnectionListener])
// https://nodejs.org/api/tls.html#class-tlsserver
server.on('connection', (socket <stream.Duplex>)=>)
server.on('keylog', (line=Buffer, tlsSocket=TLSSocket)=>)
server.on('newSession', (sessionId=Buffer, sessionData=Buffer, callback)=>)
server.on('OCSPRequest', (certificate=Buffer, issuer=Buffer, callback)=>)
server.on('resumeSession', (sessionId=Buffer, callback)=>)
server.on('secureConnection', (tlsSocket=TLSSocket)=>)
server.on('tlsClientError', (exception=Error, tlsSocket=TL)=>)
server.addContext(hostname, context)
server.address()
server.close([callback])
server.getTicketKeys()
server.listen()
server.setSecureContext(options)
server.setTicketKeys(keys)

tls.setDefaultCACertificates(certs)
tls.getCACertificates([type])
tls.getCiphers()

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples
const { readFileSync } = require('fs');



// client
const socket = tls.connect(443, '127.0.0.1', (socket) => {
	console.log('secureConnection', socket.authorized ? 'authorized' : 'unauthorized');
	socket.setEncoding('base64'); // utf8|base64|hex|...
});
socket.on('data', data => {
	console.log('data', data); // buffer | (base64|hex|...) str if setEncoding()
});
socket.on('error', err => console.log(err.message));
socket.on('close', hadError => console.log('closed', hadError));



// server
const tls = require('tls');
const options = {ciphers: 'DEFAULT@SECLEVEL=0', minVersion: 'TLSv1'};
// options.rejectUnauthorized = false; // change this to see
const server = tls.createServer(options, (socket) => {
	console.log('client connected with protocol:', socket.getProtocol());
	socket.end();
	this.close();
});
const port = 443;
server.listen(port, () => {
	tls.connect(port, options);
});



// echo server example - server
// openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj /CN=localhost -keyout server-key.pem -out server-cert.pem copy
// openssl pkcs12 -certpbe AES-256-CBC -export -out client-cert.pem -inkey server-key.pem -in server-cert.pem 
const options = {
	key: readFileSync('server-key.pem'),
	cert: readFileSync('server-cert.pem'),
	requestCert: true,                       // required only if using client certificate authentication
	ca: [ readFileSync('client-cert.pem') ], // required only if client uses a self-signed certificate
};
const server = tls.createServer(options, (socket) => {
	console.log('server connected', socket.authorized ? 'authorized' : 'unauthorized');
	socket.write('welcome!\n');
	socket.setEncoding('utf8');
	socket.pipe(socket);
});
server.listen(8000, () => {
	console.log('server bound');
});



// echo server example - client
// openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj /CN=localhost -keyout client-key.pem -out client-cert.pem
// openssl pkcs12 -certpbe AES-256-CBC -export -out server-cert.pem -inkey client-key.pem -in client-cert.pem
const options = {
	// required only if server requires client certificate authentication
	key: readFileSync('client-key.pem'),
	cert: readFileSync('client-cert.pem'),
	ca: [ readFileSync('server-cert.pem') ],     // required only if server uses a self-signed certificate
	checkServerIdentity: () => { return null; }, // required only if server cert isn't for "localhost"
};
const socket = tls.connect(8000, options, () => {
	console.log('client connected', socket.authorized ? 'authorized' : 'unauthorized');
	process.stdin.pipe(socket);
	process.stdin.resume();
});
socket.setEncoding('utf8');
socket.on('data', (data) => {
	console.log('server sent:', data);
});
socket.on('end', () => {
	console.log('server ends connection');
});
(async () => {
	while (true) {
		await new Promise(r => setTimeout(r, 1000));
		socket.write('hi\n');
	}
})();
