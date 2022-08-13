const { writeFileSync, readFileSync, readdirSync, statSync } = require('fs');
const { join, extname } = require('path');

function runTemp() {
	const dir = getFiles('./template/');
	let str = 'const _templates = {};\n';
	dir.forEach(path => {
		const key = path.replace('template/', '').replace(extname(path), '');
		// str += "_templates['"+key+"'] = function (c={}) { return `"+ readFileSync(path, 'utf8') + "` };\n";
		str += "_templates['"+key+"'] = (c={}) => `"+ readFileSync(path, 'utf8') + "`;\n";
	});
	writeFileSync('./public/lib/_templates.js', str);
}

function getFiles(dir, res=[]) {
	const files = readdirSync(dir);
	for (let file of files) {
		file = join(dir, file);
		const stats = statSync(file);
		if ( stats.isDirectory() ) {
			getFiles(file, res);
		} else {
			res.push( file.replace(/\\/g, '/') );
		}
	}
	return res;
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const { readFileSync, writeFileSync } = require('fs');
const { extname } = require('path');
const glob = require('glob');

var str = 'const _templates = {};\n';

glob.sync('./template/**/*.htm').forEach(path => {
	var key = path.replace('./template/', '').replace(extname(path), '');
	str += "_templates['"+key+"'] = function (c={}) { return `"+ readFileSync(path, 'utf8') + "` };\n";
});
// writeFileSync( './templates.json', JSON.stringify(templates) );
writeFileSync( './templates.js', str );

// path.replace(/^\.*(\/|\\){1,2}/, '') // todo: fix .\abc issue
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
