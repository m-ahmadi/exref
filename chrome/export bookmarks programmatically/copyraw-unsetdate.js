const fs = require('fs');
const path = require('path');
const args = process.argv.slice(2);

let srcpath = path.join(process.env.LOCALAPPDATA, '/Google/Chrome/User Data/Default/Bookmarks');
let outpath = 'Bookmarks.edited';

if (args.length === 2) {
	[srcpath, outpath] = args;
} else if (args.length === 1) {
	[outpath] = args;
}

const bookmarks = JSON.parse(fs.readFileSync(srcpath));

unsetDates(bookmarks.roots['bookmark_bar']);

function unsetDates(o={}) {
	o['date_added'] = '0';
	o['date_last_used'] = '0';
	if (o['type'] === 'folder') o['date_modified'] = '0';
	let childs = o.children || [];
	for (let child of childs) {
		unsetDates(child);
	}
}

fs.writeFileSync(outpath, JSON.stringify(bookmarks,null,2));

console.log('Done.');
