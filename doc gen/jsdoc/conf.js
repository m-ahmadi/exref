// defaults
{
	"plugins": [],
	"recurseDepth": 10,
	"source": {
		"includePattern": ".+\\.js(doc|x)?$",
		"excludePattern": "(^|\\/|\\\\)_"
	},
	"sourceType": "module",
	"tags": {
		"allowUnknownTags": true,
		"dictionaries": ["jsdoc","closure"]
	},
	"templates": {
		"cleverLinks": false,
		"monospaceLinks": false
	}
}
/*
No plugins are loaded (plugins).
If recursion is enabled with the -r command-line flag, JSDoc will search for files 10 levels deep (recurseDepth).
Only files ending in .js, .jsdoc, and .jsx will be processed (source.includePattern).
Any file starting with an underscore, or in a directory starting with an underscore, will be ignored (source.excludePattern).
JSDoc supports code that uses ES2015 modules (sourceType).
JSDoc allows you to use unrecognized tags (tags.allowUnknownTags).
Both standard JSDoc tags and Closure Compiler tags are enabled (tags.dictionaries).
Inline {@link} tags are rendered in plain text (templates.cleverLinks, templates.monospaceLinks).
*/

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// config file can be .json or .js

// .json
{
	"plugins": ["plugins/markdown"]
}

// .js
'use strict';

module.exports = {
	plugins: ['plugins/markdown']
};