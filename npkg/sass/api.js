var sass = require('sass');

sass.render({file: 'style.scss'}, function(err, result) {}); // or
var result = sass.renderSync({file: 'style.scss'});
var css = result.css.toString();
fs.writeFileSync('style.css', css); // you have to write it yourself

// sourceMap
var res = sass.renderSync({file: 'style.scss', outFile: 'style.css', sourceMap: true}); // same as:
var res = sass.renderSync({file: 'style.scss', sourceMap: 'style.css.map'});
fs.writeFileSync('style.css', ''+res.css);
fs.writeFileSync('style.css.map', ''+res.map);

// ref
sass.render | renderSync({
	data:              '',
	file:              '',
	functions:         undefined | function(url, prev, done) | function[],
	importer:          ↑...,
	includePaths:      [] | ''[],
	indentType:        ' ',
	indentWidth:       2, // max 10
	indentedSyntax:    false,
	linefeed:          'lf',
	omitSourceMapUrl:  false,
	outFile:           null | '',                 // won't write the file (used for sourcemap ref)
	outputStyle:       'expanded' | 'compressed',
	sourceMapContents: false,
	sourceMapEmbed:    false,
	sourceMapRoot:     undefined | '',
	sourceMap:         undefined | '' | boolean   // if str, then path of .map file
})