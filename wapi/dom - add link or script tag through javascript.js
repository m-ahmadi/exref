// from head script
document.writeln('<link rel="stylesheet" type="text/css" href="path/to/file.css" />');
document.writeln('<script src="path/to/file.js"></script>');

// from body script
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'path/to/file.css';
document.head.append(link);

var script = document.createElement('script');
script.src = 'path/to/file.js';
document.head.append(script);

async function addHeadScript() {
	return new Promise((resolve, reject) => {
		const script = document.createElement('script');
		script.async = true;
		script.src = '/path/to/myscript.js';
		script.onload = () => resolve();
		document.head.append(script);
	});
}

// check if resource already exists
if ( [...document.head.children].filter(i => i.tagName === 'SCRIPT').find(i => /myscript/.test(i.src)) )

async function addHeadScript() {
	return new Promise((resolve, reject) => {
		if ( [...document.head.children].filter(i => i.tagName === 'SCRIPT').find(i => /myscript/.test(i.src)) ) {
			resolve();
		} else {
			const script = document.createElement('script');
			script.async = true;
			script.src = '/path/to/myscript.js';
			script.onload = () => resolve();
			document.head.append(script);
		}
	});
}

// eval + force sync (hacky sol for 'raw.githubusercontent.com' mimetype issue)
eval((r=new XMLHttpRequest(), r.open('GET','https://raw.githubusercontent.com/user/repo/branch/script.js',false), r.send(null), r.responseText)); delete r;