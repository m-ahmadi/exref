/** cannot parse html */
const { DOMParser } = require('@xmldom/xmldom'); // npm i @xmldom/xmldom

const source = `<xml xmlns="a">
	<child>test</child>
	<child/>
</xml>`

const document = new DOMParser().parseFromString(source, 'text/xml');
