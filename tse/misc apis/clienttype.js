/*
http://www.tsetmc.com/tsev2/data/clienttype.aspx?
	i=InsCode
	
	return: text/csv
*/
var str = await fetch('http://www.tsetmc.com/tsev2/data/clienttype.aspx?i=46348559193224090').then(async r => await r.text());
var rows = str.split(';'); // rows[0] == last day

var cols = [
	'date',
	'pbcount', 'lbcount',
	'pscount', 'lscount',
	'pbvol',   'lbvol',
	'psvol',   'lsvol',
	'pbval',   'lbval',
	'psval',   'lsval'
];

var structs = rows.map(i => {
	var row = i.split(',');
	return cols.reduce((o,k,i) => (o[k] = +row[i], o), {});
});

var obj = cols.reduce((a,k) => (a[k] = [], a), {});
rows.forEach((str, i) => {
	var row = str.split(',');
	row.forEach((cell, i) => {
		obj[ cols[i] ].push( +row[i] )
	});
});
