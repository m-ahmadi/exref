const HTMLParser = require('node-html-parser'); // npm i node-html-parser
// https://www.npmjs.com/package/node-html-parser

const document = HTMLParser.parse('<ul id="list"><li>Hello World</li></ul>');

document.firstChild.firstChild // <li>Hello World</li>
document.querySelector('li')   // ...
