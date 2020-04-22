const fs = require('fs-extra');
const shell = require('shelljs');
const Handlebars = require('handlebars');
const indent = require('indent.js');
const dirs = p => fs.readdirSync(p).filter( f => fs.statSync(p+'/'+f).isDirectory() );
const files = p => fs.readdirSync(p).filter( f => !fs.statSync(p+'/'+f).isDirectory() );

let INP = './src';
let OUT = './dist';
let ROOT = '';

function compileHtml(ROOT = '', FL = 'main.js', env) {
	dirs(`${INP}/html/`).forEach(i => {
		if (i !== 'LAYOUTS') {
			if (env === 'build') {
				fs.writeFileSync(`${INP}/html/${i}/links/root.htm`,           ROOT);
				fs.writeFileSync(`${INP}/html/${i}/scripts/root.htm`,         ROOT);
				fs.writeFileSync(`${INP}/html/${i}/scripts/app/root.htm`,     ROOT);
				fs.writeFileSync(`${INP}/html/${i}/scripts/app/filename.htm`, FL);
			}
			shell.exec(`htmlbilder ${INP}/html/${i}/ -o ${INP}/html/${i}.hbs`);
		}
	});
	
	const layouts = {};
	dirs(`${INP}/html/LAYOUTS/`).forEach(i => {
		const FILE = `${INP}/html/LAYOUTS/${i}.hbs`;
		shell.exec(`htmlbilder ${INP}/html/LAYOUTS/${i}/ -o ${FILE}`);
		layouts[ i.split('.')[0] ] = fs.readFileSync(FILE, 'utf-8');
		fs.unlinkSync(FILE);
	});
	files(`${INP}/html/`).forEach(i => {
		if ( i.endsWith('.hbs') ) {
			let str = fs.readFileSync(`${INP}/html/${i}`, 'utf-8');
			str = str.replace(/@@@/g, '{{{');
			str = str.replace(/%%%/g, '}}}');
			const template = Handlebars.compile(str);
			fs.writeFileSync( `${OUT}/${i.split('.')[0]}.html`, indent.html(template(layouts), {tabString: '  '}) );
			fs.unlinkSync(`${INP}/html/${i}`);
		}
	});
}

/*	index.html
<!DOCTYPE html>
<html lang="en-US"> <!-- fa en en-US -->
<head>
	<title></title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1.0" />
	<link rel="icon" type="image/x-icon" href="favicon.ico" />
	{{{ links }}}
</head>

<body>
	@@@ header %%%
	
	@@@ footer %%%
{{{ scripts }}}
</body>
</html>
*/