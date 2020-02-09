const { readdirSync, statSync } = require('fs');
const { join } = require('path');

function dirTree(p, tree=[{path: '', children: []}]) {
	let index = tree.findIndex(i => i.path === p);
	if (index === -1) {
		tree[0].path = p;
		index = 0;
	}
	readdirSync(p).forEach((f, i) => {
		const p2 = join(p, f);
		if ( statSync(p2).isDirectory() ) {
			tree[index].children.push({ path: p2, children: [] });
			dirTree(p2, tree[index].children);
		} else {
			tree[index].children.push(p2);
		}
	});
	
	return tree;
}