const dirTree = require('directory-tree');
// basic:
const tree = dirTree('/some/path');

// filter by an extensions regex:
const filteredTree = dirTree('/some/path', { extensions: /\.txt/ });

// filtering multiple extensions:
const filteredTree = dirTree('/some/path', {
	extensions: /\.(md|js|html|java|py|rb)$/
});

// exclude paths or exensions from the tree:
let filteredTree;
filteredTree = dirTree('/some/path', { exclude: /some_path_to_exclude/ });                   // one path
filteredTree = dirTree('/some/path', { exclude: /(node_modules|css|js|html)/ });             // multiple paths
filteredTree = dirTree('/some/path', { exclude: /.(txt|html)/ });                            // extensions
filteredTree = dirTree('/some/path', { exclude: /(node_modules|.(txt|html)|css|js|html)/ }); // paths & extensions

// specify which additional attributes to be included about each file/directory:
// default attributes (they cannot be excluded):
// [name, size, extension, path] for files and [name, size, path] for directories.
const filteredTree = dirTree('/some/path', {
	attributes:['mode', 'mtime'] // array of fs.stats attributes
});

// normalize windows paths to unix style (/ instead of \):
const tree = dirTree('/some/path', { normalizePath : true });

// a callback function can be executed for each file:
const path = require('path');
const tree = dirTree('./test/test_data', {extensions:/\.txt$/}, (item, path, stats) => {
	// item: {path, name, size, extension}
	console.log(item);
});

// callback function for directories:
const tree = dirTree('./test/test_data', {extensions:/\.txt$/}, null, (item, path, stats) => {
	console.log(item);
});