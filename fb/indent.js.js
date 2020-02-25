indent                                     // browser global
define(['indent'] , function (indent) {}); // browser amd
var indent = require('indent');            // node
import  {indent } from 'indent.js';        // es6 modules

indent.js(code, { tabString: '\t' });
indent.js(code, {
	tabString: '\t',     // string to indent the code with. counts as 1 indent.
	indentHtmlTag: false // whether to indent contents inside <html> tag or not. valid only for .html().
});

indent.js(code);  // JSX as well
indent.ts(code);  // TSX as well
indent.css(code);
indent.html(code);

// example
var indentChar = '\t'; // '  ' or '    '
var code = '<div><p></p></div>';
var output = indent.html(code, { tabString: indentChar });
console.log(output);

// deprecated
indent.indentJS()
indent.indentCSS()
indent.indentHTML()
var output = indent.indentHTML(code, indentChar);
