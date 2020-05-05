const { writeFileSync, readFileSync, unlinkSync, readdirSync, statSync } = require('fs');
const { execSync } = require('child_process');
const { join, extname, delimiter } = require('path');
const chokidar = require('chokidar');
const Handlebars = require('handlebars');

const srcdir = 'views/';

watch('views/', build);

function build() {
	const files = getFiles(srcdir);
	const partials = files.filter(i => i.startsWith('_partials'));
	const templates = files.filter(i => !i.startsWith('_partials'));
	
	let str = '(function () {\n';
	str += 'const template = Handlebars.template;\n';
	str += 'const partials = Handlebars.partials;\n';
	str += 'const templates = Handlebars.templates = {};\n';
	str += partials.reduce((a,c) => {
		const name = c.replace('_partials/', '').replace(extname(c), '');
		const content = readFileSync(join(srcdir, c), 'utf8');
		const spec = Handlebars.precompile(content, {knownHelpersOnly: true});
		return a += `partials['${ name }'] = template(${ spec });\n`;
	}, '');
	
	str += templates.reduce((a,c) => {
		const name = c.replace(srcdir+'/', '').replace(extname(c), '');
		const content = readFileSync(join(srcdir, c), 'utf8');
		const spec = Handlebars.precompile(content, {knownHelpersOnly: true});
		return a += `templates['${ name }'] = template(${ spec });\n`;
	}, '');
	str += '})();';
	
	writeFileSync('app/precompiled.js', str);
	console.log('Precompiled.');
}

function watch(path, fn, init=true) {
	init && fn();
	const watcher = chokidar.watch(path).on('ready', () => {
		watcher
			.on('add', fn)
			.on('addDir', fn)
			.on('unlink', fn)
			.on('unlinkDir', fn)
			.on('change', fn);
		console.log('Watching...', path);
	});
}

function getFiles(dir, res=[]) {
	const files = readdirSync(dir);
	for (const file of files) {
		const path = join(dir, file);
		const stats = statSync(path);
		if ( stats.isDirectory() ) {
			getFiles(path, res);
		} else {
			res.push( path.replace(/\\/g, '/').replace(srcdir, '') );
		}
	}
	return res;
}