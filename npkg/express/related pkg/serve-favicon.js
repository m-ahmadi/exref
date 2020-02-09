// npm install serve-favicon
var express = require('express');
var favicon = require('serve-favicon');
 
var app = express();
app.use(favicon(__dirname + '/public/favicon.ico'));
 
// Add your routes here, etc. 
 
app.listen(3000);