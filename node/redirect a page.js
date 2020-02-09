response.writeHead(302, {
	'Location': 'your/404/path.html'
});
response.end();