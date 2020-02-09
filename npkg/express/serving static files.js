var express = require('express');
var app = express();

var root = '';
var options = {
	dotfiles: '',
	etag: true,
	extensions: false,
	fallthrough: true,
	index: 'index.html', // mixed
	lastModified: true,
	maxAge: 0,
	redirect: true,
	setHeaders: function () {}
};

express.static(root, options);
//----------------------------------------------------------------------------
app.use( express.static('public') );
/*
	.
	├── app.js
	└── public
		├── js
		└── css
			└── style.css
	
	localhost/css/syle.css       (NOT: localhost/public/css/style.css )
*/
//----------------------------------------------------------------------------
// others:
app.use( '/static', express.static('public') );
app.use( '/static', express.static(__dirname + '/public') );