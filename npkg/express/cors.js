var express = require('express');
var cors = require('cors');
var app = express();

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// simple usage (enable all cors requests)
app.use(cors())

app.get('/products/:id', function (req, res, next) {
	res.json({
		msg: 'This is CORS-enabled for all origins!'
	})
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// enable cors for a single route
app.get('/products/:id', cors(), function (req, res, next) {
	res.json({
		msg: 'This is CORS-enabled for a Single Route'
	})
})
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
app.listen(80, function () {
	console.log('CORS-enabled web server listening on port 80');
});