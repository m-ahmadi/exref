var convert = require('xml-js');

var xml = `
<?xml version="1.0" encoding="utf-8"?>
<note importance="high" logged="true">
	<title>Happy</title>
	<todo>Work</todo>
	<todo>Play</todo>
</note>`;

var result;
result = convert.xml2json(xml);
result = convert.xml2json(xml, {spaces: 4}); // `spaces` could also be '\t' or ' '. default: 0. only applicable for xml2json,js2xml, json2xml.
result = convert.xml2json(xml, {compact: true, spaces: 4});
result = convert.xml2json(xml, {compact: true, ignoreComment: true, spaces: 4});

console.log(result);

// other operations:
result = convert.js2xml(js, options);     // convert javascript object to xml text
result = convert.json2xml(json, options); // convert json text to xml text
result = convert.xml2js(xml, options);    // convert xml text to javascript object
result = convert.xml2json(xml, options);  // convert xml text to json text
