/*
http://tsetmc.com/tsev2/chart/data/Financial.aspx?
	i=InsCode
	t=ph       ? (probably action name "price history")
	a=1        bool.  adjusted prices? (0: 49KB  1: 42KB)
	
	return: text/csv
*/
var str = await fetch('http://tsetmc.com/tsev2/chart/data/Financial.aspx?i=46348559193224090&t=ph&a=1').then(async r => await r.text());
var rows = str.split(';'); // rows[rows.length-1] == last day

var cols = ['date', 'high', 'low', 'open', 'last', 'volume', 'close'];
var obj = cols.reduce((a,k) => (a[k] = [], a), {});
rows.forEach((str, i) => {
	var row = str.split(',');
	row.forEach((cell, i) => {
		obj[ cols[i] ].push( row[i] )
	});
});