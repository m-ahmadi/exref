utf8                             // browser: utf8.js
const utf8 = require('utf8');    // npm install utf8

utf8.encode('\xA9');             // '\xC2\xA9'
utf8.encode('\uD800\uDC01');     // '\xF0\x90\x80\x81'
utf8.decode('\xC2\xA9');         // '\xA9'
utf8.decode('\xF0\x90\x80\x81'); // '\uD800\uDC01'