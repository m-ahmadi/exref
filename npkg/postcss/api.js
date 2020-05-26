const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const precss = require('precss')
const fs = require('fs');

const css = fs.readFileSync('src/app.css', 'utf8');

postcss([precss, rtlcss, autoprefixer, ...])
	.process(css, { from: 'src/app.css', to: 'dest/app.css' })
	.then(result => {
		result.css // result
		result.map // map
	})