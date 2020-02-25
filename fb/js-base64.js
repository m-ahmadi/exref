Base64                                    // browser: base64.js
import { Base64 } from 'js-base64';       // es6
var Base64 = require('js-base64').Base64; // npm install --save js-base64

Base64.encode('dankogai');     // ZGFua29nYWk=
Base64.encode('小飼弾');       // 5bCP6aO85by+
Base64.encodeURI('小飼弾');    // 5bCP6aO85by-
 
Base64.decode('ZGFua29nYWk='); // dankogai
Base64.decode('5bCP6aO85by+'); // 小飼弾
Base64.decode('5bCP6aO85by-'); // 小飼弾

// note: .decodeURI() is unnecessary since it accepts both flavors

Base64.decode() // decodes to utf8 string.
Base64.atob()   // decodes to bytes. compatible with browser atob() which is absent in node.js