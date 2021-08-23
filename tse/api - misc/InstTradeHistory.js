/*
http://members.tsetmc.com/tsev2/data/InstTradeHistory.aspx?
	i=InsCode   long
	Top=999     int   only last N days. (max 190 if A=0)
	A=0         bool  full history (including days with no trades)
	
	return: text/html
*/
var str = await fetch('http://members.tsetmc.com/tsev2/data/InstTradeHistory.aspx?i=46348559193224090&Top=999999&A=1').then(async r => await r.text());
var rows = str.split(';'); // rows[0] == last day

var cols = ['date', 'high', 'low', 'last', 'close', 'open', 'yesterday', 'value', 'volume', 'count'];

var structs = rows.map(i => {
	var row = i.split('@');
	return cols.reduce((o,k,i) => (o[k] = +row[i], o), {});
});

var obj = cols.reduce((a,k) => (a[k] = [], a), {});
rows.forEach((str, i) => {
	var row = str.split('@');
	row.forEach((cell, i) => {
		obj[ cols[i] ].push( +row[i] )
	});
});
