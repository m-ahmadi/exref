const fs = require('fs');
const { parse } = require('path');
const { outputFileSync } = require('fs-extra');
const showdown  = require('showdown');
// const yaml = require('js-yaml');

let converter = new showdown.Converter();

// let doc = yaml.load(fs.readFileSync('src/tf/_toc.yaml','utf8'));

let all = walk('src');

all.forEach((path, idx) => {
	if (parse(path).ext !== '.md') return;
	
	let md = fs.readFileSync(path, 'utf8');
	let html = converter.makeHtml(md);
	html = html.replace(/.*(<a.+href=".+\.)md"/g , '$1html"');
	
	let pathOut = path.replace(/^src/, 'dist');
	let pathOutHtml = pathOut.slice(0,-2) + 'html';
	outputFileSync(pathOutHtml, html, 'utf8');
	
	process.stdout.write('\r'+(idx+1)+'/'+all.length);
});



function walk(dir) {
	var results = []
	var list = fs.readdirSync(dir);
	list.forEach(file => {
		file = dir + '/' + file;
		var stat = fs.statSync(file);
		if ( stat && stat.isDirectory() ) {
			results = results.concat( walk(file) );
		} else {
			results.push(file)
		}
	});
	return results;
}