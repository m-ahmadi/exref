var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

var h = cookieParser('salam');

app.use(h);

app.get('/', function (req, res) {
	res.cookie('monster', 'nom nom', {
		maxAge: 60000
	})
	res.send('cookie is set');
});

app.get('/get', function (req, res) {
	res.send(req.cookies);
});

app.get('/del', function (req, res) {
	res.clearCookie('monster');
	res.send('cookie deleted');
});

app.listen(4242, function () {
	console.log('listenin on 4242');
});