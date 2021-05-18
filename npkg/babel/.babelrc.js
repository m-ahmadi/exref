/*
	create the .babelrc config in your project root. (no file extension, just .babelrc)
	all babel cli options except the callbacks are allowed.
	.babelrc contents are interpreted as json and used as babel options.

	babel will look for a .babelrc in the current directory of the file being transpiled.
	if one does not exist,
	it will travel up the directory tree until it finds either a .babelrc,
	or a package.json with a 'babel': {} hash within.
	use 'babelrc': false to stop lookup behavior.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// basic example
{
	'presets': [ 'es2015' ],
	'ignore': [
		'foo.js',
		'bar/**/*.js'
	]
}
// by default, babel 6.x does not perform any transformations,
// you need to tell it what transformations to run. (--presets es2015)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// es2015 preset
{
	'presets': ['es2015', {
		'loose': true,    // Enable 'loose' transformations for any plugins in this preset that allow them (defaults to false)
		'modules': false, // 'amd' | 'umd' | 'systemjs' | 'commonjs' | false, defaults to 'commonjs' (case sensitive!)
		'spec': true      // Enable 'spec' transformations for any plugins in this preset that allow them (defaults to false)
	}]
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// use via package.json
{
	'name': 'my-package',
	'version': '1.0.0',
	'babel': {
		// my babel config here
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// env option
// you can use the env option to set specific options when in a certain environment:
{
	'env': {
		'production': {
			'plugins': ['transform-react-constant-elements']
		}
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//	complete reference
{
	// option                 default             description
	'filename':               'unknown',          // Filename for use in errors etc.
	'filenameRelative':       (filename),         // Filename relative to sourceRoot.
	'presets':                [],                 // List of presets (a set of plugins) to load and use.
	'plugins':                [],                 // List of plugins to load and use.
	'parserOpts':             {},                 // An object containing the options to be passed down to the babel parser, babylon
	'generatorOpts':          {},                 // An object containing the options to be passed down to the babel code generator, babel-generator
	'highlightCode':          true,               // ANSI highlight syntax error code frames
	'only':                   null,               // A glob, regex, or mixed array of both, matching paths to only compile. Can also be an array of arrays containing paths to explicitly match. When attempting to compile a non-matching file it’s returned verbatim.
	'ignore':                 null,               // Opposite to the only option. ignore is disregarded if only is specified.
	'auxiliaryCommentBefore': null,               // Attach a comment before all non-user injected code.
	'auxiliaryCommentAfter':  null,               // Attach a comment after all non-user injected code.
	'sourceMaps':             false,              // If truthy, adds a map property to returned output. If set to 'inline', a comment with a sourceMappingURL directive is added to the bottom of the returned code. If set to 'both' then a map property is returned as well as a source map comment appended. This does not emit sourcemap files by itself! To have sourcemaps emitted using the CLI, you must pass it the --source-maps option.
	'inputSourceMap':         null,               // A source map object that the output source map will be based on.
	'sourceMapTarget':        (filenameRelative), // Set file on returned source map.
	'sourceFileName':         (filenameRelative), // Set sources[0] on returned source map.
	'sourceRoot':             (moduleRoot),       // The root from which all sources are relative.
	'moduleRoot':             (sourceRoot),       // Optional prefix for the AMD module formatter that will be prepend to the filename on module definitions.
	'moduleIds':              false,              // If truthy, insert an explicit id for modules. By default, all modules are anonymous. (Not available for common modules)
	'moduleId':               null,               // Specify a custom name for module ids.
	'getModuleId':            null,               // Specify a custom callback to generate a module id with. Called as getModuleId(moduleName). If falsy value is returned then the generated module id is used.
	'resolveModuleSource':    null,               // Resolve a module source ie. import 'SOURCE'; to a custom value. Called as resolveModuleSource(source, filename).
	'code':                   true,               // Enable code generation
	'no-babelrc':             CLI flag,           // Specify whether or not to use .babelrc and .babelignore files. Only available when using the CLI.
	'ast':                    true,               // Include the AST in the returned object
	'compact':                'auto',             // Do not include superfluous whitespace characters and line terminators. When set to 'auto' compact is set to true on input sizes of >500KB.
	'minified':               false,              // Should the output be minified (not printing last semicolons in blocks, printing literal string values instead of escaped ones, stripping () from new when safe)
	'comments':               true,               // Output comments in generated output.
	'shouldPrintComment':     null,               // An optional callback that controls whether a comment should be output or not. Called as shouldPrintComment(commentContents). NOTE: This overrides the comment option when used.
	'env':                    {},                 // This is an object of keys that represent different environments. For example, you may have: { env: { production: { /* specific options */ } } } which will use those options when the enviroment variable BABEL_ENV is set to 'production'. If BABEL_ENV isn’t set then NODE_ENV will be used, if it’s not set then it defaults to 'development'
	'retainLines':            false,              // Retain line numbers. This will lead to wacky code but is handy for scenarios where you can’t use source maps. (NOTE: This will not retain the columns)
	'extends':                null                // A path to an .babelrc file to extend
}