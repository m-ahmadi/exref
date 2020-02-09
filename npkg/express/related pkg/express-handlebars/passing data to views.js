var express = require('express');
var xhb  = require('express-handlebars');
var app = express();
var handlebars = xhb.create({ extname: '.hbs' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
	// res.render(view [, locals] [, callback])
	
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