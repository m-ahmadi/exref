//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// http.request
var http = require('https');

var options = {
	host:             'www.google.com',
	port:             80,
	path:             '/upload',
	method:           'POST',
	protocol:         null,
	hostname:         null,
	family:           null,
	localAddress:     null,
	socketPath:       null,
	headers:          null,
	auth:             null,
	agent:            null,
	createConnection: null,
};

// var req = https.request('https://www.googleapis.com/userinfo/v2/me', function (res) {});

var req = http.request(options, function (res) {
	console.log( res.statusCode );
	
	console.log( res.headers );
	
	res.setEncoding('utf8');
	
	res.on('data', function (chunk) {
		console.log(chunk);
	});
});

req.on('error', function (e) {
	console.log('problem with request: ' + e.message);
});

// write data to request body
req.write('data\n');
req.write('data\n');
req.end();

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* http.get
	http.get( options[, callback] )
	Since most requests are GET requests without bodies, Node.js provides this convenience method.
	The only difference between this method and http.request() is that it sets the method to GET and calls req.end() automatically.
*/

http.get('http://site.com/t.php?p=v', function (res) {
	res.setEncoding('utf8');
	res.on('data', function (chunk) {
		console.log(chunk);
	});
}).on('error', function (e) {
	console.log(e.message);
});

http.get({
	host: 'eternagame.wikia.com',
	path: '/wiki/EteRNA_Dictionary'
}, function (res) {
	// ...
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@