const { readFileSync, renameSync, readdirSync, statSync } = require('fs');
const { join } = require('path');

const dirs = (p) => readdirSync(p).filter(f => statSync(join(p, f)).isDirectory());
const files = (p) => readdirSync(p).filter(f => statSync(join(p, f)).isFile());


// const seasons = readFileSync('./path/to/episodes.txt', 'utf8').split('\r\n\r\n');
dirs('./').forEach(dir => {
	
	
	files(dir).forEach(file => {
		// fs.renameSync(oldPath, newPath)
		console.log(file);
	});
});


// genBulkRenamePairs
const { readFileSync, writeFileSync } = require('fs');
const num = n => n < 9 ? '0'+(n+1) : n+1;
writeFileSync('rename-pairs.txt', readFileSync('episodes.txt', 'utf8').split('\r\n\r\n').map((i, idx) => {
	const names = i.split('\r\n');
	
	const oldNames = names.map((v,j)=> `Two_and_a_Half_Men_S${num(idx)}E${num(j)}_720p_WEB-DL_PaHe_30NAMA`);
	
	return oldNames.map((v,j) => `${v}.mkv|${names[j]}.mkv`).join('\n');
}).join(''));