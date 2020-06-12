// npm i worker-loader -D

module.exports = {
	module: {
		rules: [
			{
				test: /\.worker\.js$/,
				use: {
					loader: 'worker-loader',
					options: {
						fallback:   false,
						inline:     false,
						name:       '[hash].worker.js',
						publicPath: null
					}
				}
			}
		]
	}
};

// main.js
import Worker from './file.worker.js';

const worker = new Worker();

worker.postMessage({ a: 1 });
worker.onmessage = function (e) {};
worker.addEventListener('message', function (e) {});