var http = require('https');

http.get('https://www.googleapis.com/userinfo/v2/me', function (res) {
	console.log( res.statusCode );
	
	console.log( res.headers );
	
	res.setEncoding('utf8');
	
	res.on('data', function (chunk) {
		console.log(chunk);
	});
	
}).on('error', function (e) {
	console.log(e.message);
});