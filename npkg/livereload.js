const livereload = require('livereload');

const server = livereload.createServer();
server.watch(__dirname + '/public');
server.watch([__dirname + '/js', __dirname + '/css']);

// or:

const { join } = require('path');
const server = livereload.createServer();
server.watch(
	['/public', '/js', '/css'].map( i => join(__dirname, i) )
);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ref
const server = livereload.createServer({
	https:        http.createServer | {},
	port:         35279,
	exts:         ['html', 'css', 'js', 'png', 'gif', 'jpg', 'php', 'php5', 'py', 'rb', 'erb', 'coffee'],
	applyCSSLive: true, // reload css   files in background and don't refresh the page
	applyImgLive: true, // reload image files (jpg,jpeg,png,gif) in background and don't refresh the page
	exclusions:   ['.git/', './svn', './hg'],
	originalPath: '',
	overrideURL:  '',
	usePolling:   false,
	delay:        0,
	noListen:     false,
}, () => console.log('server ready for accepting connections'));