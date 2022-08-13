const chokidar = require('chokidar'); // npm install chokidar

// basic
chokidar.watch('.').on('all', (event, path) => {
	console.log(event, path);
});

chokidar.watch('.', {ignored: /[\/\\]\./}).on('all', (event, path) => {
	console.log(event, path);
});

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// advanced
const watcher = chokidar.watch('file, dir, glob, or array', {
	ignored: /[\/\\]\./,
	persistent: true
});

const log = console.log.bind(console);
watcher
	.on( 'add',        path  => log('File ',      path, 'has been added') )
	.on( 'addDir',     path  => log('Directory ', path, 'has been added') )   // not working?
	.on( 'unlink',     path  => log('File ',      path, 'has been removed') )
	.on( 'unlinkDir',  path  => log('Directory ', path, 'has been removed') )
	.on( 'change',     path  => log('File ',      path, 'has been changed') )
	.on( 'error',      error => log('Error happened ', error) )
	.on( 'ready',      ()    => log('Initial scan complete. Ready for changes.') )
	.on( 'raw',        (event, path, details) => log('Raw event info:', event, path, details) ) // internal

// 'add', 'addDir' and 'change' events also receive stat() results as 2nd arg when available
watcher.on('change', (path, stats) => {
	if (stats) log('File', path, 'changed size to', stats.size);
});

// watch new files.
watcher.add('new-file');
watcher.add(['new-file-2', 'new-file-3', '**/other-file*']);

// un-watch some files
watcher.unwatch('new-file*');

// only needed if watching is `persistent: true`
watcher.close();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// options ref:
chokidar.watch('file', {
	persistent: true,
	
	ignored:         '*.txt',
	ignoreInitial:   false,
	followSymlinks:  true,
	cwd:             '.',
	disableGlobbing: false,
 
	usePolling:      false,
	interval:        100,
	binaryInterval:  300,
	alwaysStat:      false,
	depth:           99,
	awaitWriteFinish: {
		stabilityThreshold: 2000,
		pollInterval:       100
	},
 
	ignorePermissionErrors: false,
	atomic:                 true // or a custom 'atomicity delay', in milliseconds (default 100)
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@