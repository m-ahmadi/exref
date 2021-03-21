var express = require('express');
var xhbs  = require('express-handlebars');
var app = express();

// setup
var config = {     // default
	handlebars:      require('handlebars'),
	extname:         '.handlebars',         // file extension of templates
	layoutsDir:      'views/layouts/',      // or set via `app.locals.layout`
	partialsDir:     'views/partials/', 
	defaultLayout:   null,                  // by default renders without a layout
	helpers:         null,
	compilerOptions: null
};
var engine = xhbs(config); // or
var inst = xhbs.create(config);

app.engine('handlebars', engine | inst.engine);
app.set('view engine', 'handlebars | .handlebars | .hbs' | inst.extname);

app.enable('view cache'); // template caching (enabled by default if process.env.NODE_ENV = 'production')

// render views
app.get('/', function (req, res) {
	res.render('home');
});

// pass data
app.get('/', function (req, res) {
  res.render('home', {
		firstname: 'mohammad',
		lastname: 'ahmadi',
		email: 'ma@yahoo.com'
		/*helpers: {
			foo: function () { return 'foo.'; }
		}*/
	});
});

app.listen(3000);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* layout vs view
a layout is just a template with a {{{body}}} placeholder, sorta like a level before a view.
so when you render a view, it goes through a layout first, then the layout passes stuff to the view
content of the view is rendered into layout's {{{body}}}
*/

res.render('foo', { layout: 'microsite' });		// looks for a 'microsite' layout in the default layouts folder
res.render('home', { layout: false });			// renders without layout

// layou example
/* layou example
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Example App</title>
	</head>
	<body>
		{{{body}}}
	</body>
	</html>
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@