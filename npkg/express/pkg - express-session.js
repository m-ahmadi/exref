// npm install express-session
var express = require('express');
var session = require('express-session');
var app = express();

var opt = {
	name: 'GholamAbbas',
	genid: function (req) {
		return 'SessionID';
	},
	proxy: undefined,
	resave: false,
	rolling: false,
	saveUninitialized: true,
	secret: 'keyboard cat',
	unset: 'keep', // 'destroy'
	cookie: {	
		path: '/',
		httpOnly: true,
		secure: false,
		maxAge: null
	}
};
var h = session(opt);

app.use( h );
debugger;

app.get('/set', function (req, res) {
	req.session.asghar = 'aldang';
	res.send('set');
});
app.get('/get', function (req, res) {
	res.send(req.session);
});

app.listen(4242, function () {
	console.log('Listening on 4242');
});
