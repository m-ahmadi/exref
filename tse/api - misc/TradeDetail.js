/*
http://www.tsetmc.com/tsev2/data/TradeDetail.aspx?
	i=InsCode
	
	return: text/xml
*/

var str = await fetch('http://www.tsetmc.com/tsev2/data/TradeDetail.aspx?i=46348559193224090').then(async r => await r.text());
var rowsXml = new DOMParser().parseFromString(str, mimeType='text/xml').children[0];
var rows = [...rowsXml.children].map(i=> [...i.children].map(j=> j.getInnerHTML() ));
/*
	[
		['1', '09:00:21', '66000', '12200.00']
		['2', '09:00:21', '57164', '12200.00']
		['3', '09:00:21', '50000', '12200.00']
		['4', '09:00:21', '32612', '12200.00']
	]
*/

var cols = ['count', 'time', 'volume', 'price'];