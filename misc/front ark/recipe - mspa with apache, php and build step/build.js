const { writeFileSync, readFileSync, existsSync, readdirSync, statSync } = require('fs');
const { join, extname, dirname, basename, relative, sep } = require('path');
const chokidar = require('chokidar');
const sass = require('sass');
const rollup = require('rollup');
const Terser = require('terser');

colors();
const log = console.log;
const args = process.argv.slice(2);

chokidar.watch(['./public/**/*.js', '!(public/(?!_))']).on('ready', console.log);
debugger
x = getFiles('./public', [`^public\\${sep}_`, `!^public\\${sep}__`])
debugger

if ( args.includes('b') ) {
	runJs();
	runSass();
	runTemp()
} else {
	getPages('./public').forEach(i => {
		let page = i.replace(/^public(\\|\/)?/, '') + '/';
		if (page === '/') {
			watch(['./public/**/*.js', '!public/_**/*'], runJs, page);
			watch(['./public/**/*.scss'], runSass, page);
			watch(['./public/**/_tmpl'], runTemp, page);
		} else {
			watch('./public/'+page+'**/*.js', runJs, page);
			watch('./public/'+page+'**/*.scss', runSass, page);
			watch('./public/'+page+'**/_tmpl', runTemp, page);
		}
	});
	watch('./public/**/*.js', runJs);
	watch('./public/**/*.scss', runSass);
	watch('./public/**/_tmpl', runTemp);
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// js
function runJs(page) {
	const entries = getFiles('./public').filter(i => basename(i) === 'main.js');
	
	entries.forEach(entry => {
		const depGraph = getDependencyGraph(entry).map(i => i.replace(/^.+(_js)/,'$1'));
		const modulepreloadLinks = depGraph.map(i => `<link rel="modulepreload" href="${i}" />`).join('\n');
		const moduleScripts      = depGraph.map(i => `<script type="module" src="${i}"></script>`).join('\n');
		const pardir = join(dirname(entry), '../');
		
		writeFileSync(join(pardir, '_app', 'modulepreload-links.htm'), modulepreloadLinks);
		writeFileSync(join(pardir, '_app', 'module-scripts.htm'), moduleScripts);
	});
	log('Ran js.'.green);
}
function getDependencyGraph(entry, files, result=[]) {
	if (entry) files = [entry = join(entry)];
	for (const file of files) {
		const content = readFileSync(file, 'utf8');
		const matchesIterator = content.matchAll(/import.+from\s+'(.+)'/g);
		let matches = [];
		for (const match of matchesIterator) {
			const groups = match.slice(1).map( i => join(dirname(file), i) );
			matches.push(...groups);
		}
		if (matches.length) {
			result.push(...matches);
			getDependencyGraph(undefined, matches, result);
		}
	}
	if (entry) return [entry, ...new Set(result)].map(i => i.replace(/\\/g, '/')).reverse();
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// sass
function runSass(page) {
	const sassEntries = getFiles('./public').filter(i => basename(i) === 'style.scss');
	
	sassEntries.forEach(entry => {
		const pardir = join(dirname(entry), '../');
		const outFile = join(pardir, '_app', 'style.css');
		const result = sass.renderSync({file: entry, outFile});
		writeFileSync(outFile, result.css.toString());
	});
	log('Ran sass.'.green);
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// templates
function runTemp(page) {
	const entries = getDirs('./public').filter(i => basename(i) === '_tmpl')
	
	entries.forEach(entry => {
		let str = 'const _templates = {};\n';
		getFiles(entry).forEach(file => {
			const key = basename(file).replace(extname(file), '');
			str += "_templates['"+key+"'] = function (c={}) { return `"+ readFileSync(file, 'utf8') + "` };\n";
		});
		writeFileSync(join(entry, '../_app', '_templates.js'), str);
	});
	log('Ran templates.'.green);
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// release

async function bundleJs() {
	const entries = getFiles('./public').filter(i => basename(i) === 'main.js');
	for (const entry of entries) {
		const bundle = await rollup.rollup({input: entry});
		const pardir = join(dirname(entry), '../');
		await bundle.write({file: join(pardir, 'bundle.js'), format: 'iife'});
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// util
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
function getFiles(dir, patterns=[], res=[]) {
	const files = readdirSync(dir);
	for (const file of files) {
		const path = join(dir, file);
		const stats = statSync(path);
		if ( stats.isDirectory() ) {
			getFiles(path, patterns, res);
		} else {
			if (patterns.length) {
				// const invalid = patterns.map(([rgx, shouldBe]) => rgx.test(path) === shouldBe).filter(i=>!i).length;
				const invalid = patterns.map(i => i[0] === '!' ? !new RegExp(i.slice(1)).test(path) : new RegExp(i).test(path)).filter(i=>!i).length;
				if (!invalid) res.push(path);
			} else {
				res.push(path);
			}
		}
	}
	return res;
}
function getDirs(dir, res=[]) {
  const items = readdirSync(dir);
  for (const i of items) {
    const path = join(dir, i);
    const stats = statSync(path);
    if ( stats.isDirectory() ) {
      res.push(path);
      getDirs(path, res);
    }
  }
	return res;
}
function getPages(dir, res=[]) {
	if (!res.length) res.push( join(dir) );
	const items = readdirSync(dir);
  for (const i of items) {
    const path = join(dir, i);
    const stats = statSync(path);
    if ( stats.isDirectory() && !/^(_|\.)/.test(i) ) {
      res.push(path);
      getPages(path, res);
    }
  }
	return res;
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// just in case

/* getting depGraph with rollup
const bundle = await rollup.rollup({input: entry});
const depGraph = bundle.watchFiles.map(i => relative('./', i).replace(/(\\|\/)+/g, '/').replace(/^.+(_js)/,'$1')).reverse();
*/

/* concating depGraph (not bundling)
entries.forEach(entry => {
	const deps = getDependencyGraph(entry);
	let str = '';
	str += '(function () {\n';
	str += deps.reduce((a,c) => a += readFileSync(c, 'utf8')+'\n', '');
	str += '})();';
	
	const pardir = join(dirname(entry), '../');
	const outFile = join(pardir, 'bundle.js');
	writeFileSync(outFile, str);
});
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@