const { writeFileSync, readFileSync } = require('fs');
const downloadCounts = require('npm-download-counts');
const moment = require('moment');
// npm i npm-download-counts moment

// in browser: https://www.npmjs.com/~username
const pkgs = [...document.querySelectorAll('a[href^="/package/"]')].map(i => i.href.replace('https://www.npmjs.com/package/',''));

const start = moment().subtract(1, 'months').toDate();
const end = new Date();
 
(async () => {
	const result = [];
	// const result = JSON.parse( readFileSync('result.json', 'utf8') );
	
	for (pkg of pkgs) {
		const data = await downloadCounts(pkg, start, end); // download takes a while
		const nums = data.map(i=>i.count);
		const avg = nums.reduce((a,c) => a+c) / nums.length;
		result.push( [pkg, +avg.toFixed()] );
	}
	
	const sorted = result.sort((a,b)=> b[1] - a[1]);
	// writeFileSync('result.json', JSON.stringify(sorted));
	const cmdstr = sorted
		.filter(i=>!i[0].startsWith('@'))
			.slice(0,22)
			.map(i=>'start chrome https://www.npmjs.com/package/'+i[0])
			.join('\r\n');
	writeFileSync('result.cmd', cmdstr);
})();