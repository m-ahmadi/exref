// paths
`DEFINITION:    MATCHES:
/               /
/about          /about
/random.text    /random.text
/ab?cd          /acd  /abcd
/ab+cd          /abcd, /abbcd, /abbbcd, ...
ab*cd           /abcd, /abxcd, /abRANDOMcd, /ab123cd, ...
ab(cd)?e        /abe, /abcde `
/a/          // anything with an 'a' in it
/.*fly$/     // butterfly, dragonfly, but not butterflyman, dragonflyman
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// params
app.get('', (req, res) => res.send(req.params))

// definition                     example                    req.params
'/users/:userId/books/:bookId'    '/users/34/books/4623'     {userId: '34', bookId: '4623'}
'/flights/:from-:to'              '/flights/LAX-SFO'         {from: 'LAX', to: 'SFO'}
'/plantae/:genus.:species'        '/plantae/Prunus.persica'  {genus: 'Prunus', species: 'persica'}
'/user/:userId(\d+)'              '/user/42'                 {userId: '42'}

// optional params
'/users/:id'
	'http://local/users'    // 404 (param is mandatory by default)
	'/users/4'              // 200 

'/users/:id?'
	'http://local/users'    // 200
	'http://local/users/4'  // 200 

'/articles/:year?/:month?/:day?'
	'http://local/articles' /* 200 */  {}
	'http://local/articles/2019/6/14'  {year: '2019', month: '6', day: '14'}
	'http://local/articles/2019/6'     {year: '2019', month: '6'}
	'http://local/articles/2019'       {year: '2019'}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// example (express-generator + hbs)
app.get('/add-car/:step', (req, res) => {
	res.render(`add-car/step${req.params.step}`);
});
'http://local/add-car/1'  ->  'add-car/step1.hbs'
'http://local/add-car/2'  ->  'add-car/step2.hbs'


// example (express + showdown)
// serve specified file in url (convert md to html)
var converter = new require('showdown').Converter();
app.get('/:p', function (req, res) {
	var content = fs.readFileSync(`public/${req.params.p}.md`, 'utf8');
	var converted = converter.makeHtml(content);
	res.send(converted);
});

// GET query string parameters
app.get('/user', function (req, res) {
  res.send(req.query)
})
'http://localhost/user?id=12&name=foo'
req.query {id: '12', name: 'foo'}