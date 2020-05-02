// compilation

// compile
var fnTemplate = Handlebars.compile(strTemplate, options={
	data:                   false, // disable @data tracking
	compat:                 false,
	knownHelpers:           {},
	knownHelpersOnly:       false,
	noEscape:               false, // dont html escape any content
	strict:                 false,
	assumeObjects:          false,
	preventIndent:          false,
	ignoreStandalone:       false,
	explicitPartialContext: false,
})

// precompile
var templateSpec = Handlebars.precompile(strTemplate, options={
	...compileOptions,
	srcName:  '',
	destName: ''
})
var fnTemplate = Handlebars.template(  eval('(function(){return'+ templateSpec +'})();')  )
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// runtime

// render
var template = Handlebars.templates[name]; // after precompiled executed, otherwise undefined
template(context={}, options={
	data:     {}, // custom @vars in addition to globalls
	helpers:  {}, // custom helpers ...
	partials: {}, // custom partials ...
	allowCallsToHelperMissing: false,
})

// register partial
var partial = Handlebars.compile
	? strTemplate                                                                            // whole library (compiled on demand)
	: Handlebars.template(eval('(()=>{return'+ Handlebars.precompile(strTemplate) +'})();')) // runtime only
Handlebars.registerPartial(name, partial)
Handlebars.partials[name] = partial      // same as above

Handlebars.unregisterPartial(name)

Handlebars.registerHelper(name, fnHelper)
Handlebars.unregisterHelper(name)

var isolatedHandlebarsEnvironment = Handlebars.create();
var myHandlebars = Handlebars.noConflict();

Handlebars.escapeExpression(str)
Handlebars.Utils.escapeExpression(text)
new Handlebars.SafeString(str)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// manual precompile (same as `handlebars partialdir -p -o` and `handlebars tempdir -o`)
const Handlebars = require('handlebars');
const { writeFileSync, readFileSync, readdirSync, statSync } = require('fs');
const { join, extname } = require('path');
const srcdir = 'public/views/';
function build() {
	const files = getFiles(srcdir);
	const partials = files.filter(i => i.startsWith('_partials'));
	const templates = files.filter(i => !i.startsWith('_partials'));
	let str = '(function () {\n';
	str += 'var template = Handlebars.template;\n';
	str += 'var partials = Handlebars.partials;\n';
	str += 'var templates = Handlebars.templates = {};\n';
	str += partials.reduce((a,c) => {
		const name = c.replace('_partials/', '').replace(extname(c), '');
		const content = readFileSync(join(srcdir, c), 'utf8');
		const spec = Handlebars.precompile(content, {knownHelpersOnly: true});
		return a += `partials['${ name }'] = template(${ spec });\n`;
	}, '');
	str += templates.reduce((a,c) => {
		const name = c.replace(srcdir+'/', '').replace(extname(c), '');
		const content = readFileSync(join(srcdir, c), 'utf8');
		const spec = Handlebars.precompile(content, {knownHelpersOnly: true});
		return a += `templates['${ name }'] = template(${ spec });\n`;
	}, '');
	str += '})();';
	writeFileSync('precompiled.js', str);
}
function getFiles(dir, res=[]) {
	const files = readdirSync(dir);
	for (const file of files) {
		const path = join(dir, file);
		const stats = statSync(path);
		if ( stats.isDirectory() ) {
			getFiles(path, res);
		} else {
			res.push( path.replace(/\\/g, '/').replace(srcdir, '') );
		}
	}
	return res;
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@