// route parameters are named url segments that capture values specified at their position in the url.
// aptured values are in `req.params`, with name of route parameter specified in the path as their keys.

app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})
// http://localhost/users/34/books/4623
req.params // { "userId": "34", "bookId": "4623" }

'/flights/:from-:to'
// http://localhost:3000/flights/LAX-SFO
req.params // { "from": "LAX", "to": "SFO" }

'/plantae/:genus.:species'
// http://localhost:3000/plantae/Prunus.persica
req.params // { "genus": "Prunus", "species": "persica" }

// regex
'/user/:userId(\d+)'
// http://localhost:3000/user/42
req.params // { "userId": "42" }
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// optional parameters
'/users/:id'
// http://localhost/users    => not found (because id param is mandatory by default and this path doesn't exist)
// http://localhost/users/4  => ok 

'/users/:id?'
// http://localhost/users    => ok
// http://localhost/users/4  => ok 

app.get('/articles/:year?/:month?/:day?', (req, res) => {
	res.send(req.params);
});

// http://localhost/articles => ok

// http://localhost/articles/2019/6/14
req.params // { year: "2019", month: "6", day: "14" }

// http://localhost/articles/2019/6
req.params // { year: "2019", month: "6" }

// http://localhost/articles/2019
req.params // { year: "2019" }
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// another example (express-generator, hbs)
app.get('/add-car/:step', (req, res) => {
	res.render(`add-car/step${req.params.step}`);
});

// http://localhost:3000/add-car/1  ->  add-car/step1.hbs
// http://localhost:3000/add-car/2  ->  add-car/step2.hbs
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// another example (express, showdown):
// serve the file specified in the url
// convert markdown to html before serving

var converter = new require('showdown').Converter();
app.get('/:p', function (req, res) {
	var content = fs.readFileSync(`public/${req.params.p}.md`, 'utf8');
	var converted = converter.makeHtml(content);
	res.send(converted);
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// GET query string parameters
app.get('/user', function (req, res) {
  res.send(req.query)
})
// http://localhost/user?id=12&name=foo
req.query // { "id": "12", "name": "foo" }
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@