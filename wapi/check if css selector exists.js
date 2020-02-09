document.styleSheets
// stylesheets retrieved from <link> headers are placed first, sorted in header order.
// stylesheets retrieved from the DOM are placed after, sorted in tree order.

document.styleSheets[0].rules[0].selectorText
document.styleSheets[0].imports[0].rules[0].selectorText

function selectorExists(selector) { 
	return Object.keys(document.styleSheets)
		.map(k => document.styleSheets[k])
		.map(i => i.rules || i.cssRules)
		.map(i => Object.keys(i).map(k=>i[k].selectorText) )
		.reduce((a,c) => a.concat(c), [])
		.filter(i => i)
		.indexOf(selector) !== -1; 
}