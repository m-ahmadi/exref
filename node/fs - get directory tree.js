const { readdirSync, statSync } = require('fs');
const { join } = require('path');

// [ {path: '', children: [{}, ...]} ]
function dirTree(p, tree=[{path: '', children: []}]) {
	let index = tree.findIndex(i => i.path === p);
	if (index === -1) {
		tree[0].path = p;
		index = 0;
	}
	readdirSync(p).forEach(file => {
		const p2 = join(p, file);
		if ( statSync(p2).isDirectory() ) {
			tree[index].children.push({ path: p2, children: [] });
			dirTree(p2, tree[index].children);
		} else {
			tree[index].children.push(p2);
		}
	});
	
	return tree;
}

// {file:'', dir: {file:'',...}, file:''}
function dirTree2(dir, full, tree={}) {
	readdirSync(dir).forEach(file => {
		const path = join(dir, file);
		const key = full ? path : file;
		if ( statSync(path).isDirectory() ) {
			tree[key] = {};
			dirTree2(path, full, tree[key]);
		} else {
			tree[key] = ''; // or readFileSync(path, 'utf8');
		}
	});
	return tree;
}
dirTree2('./test')
dirTree2('./test', true) // full paths