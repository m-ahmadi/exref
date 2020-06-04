const { readFileSync } = require('fs');
const dirTree = require('directory-tree');

const tree = dirTree('./components', { exclude: /#/ });

var content = get(tree.children);
console.log(content);


function get(nodes, res={}) {
	for (const node of nodes) {
		if (node.type === 'directory') {
			res[node.name] = {};
			get(node.children, res[node.name])
		} else if (node.type === 'file') {
			res[node.name.slice(0,-4)] = readFileSync(node.path, 'utf8');
		}
	}
	return res;
}