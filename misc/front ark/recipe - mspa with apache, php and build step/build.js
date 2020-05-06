const { writeFileSync, readFileSync, existsSync, readdirSync, statSync } = require('fs');
const { join, parse, extname, dirname, basename, relative, sep } = require('path');
const chokidar = require('chokidar');
const sass = require('sass');
const log = console.log;
colors();

watch('./public/**/*.js', runJs);
watch('./public/**/*.scss', runSass);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// scss
function runSass() {
	getFiles('./public')
		.filter(i => basename(i) === 'style.scss')
		.forEach(entry => {
			const pardir = join(dirname(entry), '../');
			const outFile = join(pardir, 'style.css');
			const result = sass.renderSync({file: entry, outFile});
			writeFileSync(outFile, result.css.toString());
		});
	log('Ran sass.'.greenB);
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// js
function runJs() {
	const files = getFiles('./public');
	files.filter(i => basename(i) === 'main.js').forEach(writeDependencies);
}
function writeDependencies(entry) {
	const depGraph = getDependencyGraph(entry).map(i=>i.replace(/^.+(_app)/,'$1'));
	const modulepreloadLinks = depGraph.map(i => `<link rel="modulepreload" href="${i}" />`).join('\n');
	const moduleScripts      = depGraph.map(i => `<script type="module" src="${i}"></script>`).join('\n');
	const pardir = join(dirname(entry), '../');
	
	writeFileSync(join(pardir, 'modulepreload-links.htm'), modulepreloadLinks);
	writeFileSync(join(pardir, 'module-scripts.htm'), moduleScripts);
	log('Ran js.'.greenB);
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
	if (entry) return [entry, ...new Set(result)].map(i => i.replace(/\\/g, '/')).reverse();
}
function getFiles(dir, res=[]) {
	const files = readdirSync(dir);
	for (const file of files) {
		const path = join(dir, file);
		const stats = statSync(path);
		if ( stats.isDirectory() ) {
			getFiles(path, res);
		} else {
			res.push(path);
		}
	}
	return res;
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// util
function watch(path, fn, init=true) {
	init && fn();
	const watcher = chokidar.watch(path).on('ready', () => {
		watcher
			.on('add', fn)
			.on('addDir', fn)
			.on('unlink', fn)
			.on('unlinkDir', fn)
			.on('change', fn);
		log('Watching...'.bMagenta, path.whiteB);
	});
}
function colors() {
	[
		['green',    32],
		['greenB',   92],
		['redB',     91],
		['yellowB',  93],
		['bMagenta', 95],
		['whiteB',   97],
	].forEach(([k, n]) => {
		String.prototype.__defineGetter__(k, function () {
			return `[${n}m${this}[0m`;
		});
	});
}