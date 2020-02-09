var fs = require('fs');

function walk(dir) {
	var results = []
	var list = fs.readdirSync(dir);
	list.forEach(file => {
		file = dir + '/' + file;
		var stat = fs.statSync(file);
		if ( stat && stat.isDirectory() ) {
			results = results.concat( walk(file) );
		} else {
			results.push(file)
		}
	});
	return results;
}