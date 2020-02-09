var https      = require('https'),
	fs         = require('fs'),
	express    = require('express'),
	mysql      = require('mysql'),
	Handlebars = require('handlebars'),
	sha1       = require('sha1'),
	credentials= require('./credentials.js'),
	gapi       = require('googleapis'),
	
	app = express(),
	config = {
		host     : 'localhost',
		user     : 'root',
		password : '',
		database : 'sky'
	},
	host = 'localhost',
	port = 1250,
	connection;
	
var CLIENT_ID = '594204839102-7r5sejasdqalk1gkqpcs8fr9pr2t4pv5.apps.googleusercontent.com',
	CLIENT_SECRET = 'vEtC9DVxlTJadB9AEyldtAIV',
	REDIRECT_URL = 'http://localhost:1250/public/index.htm'; 
var OAuth2 = gapi.auth.OAuth2;
var oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
var scopes = [
	'https://www.googleapis.com/auth/userinfo.email',
	'https://www.googleapis.com/auth/userinfo.profile'
];
var plus = gapi.plus('v1');
var url = oauth2Client.generateAuthUrl({
	//access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token) 
	scope: scopes // If you only need one scope you can pass it as string 
});

app.get('/public/index.htm', function (req, res) {
	code = req.query.code;
	if (code) {
		
		oauth2Client.getToken(code, function (err, tokens) {
			// Now tokens contains an access_token and an optional refresh_token. Save them. 
			if(!err) {
				oauth2Client.setCredentials(tokens);
				
				var url = 'https://www.googleapis.com/userinfo/v2/me?access_token=' + tokens.access_token;
				https.get(url, function (r) {
					r.setEncoding('utf8');
					
					r.on('data', function (chunk) {
						res.send(chunk);
					});
					
				});
			}
		});
	}
});

var output;
fs.readFile('views/index.htm', {encoding: 'utf-8'}, function (err, data) {
	var template = Handlebars.compile( data );
	var context = { href: url };
	output = template(context);
});


app.get('/', function (req, res) {
	
	var result = '';
	
	connection = mysql.createConnection(config);
	connection.connect();
	
	connection.query('SELECT * FROM product', function (err, rows, fields) {
		if (err) { throw err; }
		
		
		rows.forEach(function (item) {
			result += JSON.stringify(item);
		});
		
		//res.send( result );
		res.send( output );
	});
	
	connection.end();
});


app.use( '/public', express.static('public') );

app.listen(port, function () {
	console.log('App is listening on port ' + port);
});