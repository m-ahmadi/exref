// request.connection.remoteAddress
// request.headers['x-forwarded-for']; // if the server is behind a proxy

var express = require('express');
var ipaddr = require('ipaddr.js');
var app = express();

app.get('/', function (req, res) {
	var ip = req.connection.remoteAddress;
	var p = req.headers['x-forwarded-for'];
	
	
	res.send( req.headers );
	res.end();
});

app.listen(4242, function () {
	console.log('listenin on 4242');
});