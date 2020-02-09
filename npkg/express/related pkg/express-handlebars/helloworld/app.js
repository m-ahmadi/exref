var express = require('express');
var app = express();
var exhb = require('express-handlebars');

app.engine( 'handlebars', exhb({defaultLayout: 'main'}) );
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
	res.render('home', {
		title: 'Home Sweet Home',
		text: "I'm very happy now. How about you?"
	});
	//res.send('Salam, Chetori?');
});

app.listen(1250);
