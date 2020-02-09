var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send(
	//	req.param('id')
	//	express deprecated req.param(name, default): Use req.params, req.body, or req.query instead
		req.query.id
	);
});

app.listen(1251);	// http://localhost:1251/?id=dasdad