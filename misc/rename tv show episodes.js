// imdb automatic
r = [];
seasonBtns = [...document.querySelector('.ipc-tabs--inherit').children[1].children].slice(0,-1);
for (let btn of seasonBtns) {
	btn.dispatchEvent(new Event('click',{bubbles:true}));
	await new Promise(r => setTimeout(r, 2000));
	let seasonEpisodes = [...document.querySelectorAll('.sc-1318654d-8.bglHll')].map(i=>i.innerText);
	r.push(seasonEpisodes);
}
showName = document.querySelector('.sc-a885edd8-9.LwvnX').innerHTML;
formatted = r.map(season => season.map(i => {
	let s = i.match(/^S(\d)/)[1];
	let e = i.match(/E(\d+)/)[1];
	if (e<10) e = '0'+e;
	let episodeTitle = i.split('∙')[1].trim();
	return `${showName} - ${s}x${e} - ${episodeTitle}`;
}));
console.log(formatted.map(i=>i.join('\n')).join('\n\n'))

// imdb automatic (old site)
name = document.querySelector('.subpage_title_block__right-column a').innerText;
r = [];
for (let [i] of [...bySeason.options].entries()) {
	bySeason.options[i].selected = true;
	bySeason.dispatchEvent(new Event('change',{bubbles:true}));
	await new Promise(r => setTimeout(r, 4000));
	var season = [...document.querySelectorAll('#episodes_content strong a')].map((v,i) => {
		var n = i+1;
		var sn = n<10 ? '0'+n : n;
		return `${name} - ${document.querySelector('#bySeason').selectedOptions[0].value}x${sn} - ` + v.innerText;
	}).join('\n');
	r.push(season);
}
console.log(r.join('\n\n'))

// imdb manual
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
var { join, extname } = require('path');
var seasons = fs.readFileSync('./episodes.txt', 'utf8').split('\r\n\r\n').map( i => i.split('\r\n').filter(i=>i) );
fs.readdirSync('./')
	.filter(i=>fs.statSync(i).isDirectory())
	.map(i=>[i, +i.match(/\d+$/)[0]]).sort((a,b)=>a[1]-b[1]).map(i=>i[0])
	.forEach((folder,i) => {
		var names = seasons[i];
		var files = fs.readdirSync(folder).filter(i => i !=='sub');
		files.forEach((file, j) => {
			console.log(join(folder,file), '    ===>    ', join(folder, names[j]+extname(file)));
			//fs.renameSync(join(folder,file), join(folder, names[j]+extname(file)))
		});
	});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// genBulkRenamePairs
const { readFileSync, writeFileSync } = require('fs');
const num = n => n < 9 ? '0'+(n+1) : n+1;
writeFileSync('rename-pairs.txt', readFileSync('episodes.txt', 'utf8').split('\r\n\r\n').map((i, idx) => {
	const names = i.split('\r\n');
	
	const oldNames = names.map((v,j)=> `Two_and_a_Half_Men_S${num(idx)}E${num(j)}_720p_WEB-DL_PaHe_30NAMA`);
	
	return oldNames.map((v,j) => `${v}.mkv|${names[j]}.mkv`).join('\n');
}).join(''));
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// rename subs to vids
dir = fs.readdirSync('.').slice(0,-1);
numEpisodes = 13;
vids = dir.slice(0,numEpisodes);
subs = dir.slice(numEpisodes);
subs.forEach((sub,i)=> console.log(sub, '    ===>    ', vids[i].slice(0,-3)+'srt'));
//subs.forEach((sub,i)=> fs.renameSync(sub, vids[i].slice(0,-3)+'srt'));
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@