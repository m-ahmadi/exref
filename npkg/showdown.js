const showdown  = require('showdown');

let converter = new showdown.Converter();
let text = '# hello, markdown!';
let html = converter.makeHtml(text);