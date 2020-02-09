var http = require('http'),

server = http.createServer( function (request, response) {
	
	// this fn is called once for every HTTP request that's made against that server
	
	request.method		// 	GET POST
	request.url 		// 	/site.com/users
	request.headers		//	headers['user-agent']
});

server.on('request', function(request, response) {
	
});

server.listen(8080);