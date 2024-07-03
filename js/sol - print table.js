function printTable(rows=[[]]) {
	let cols = [];
	
	rows.forEach(row => row.map((col,j) => {
		if (!cols[j]) cols[j] = [];
		cols[j].push(col.toString().length);
	}));
	
	let colsMax = cols.map(col => col.sort((a,b)=>b-a)[0] );
	
	let s = '';
	
	for (let row of rows) {
		for (let [colIdx, col] of row.entries()) {
			let colMax = colsMax[colIdx];
			let charLen = col.toString().length;
			let delta = ' '.repeat(colMax-charLen);
			s += col + delta + '\t';
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