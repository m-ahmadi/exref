const { writeFileSync, readFileSync, unlinkSync, readdirSync, statSync } = require('fs');
const { join, extname, dirname, sep } = require('path');
const chokidar = require('chokidar');
const Handlebars = require('handlebars');
const Terser = require('terser');

const srcdir = 'public/views';

watch('public/views', precompile, {temps:false});

function runJs() {
	const depGraph = getDependencyGraph('./public/js/main.js').map(i=>i.replace('public/','')).reverse();
	const temps = '<script src="${c.root}/lib/_templates.js"></script>\n';
	const live = existsSync('.livereload') ? '\n'+ readFileSync('.livereload', 'utf8') : '';
	
	const modulepreloads = depGraph.map(i => '<link rel="modulepreload" href="${c.root}/'+i+'/>').join('\n');
	const app = depGraph.map(i => '<script type="module" src="${c.root}/'+i+'></script>').join('\n');
	
	writeFileSync('./html/link-modulepreload/index.tmpl', modulepreloads);
	writeFileSync('./html/script-app/index.tmpl', temps + app + live);
	log('Ran js.'.green);
}

function getDependencyGraph(entry, files, result=[]) {
	if (entry) files = [entry = join(entry)];
	for (const file of files) {
		const content = readFileSync(file, 'utf8');
		const matches = content.matchAll(/import.+from\s+'(.+)'/g);
		for (const match of matches) {
			const groups = match.slice(1);
			const groupsJoined = groups.map( i => join(parse(file).dir, i) );
			result.push(...groupsJoined);
			if (groups.length) getDependencyGraph(undefined, groupsJoined, result);
		}
	}
	if (entry) return [entry, ...new Set(result)].map(i => i.replace(/\\/g, '/'));
}

function precompile(settings) {
	const { parts, temps, localparts } = {...{parts:true, temps:true, localparts:true}, ...settings};
	const files = getFiles(srcdir);
	const globalPartials = files.filter(i => i.startsWith('_partials'));
	const localPartials = files.filter(i => /^.+_partials/.test(i));
	const templates = files.filter(i => !i.includes('_partials'));
	
	let str = '';
	str += '(function () {\n';
	str += 'const template = Handlebars.template;\n';
	
	if (localparts) {
		str += 'const _localPartials = Handlebars._localPartials = {};\n';
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
		str += 'const partials = Handlebars.partials;\n';
		str += globalPartials.reduce((a,c) => {
			const name = c.replace('_partials/', '').replace(extname(c), '');
			const content = readFileSync(join(srcdir, c), 'utf8');
			const spec = Handlebars.precompile(content, {knownHelpersOnly: true});
			return a += `partials['${ name }'] = template(${ spec });\n`;
		}, '');
	}
	
	if (temps) {
		str += 'const templates = Handlebars.templates = {};\n';
		str += templates.reduce((a,c) => {
			const name = c.replace(srcdir+'/', '').replace(extname(c), '');
			const content = readFileSync(join(srcdir, c), 'utf8');
			const spec = Handlebars.precompile(content, {knownHelpersOnly: true});
			return a += `templates['${ name }'] = template(${ spec });\n`;
		}, '');
	}
	str += '})();';
	
	
	/* const minified = Terser.minify(str);
	if (minified.error) throw minified.error;
	writeFileSync('public/app/precompiled.min.js', minified.code); */
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