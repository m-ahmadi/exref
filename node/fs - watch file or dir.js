fs.watchFile(
	filename='path|url'|bfr,
	?options={bigint:false, persistent:true, interval:5007},
	listener=(current=fs.Stats, prev=fs.Stats)=>
) => fs.StatWatcher

fs.watch(
	filename='path|url'|bfr,
	?options='utf8'|{persistent:true, recursive:false, encoding:'utf8'},
	listener=(eventType='rename|change',filename=''|bfr)=>
) => fs.FSWatcher

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// example
const fs = require('fs');
const path = require('path');

getFiles('./').forEach(i => {
	fs.watchFile(i, {interval: 100}, () => {
		console.log('file changed:', i);
	});
});

function getFiles(dir, res=[]) {
	const files = fs.readdirSync(dir);
	for (const file of files) {
		const path = path.join(dir, file);
		const stats = fs.statSync(path);
		if ( stats.isDirectory() ) {
			getFiles(path, res);
		} else {
			res.push( file.replace(/\\/g, '/') ); // or path
		}
	}
	return res;
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@