// node
var showdown  = require('showdown');
var converter = new showdown.Converter();
var text = '# hello, markdown!',
var html = converter.makeHtml(text);

// browser
var converter = new showdown.Converter();
var text = '# hello, markdown!',
var html = converter.makeHtml(text);