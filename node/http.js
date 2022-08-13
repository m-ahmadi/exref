http.request(url=''|URL, ?options={}, ?callback): ClientRequest
http.request(options={
	agent:              undefined | false | Agent,
	auth:               '',
	createConnection:   ()=> stream.Duplex,
	defaultPort:        agent.defaultPort | undefined,
	family:             4 | 6,
	headers:            {},
	host:               'localhost', // should not contain http://
	hostname:           '',
	insecureHTTPParser: false,
	localAddress:       '',
	lookup:             dns.lookup() | ()=>,
	maxHeaderSize:      16384, // 16KB
	method:             'GET',
	path:               '/',
	port:               this.defaultPort | 80,
	protocol:           'http:',
	setHost:            true,
	socketPath:         '',
	timeout:            0,

}, ?callback=(res:IncomingMessage)=>)

http.get(...) // same as .request() except it sets the method to GET and calls req.end() automatically

IncomingMessage extends stream.Readable {
	aborted        boolean
	complete       boolean
	headers        {}
	httpVersion    ''
	method         ''
	rawHeaders     ['', ...]
	rawTrailers    ['', ...]
	socket         stream.Duplex
	statusCode     0
	statusMessage  ''
	trailers       {}
	url            ''
	
	destroy(?error)
	setTimeout(msecs, ?callback)
}
'aborted close'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// example
var http = require('http|https');

var req = http.request({hostname: 'www.google.com', path: '/upload'}, function (res) {
	if (res.statusCode !== 200) {
		console.log(res.statusCode, res.statusMessage);
		return;
	}
	console.log(res.headers);
	
	res.setEncoding('utf8');
	
	res.on('data', function (chunk) {
		console.log(chunk);
	});
});

req.on('error', function (err) {
	console.log('problem with request: ' + err.message);
});

req.end();

// .get()
http.get('http://site.com/t.php?p=v', function (res) {
	res.setEncoding('utf8');
	res.on('data', function (chunk) {
		console.log(chunk);
	});
}).on('error', function (err) {
	console.log(err.message);
});

http.get({
	host: 'eternagame.wikia.com',
	path: '/wiki/EteRNA_Dictionary'
}, function (res) {});


var fs = require('fs');
http.get('http://jsonplaceholder.typicode.com/posts', res => {
	res.setEncoding('utf8');
	let str = '';
	res.on('data', chunk => str += chunk);
	res.on('end', ()=> fs.writeFileSync('foo.json', str));
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// post
const postData = querystring.stringify({
	'msg': 'Hello World!'
});

const options = {
	hostname: 'www.google.com',
	port: 80,
	path: '/upload',
	method: 'POST',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': Buffer.byteLength(postData)
	}
};

const req = http.request(options, (res) => {
	console.log(`STATUS: ${res.statusCode}`);
	console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
	res.setEncoding('utf8');
	res.on('data', (chunk) => {
		console.log(`BODY: ${chunk}`);
	});
	res.on('end', () => {
		console.log('No more data in response.');
	});
});

req.on('error', (err) => {
	console.error(`problem with request: ${err.message}`);
});

// write data to request body
req.write(postData);
req.end();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@