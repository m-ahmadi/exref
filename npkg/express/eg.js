// basic
var express = require('express');
var app = express();
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(3000, () => console.log('Listening...'));



app.engine('pug', require('pug').__express);
app.engine('html', require('ejs').renderFile);
var engines = require('consolidate');
app.engine('haml', engines.haml);
app.engine('html', engines.hogan);



app.locals.title = 'My App';
app.locals.strftime = require('strftime');
app.locals.email = 'me@myapp.com';
app.locals.title // 'My App'
app.locals.email // 'me@myapp.com'



// access get request parameters
app.get('/', function (req, res) {
	res.send(
	//	req.param('id')
	//	express deprecated req.param(name, default): Use req.params, req.body, or req.query instead
		req.query.id
		);
});



// access post request parameters
var bodyParser = require('body-parser');
app.use( bodyParser.json() );                        // to support JSON-encoded bodies
app.use( bodyParser.urlencoded({extended: true} ) ); // to support URL-encoded bodies
app.post('/test-page', function (req, res) {
	var pars = req.body;
});



// serve static files
app.use( express.static('public') );
/*
	├── app.js
	└── public
		├── js
		└── css
			└── style.css
	localhost/css/syle.css       (NOT: localhost/public/css/style.css )
*/
// route to folder with different name
app.use( '/static', express.static('public') );
app.use( '/static', express.static(__dirname + '/public') );



// express myapp --hbs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.get('/', function(req, res, next) {
	res.render('index', { title: 'Express', layout: false });            // no layout
	res.render('index', { title: 'Express', layout: 'second' });         // views/second.hbs
	res.render('index', { title: 'Express', layout: 'layouts/main' });   // views/layouts/main.hbs
});



// middleware
app.use(myLogger);		// application-level middleware (all requests to this server)
app.use(requestTime);
app.get('/', (req, res) => {
	var text = 'Hello World!<br>';
	text += '<small>Requested at: ' + req.requestTime + '</small>';
	res.send(text);
});
function myLogger(req, res, next)    { console.log('LOGGED'); next(); }
function requestTime(req, res, next) { req.requestTime = Date.now(); next(); }



// async middleware
function asyncUtil(fn) {
	return function (...args) {
		const fnReturn = fn(...args)
		const next = args[args.length-1]
		return Promise.resolve(fnReturn).catch(next)
	};
}
app.get('/', asyncUtil(async (req, res, next) => {
	const bar = await foo.findAll();
	res.send(bar)
}))



// cors
var cors = require('cors');
// enable for all requests
app.use(cors())
app.get('/products/:id', (q,res) => res.json({msg: 'foo'}))
// enable for a single route
app.get('/products/:id', cors(), (q,res) => res.json({msg: 'foo'}))



// set default port
app.set('port', process.env.PORT || 3000);



// redirect
res.redirect('/admin')
res.redirect('../login')
res.redirect('..')
res.redirect('post/new')
res.redirect('http://example.com')
res.redirect(301, 'http://example.com')
res.redirect('back')



// render view
res.render('index')
res.render('index', (err, html) => res.send(html))
res.render('user', { name: 'Tobi' }, (err, html)=> res.send(html)) // pass local variable to view



// router
var router = express.Router();
router.use((req, res, next) => next())     // all requests passed to this router
router.get('/events', (req, res, next) =>) // only request that ends in /events
app.use('/foo', router)
