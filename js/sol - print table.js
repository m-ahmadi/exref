function printTable(rows=[[]]) {
	let cols = [];
	
	rows.forEach(row => row.map((col,j) => {
		if (!cols[j]) cols[j] = [];
		cols[j].push(col.toString().length);
	}));
	
	let colsMax = cols.map(col => Math.max(...col));
	
	let s = '';
	
	for (let row of rows) {
		let lastIdx = row.length - 1;
		for (let [colIdx, col] of row.entries()) {
			col = ''+col;
			let colMax = colsMax[colIdx];
			let charLen = col.length;
			let delta = ' '.repeat(colMax - charLen);
			let notLast = colIdx < lastIdx;
			s += col + (notLast ? delta : '') + '\t';
		}
		s = s.slice(0, -1);
		s += '\n'
	}
	
	return s;
}

table = [
	['foo', 'bar', 'baz'],
	['a', 'b', 'c'],
	['aa', 'bb', 'cc'],
	['x', 'y'],
	['z', 'yyyyyy'],
	['ini', 'mini', 'miny', 'moe'],
];

console.log(printTable(table)); /*
foo	bar   	baz
a  	b     	c
aa 	bb    	cc
x  	y
z  	yyyyyy
ini	mini  	miny	moe
*/