var express = require('express');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', function(req, res, next) {
	res.render('index', { title: 'Express', layout: false });            // no layout
	res.render('index', { title: 'Express', layout: 'second' });         // proj/views/second.hbs
	res.render('index', { title: 'Express', layout: 'layouts/main' });   // proj/views/layouts/main.hbs
});

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// generated with express-generator

// proj/routes/index.js:
var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', layout: 'layouts/main' });
});
module.exports = router;

// proj/app.js:
var express = require('express');
var path = require('path');
var app = express();
var indexRouter = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/', indexRouter);