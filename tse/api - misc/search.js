/*
http://www.tsetmc.com/tsev2/data/search.aspx?
	skey=<keyword>
	
	return: text/html
*/
var str = await (await fetch('http://www.tsetmc.com/tsev2/data/search.aspx?skey=فولاد')).text();
var row = str.split(';');

var cols = ['Symbol', 'Name', 'InsCode', '???long', '???long', '???long', 'Flow', '???FlowOld', '???int', '???int', 'CGrValCot'];
