const webpack = require('webpack');
const path = require('path');
const log = console.log;

class MyPlugin {
	apply(compiler) {
		// change options
		compiler.hooks.beforeRun.tap('MyPlugin', compiler => {
			const opts = compiler.options;
			compiler.options = { ...opts, output:{...opts.output, filename:'foo.js'} };
		});
		
		compiler.hooks.run.tap('MyPlugin', compiler => {
			console.log('The webpack build process is starting!!!');
		});
		
		// ref:
		const n = 'MyPlugin';
		compiler.hooks.beforeRun.tap    (n, compiler                         => log('beforeRun'));
		compiler.hooks.run.tap          (n, compiler                         => log('run'));
		compiler.hooks.beforeCompile.tap(n, compilationParams                => log('beforeCompile'));
		compiler.hooks.compile.tap      (n, compilationParams                => log('compile'));
		compiler.hooks.compilation.tap  (n, (compilation, compilationParams) => log('compilation'));
		compiler.hooks.make.tap         (n, compilation                      => log('make'));
		compiler.hooks.afterCompile.tap (n, compilation                      => log('afterCompile'));
		compiler.hooks.assetEmitted.tap (n, (file, info)                     => log('assetEmitted'));
		compiler.hooks.emit.tap         (n, compilation                      => log('emit'));
		compiler.hooks.afterEmit.tap    (n, compilation                      => log('afterEmit'));
		compiler.hooks.done.tap         (n, stats                            => log('done'));
		compiler.hooks.failed.tap       (n, error                            => log('failed'));
	}
}

module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader'
			}
		]
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new MyPlugin(),
	]
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// or using node api
const webpack = require('webpack');
const configuration = require('./webpack.config.js');

const compiler = webpack(configuration); // starts compilation process

new webpack.ProgressPlugin().apply(compiler);
compiler.run(function (err, stats) {});