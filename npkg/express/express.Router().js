// Creates a new router object
// The optional "options" parameter specifies the behavior of the router
var options = {
	caseSensitive: false,
	mergeParams: false,
	strict: false
};
var router = express.Router();

/*
	A router object is an isolated instance of middleware and routes.
	You can think of it as a “mini-application,” capable only of performing middleware and routing functions.
	Every Express application has a built-in app router.
	A router behaves like middleware itself,
	so you can use it as an argument to app.use() or as the argument to another router’s use() method.
	Once you’ve created a router object with express.Router(),
	you can add middleware and HTTP method routes (such as get, put, post, and so on) to it just like an application.
*/

// invoked for any requests passed to this router
router.use(function (req, res, next) {
	// .. some logic here .. like any other middleware
	next();
});

// will handle any request that ends in /events
// depends on where the router is "use()'d"
router.get('/events', function (req, res, next) {
	// ..
});

// You can then use a router for a particular root URL in this way separating your routes into files or even mini-aps.
// only requests to /calendar/* will be sent to our "router"
app.use('/calendar', router);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
var express = require('express');
var app = express();

var router = express.Router();

router.use('/sub', function (req, res, next) {
	console.log('gii');
	req.headers.here = 'kitty';
	res.send(req.headers);
	res.end();
});

app.use('/foo', router);

app.use(function (req, res, next) {
	console.log('LOGGED');
	next();
});

app.get('/', function (req, res) {
	
	res.send('fudge');
});

app.listen(3000);