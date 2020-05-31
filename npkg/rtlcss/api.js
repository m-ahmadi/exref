const rtlcss = require('rtlcss');

// basic
let result = rtlcss.process('body { direction:ltr; }');
result // 'body { direction:rtl; }'

// postcss options
result = rtlcss.process(css [options, plugins, hooks]);
result // processed css

// use config
result = rtlcss.configure(config).process(css, postcssOptions);
result.css // processed css
result.map // source map

// using postcss directly
const result = postcss()
	.use(rtlcss([options, plugins, hooks]))
	.use(autoprefixer())
	.process(css);

// generating sourcemaps correctly
const css = fs.readFileSync('style.css', 'utf8');
const result = rtlcss.configure({map:true}).process(css, {
	from: 'style.css',
	to:   'style.rtl.css',
	map: { inline: false }
});
fs.writeFileSync('style.rtl.css', result);
fs.writeFileSync('style.rtl.css.map', result.map);

const config = {
	options: {
		autoRename: false,
		autoRenameStrict: false,
		blacklist: {},
		clean: true,
		greedy: false,
		processUrls: false,
		stringMap: []
	},
	plugins: [],
	map: false
};