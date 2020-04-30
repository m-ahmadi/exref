// npm install cookie-parser
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

var h = cookieParser(secret, options);
app.use( h );

res.clearCookie('monster');

res.cookie('monster', 'nom nom');

res.cookie('toghrol', 'baba', {
	domain:   undefined,
	path:     undefined,
	maxAge:   undefined,
	secure:   undefined,
	httpOnly: undefined
});

/* options

domain
	Controls the domains the cookie is associated with; this allows you to assign cookies
	to specific subdomains. Note that you cannot set a cookie for a different domain
	than the server is running on: it will simply do nothing.

path
	Controls the path this cookie applies to. Note that paths have an implicit wildcard
	after them: if you use a path of / (the default), it will apply to all pages on your site.
	If you use a path of /foo, it will apply to the paths /foo, /foo/bar, etc.

maxAge
	Specifies how long the client should keep the cookie before deleting it, in milliseconds.
	If you omit this, the cookie will be deleted when you close your browser. (You
	can also specify a date for expiration with the expires option, but the syntax is
	frustrating. I recommend using maxAge.)

secure
	Specifies that this cookie will be sent only over a secure (HTTPS) connection.

httpOnly
	Setting this to true specifies the cookie will be modified only by the server. That is,
	client-side JavaScript cannot modify it. This helps prevent XSS attacks.
*/