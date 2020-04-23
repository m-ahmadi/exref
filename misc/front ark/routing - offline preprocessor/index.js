const { writeFileSync, readFileSync, readdirSync, statSync } = require('fs');
const { join, extname } = require('path');
const chokidar = require('chokidar');

chokidar.watch('./src/**/*').on('all', build);
console.log('Watching...');

function build() {
	const src = './src';
	const htmlFiles = getFiles(src).filter(i => extname(i) === '.htm');
	
	const pages = htmlFiles.filter( i => !/_/.test(i) );
	const templates = htmlFiles.filter( i => /_/.test(i) ).reduce((a,c)=> (a[c] = readFileSync(join(src, c), 'utf8')) && a, {});
	
	pages.forEach(i => {
		let content = readFileSync(join(src, i), 'utf8');
		const matches = content.matchAll(/%.+%/g);
		for (const match of matches) {
			const name = match[0].replace(/%/g, '').trim();
			content = content.replace(new RegExp(match[0], 'g'), templates[`_${name}.htm`]);
		}
		writeFileSync('./public/'+i.replace(/htm/g, 'html'), content);
	});
	
	console.log('Ran build.');
}

function getFiles(dir, res=[]) {
	const files = readdirSync(dir);
	for (const file of files) {
		const path = join(dir, file);
		const stats = statSync(path);
		if ( stats.isDirectory() ) {
			getFiles(path, res);
		} else {
			res.push( file.replace(/\\/g, '/') );
		}
	}
	return res;
}