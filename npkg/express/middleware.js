/*
	functions that have access to the following are called middleware:
	request object (req)
	response object (res)
	next middleware function
*/
var express = require('express');
var app = express();

var myLogger = function (req, res, next) {
	console.log('LOGGED');
	next();
};
var requestTime = function (req, res, next) {
	req.requestTime = Date.now(); // new Date().getSeconds();
	next();
};

app.use(myLogger);		// application-level middleware (the function gets executed for all requests to this server)
app.use(requestTime);

app.get('/', function (req, res) {
	var text = 'Hello World!<br>';
	text += '<small>Requested at: ' + req.requestTime + '</small>';
	res.send(text);
});

app.listen(3000);