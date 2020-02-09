var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use( bodyParser.json() );                        // to support JSON-encoded bodies
app.use( bodyParser.urlencoded({extended: true} ) ); // to support URL-encoded bodies

app.post('/test-page', function (req, res) {
	var pars = req.body;
	
	var name = pars.name,
		color = pars.color;
});