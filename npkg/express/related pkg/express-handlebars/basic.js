/*
	Basic Usage
	Directory Structure:

	.
	├── app.js
	└── views
		├── home.handlebars
		└── layouts
			└── main.handlebars
	 
	2 directories, 3 files
	
*/
var express = require('express');
var xhbs  = require('express-handlebars');
var app = express();
//---------------------------------------------------------------------------------
// creating ExpressHandlebars instances and configuring the view engine:

// one way: (using the create convenience factory function)
var hbs = xhbs.create();
app.engine('handlebars', hbs.engine);

// another way:
app.engine('handlebars', xhbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//---------------------------------------------------------------------------------
// using another extension for templates
app.engine('.hbs', xhbs({extname: '.hbs'}));
app.set('view engine', '.hbs');



app.get('/', function (req, res) {
	res.render('home');
});
app.listen(3000);