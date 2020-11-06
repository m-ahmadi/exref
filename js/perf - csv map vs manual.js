var data = [...Array(2e4)].map(() => [...Array(10).keys()]);


console.time('map');
var csv = data.map(i=>i.join(',')).join('\n');
console.timeEnd('map'); // 12 ms


console.time('manual-for-of');
var csv = '';
for (let row of data) {
	for (let cell of row) csv += cell + ',';
	csv = csv.slice(0,-1);
	csv += '\n';
}
csv = csv.slice(0,-1);
console.timeEnd('manual-for-of'); // 2000 ms


console.time('manual-for');
var csv = '';
for (let i=0, n=data.length; i<n; i++) {
	const row = data[i];
	for (let j=0, n=row.length; j<n; j++) csv += row[j] + ',';
	csv = csv.slice(0,-1);
	csv += '\n';
}
csv = csv.slice(0,-1);
console.timeEnd('manual-for'); // 2000 ms


// manual 160x slower =))