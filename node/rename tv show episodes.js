// imdb query
[...document.querySelectorAll('#episodes_content strong a')].map((v,i) => {
	var n = i+1;
	var sn = n<10 ? '0'+n : n;
	// return `Reba - 1x${sn} - ` + v.innerText;
	return `Reba - ${document.querySelector('#bySeason').selectedOptions[0].value}x${sn} - ` + v.innerText;
}).join('\n');

/* episodes.txt
Silicon Valley - 1x01 - Minimum Viable Product
Silicon Valley - 1x02 - The Cap Table
@
Silicon Valley - 2x01 - Sand Hill Shuffle
Silicon Valley - 2x02 - Runaway Devaluation
@
...
@
*/

// ren.js
var fs = require('fs');
var { join } = require('path');
var seasons = fs.readFileSync('./episodes.txt', 'utf8').split('\r\n\r\n').map( i => i.split('\r\n').filter(i=>i) );
fs.readdirSync('./').filter(i=>fs.statSync(i).isDirectory()).forEach((folder,i) => {
	var names = seasons[i];
	var files = fs.readdirSync(folder).filter(i => i !=='sub');
	files.forEach((file, j) => {
		// console.log(join(folder,file), ' ===> ', join(folder, names[j]+'.mkv'));
		fs.renameSync(join(folder,file), join(folder, names[j]+'.mkv'))
	});
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// genBulkRenamePairs
const { readFileSync, writeFileSync } = require('fs');
const num = n => n < 9 ? '0'+(n+1) : n+1;
writeFileSync('rename-pairs.txt', readFileSync('episodes.txt', 'utf8').split('\r\n\r\n').map((i, idx) => {
	const names = i.split('\r\n');
	
	const oldNames = names.map((v,j)=> `Two_and_a_Half_Men_S${num(idx)}E${num(j)}_720p_WEB-DL_PaHe_30NAMA`);
	
	return oldNames.map((v,j) => `${v}.mkv|${names[j]}.mkv`).join('\n');
}).join(''));
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@