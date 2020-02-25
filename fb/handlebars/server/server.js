const	express = require('express');
const	Handlebars = require('handlebars');
const	app = express();

const template = Handlebars.compile('<h1 style="color:{{color}}">{{title}}</h1><br><p>{{body}}</p>');

const defaultContext = {
	title: 'My New Post',
	color: 'black',
	body: 'This is my first post!'
};

app.get('/', function (req, res) {
	res.send( template(Object.assign({}, defaultContext, req.query)) );
});

app.listen(8080);

// http://localhost:8080/?title=salam&color=red