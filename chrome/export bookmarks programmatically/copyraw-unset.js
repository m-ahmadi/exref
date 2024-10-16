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

delete bookmarks['checksum'];

deleteThings(bookmarks.roots['bookmark_bar']);
deleteThings(bookmarks.roots['other']);
deleteThings(bookmarks.roots['synced']);

function deleteThings(o={}) {
	delete o['date_added'];
	delete o['date_last_used'];
	if (o['type'] === 'folder') delete o['date_modified'];
	delete o['guid'];
	delete o['id'];
	delete o['meta_info'];
	let childs = o.children || [];
	for (let child of childs) {
		deleteThings(child);
	}
}

fs.writeFileSync(outpath, JSON.stringify(bookmarks,null,2));

console.log('Done.');
