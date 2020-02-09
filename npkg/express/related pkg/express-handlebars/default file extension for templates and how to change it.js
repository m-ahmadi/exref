//	express-handlebars expects Handlebars templates to have the .handlebars extension
//	you can change this, when you create the express-handlebars instance:

var handlebars = require('express-handlebars').create({ extname: '.hbs' });

//	or
var xhb = require('express-handlebars');
var handlebars = xhb.create({ extname: '.hbs' });

//	or
app.set('view engine', '.hbs');
//	Setting the app's "view engine" setting will make that value the default file extension used for looking up views.