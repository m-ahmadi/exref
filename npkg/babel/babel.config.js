// basic:
module.exports = {
	presets: [
		['@babel/env', {targets: 'last 2 versions'}]
	],
	ignore: ['@*.js'],
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Preset/Plugin Entry
plugins/presets = [
	EntryTarget
	[EntryTarget, EntryOptions]
	[EntryTarget, EntryOptions, '']
	ConfigItem
]

const EntryTarget  = '@babel/env' | require('@babel/env');
const EntryOptions =  {} | false; // undefined is normalized to {}
const ConfigItem   = babel.createConfigItem();

// example:
presets: [
	'presetA',
	['presetA'],
	['presetA', {}],
]
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// reference
module.exports = {
//-----------------------------------primary:
	cwd: process.cwd(),
	caller: { name: 'my-custom-tool', supportsStaticESM: true },
	filename: '',
	filenameRelative: path.relative(this.cwd, this.filename). // (if `filename` was passed)
	code: true,
	ast: false,
//-----------------------------------config loading:
	root: this.cwd,
	rootMode: 'root' | 'upward' | 'upward-optional',
	envName: process.env.BABEL_ENV || process.env.NODE_ENV || 'development',
	configFile: path.resolve(opts.root, 'babel.config.js') || false,
	babelrc: this.filename ? true : false, 
	babelrcRoots: this.root | boolean | MatchPattern | Array<MatchPattern>,
//-----------------------------------plugin & preset:
	plugins: ['', ['', {}], ],
	presets: Array<PresetEntry>,
	passPerPreset: false,
//-----------------------------------config merging:
	extends: '',
	env: { envKey: options },
	overrides: [options, ...], 
	test: '*.js' | ['*.js', '*.ts'],
	include: , // alias for above,
	exclude: '@.js' | ['.jsx', '*.ts'],
	ignore: ['@*.js', '', ...],
	only: ['', ...],
//-----------------------------------source map:
	inputSourceMap: true,
	sourceMaps: false | true | 'inline' | 'both',
	sourceMap: // alias for above
	sourceFileName: path.basename(this.filenameRelative),
	sourceRoot: '',
//-----------------------------------misc:
	sourceType: 'module' | 'script' | 'unambiguous',
	highlightCode: true,
	wrapPluginVisitorMethod: (key='', nodeType='', fn) => function () {},
	parserOpts: {},
	generatorOpts: {},
//-----------------------------------code generator:
	retainLines: false,
	compact: 'auto' | false,
	minified: false,
	auxiliaryCommentBefore: '',
	auxiliaryCommentAfter: '',
	comments: true,
	shouldPrintComment: this.minified ? () => this.comments : val => opts.comments || /@license|@preserve/.test(val),
//-----------------------------------module:
	moduleIds: !!this.moduleId,
	moduleId
	getModuleId: name => '',
	moduleRoot: ''
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@