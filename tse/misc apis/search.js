/*
http://www.tsetmc.com/tsev2/data/search.aspx?
	skey=<keyword>
	
	return: text/html
*/
var str = await fetch('http://www.tsetmc.com/tsev2/data/search.aspx?skey=فولاد').then(async r => await r.text());
var row = str.split(';');

var cols = ['Symbol', 'Name', 'InsCode', '???long', '???long', '???long', '???bool', '???bool', '???bool', '???bool', 'CGrValCot'];