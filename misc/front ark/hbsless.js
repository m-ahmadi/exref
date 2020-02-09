const { extname } = require('path');
const { readFileSync, writeFileSync } = require('fs');
const glob = require('glob');

var str = 'const _templates = {};\n';

glob.sync('./template/**/*.htm').forEach(path => {
	var key = path.replace('./template/', '').replace(extname(path), '');
	str += "_templates['"+key+"'] = function (c={}) { return `"+ readFileSync(path, 'utf8') + "` };\n";
});
// writeFileSync( './templates.json', JSON.stringify(templates) );
writeFileSync( './templates.js', str );

// path.replace(/^\.*(\/|\\){1,2}/, '') // todo: fix .\abc issue