const { writeFileSync, readFileSync, readdirSync, statSync } = require('fs');
const { join, extname } = require('path');
const indent = require('indent.js');

function runHtml() {
	const rootDir     = './html';
	const outFile     = './public/index.html';
	const tempFile    = 'index.htm';
	const dataFileExt = '.htm';
	const tree = dirTree(rootDir, dataFileExt, tempFile);
	const html = parseAndRender(tree, {tempFile, dataFileExt});
	if (!html) return;
	writeFileSync(outFile, indent.html(html, {tabString: '  '}), 'utf8');
}

function parseAndRender(node, settings) {
	const dirs = getDirs(node);
	if (dirs.length) {
		dirs.forEach(k => {
			if (getDirs(node[k]).length) {
				node[k] = parseAndRender(node[k], settings);
			} else {
				node[k] = render(node[k], settings);
			}
		});
	}
	return render(node, settings);
}

function getDirs(node) {
	return Object.keys(node).filter(k => Object.prototype.toString.call(node[k]) === '[object Object]');
}

function render(node, settings) {
	const files     = Object.keys(node).filter( k => ['function','string'].includes(typeof node[k]) );
	const tempFile  = files.find(k => k === settings.tempFile);
	const dataFiles = files.filter(k => (!extname(k) || extname(k) === settings.dataFileExt) && k !== settings.tempFile);
	let result = '';
	if (tempFile) {
		const context = dataFiles.reduce((a,c) => (a[c.replace(extname(c), '')] = node[c]) && a, {});
		result = node[tempFile](context);
	} else {
		result = dataFiles.reduce((a,c) => a += node[c]+'\n', '');
	}
	return result;
}

function dirTree(dir, dataFileExt, tempFile, tree={}) {
	readdirSync(dir).forEach(file => {
		const path = join(dir, file);
		if ( statSync(path).isDirectory() ) {
			tree[file] = {};
			dirTree(path, dataFileExt, tempFile, tree[file]);
		} else {
			tree[file] = extname(file) === dataFileExt && file !== tempFile
				? readFileSync(path, 'utf8')
				: eval("(c={}) => `"+ readFileSync(path, 'utf8') +"`");
			//: eval("(c={}) => { eval('var {'+Object.keys(c).join()+'} = c;'); return `"+ readFileSync(path, 'utf8') +"`; }");
		}
	});
	return tree;
}