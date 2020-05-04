const { writeFileSync, readFileSync, unlinkSync, readdirSync, statSync } = require('fs');
const { join, extname, dirname, sep } = require('path');
const chokidar = require('chokidar');
const Handlebars = require('handlebars');
const uglifyjs = require('uglify-js');

const srcdir = 'public/views';

watch('public/views', build, {temps:false});

function build(settings) {
	const { parts, temps, localparts } = {...{parts:true, temps:true, localparts:true}, ...settings};
	const files = getFiles(srcdir);
	const globalPartials = files.filter(i => i.startsWith('_partials'));
	const localPartials = files.filter(i => /^.+_partials/.test(i));
	const templates = files.filter(i => !i.includes('_partials'));
	
	let str = '';
	str += '(function () {\n';
	str += 'var template = Handlebars.template;\n';
	
	if (localparts) {
		str += 'var _localPartials = Handlebars._localPartials = {};\n';
		str += localPartials.reduce((a,c) => `_localPartials['${ c.split('/')[0] }'] = {};\n`, '');
		str += localPartials.reduce((a,c) => {
			const pageName =  c.split('/')[0];
			const name =  c.replace(pageName+'/_partials/', '').replace(extname(c), '');
			const content = readFileSync(join(srcdir, c), 'utf8');
			const spec = Handlebars.precompile(content, {knownHelpersOnly: true});
			return a += `_localPartials['${ pageName }']['${ name }'] = template(${ spec });\n`;
		}, '');
	}
	
	if (parts) {
		str += 'var partials = Handlebars.partials;\n';
		str += globalPartials.reduce((a,c) => {
			const name = c.replace('_partials/', '').replace(extname(c), '');
			const content = readFileSync(join(srcdir, c), 'utf8');
			const spec = Handlebars.precompile(content, {knownHelpersOnly: true});
			return a += `partials['${ name }'] = template(${ spec });\n`;
		}, '');
	}
	
	if (temps) {
		str += 'var templates = Handlebars.templates = {};\n';
		str += templates.reduce((a,c) => {
			const name = c.replace(srcdir+'/', '').replace(extname(c), '');
			const content = readFileSync(join(srcdir, c), 'utf8');
			const spec = Handlebars.precompile(content, {knownHelpersOnly: true});
			return a += `templates['${ name }'] = template(${ spec });\n`;
		}, '');
	}
	str += '})();';
	
	
	// const res = uglifyjs.minify(str);
	// if (res.error) throw res.error;
	// writeFileSync('app/precompiled.min.js', res.code);
	writeFileSync('public/app/precompiled.min.js', str);
	console.log('Precompiled.');
}

function watch(path, fn, fnArg) {
	const cb = () => fn(fnArg);
	cb();
	const watcher = chokidar.watch(path).on('ready', () => {
		watcher
		.on('add', cb)
			.on('addDir', cb)
			.on('unlink', cb)
			.on('unlinkDir', cb)
			.on('change', cb);
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
			// const rootdir = dirname(path).split(sep)[0];
			res.push( path.replace(/\\/g, '/').replace(srcdir, '').replace(/^.?\b/, '') ); // or path
		}
	}
	return res;
}