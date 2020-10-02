const babelCore = require('@babel/core');

const result = babelCore.transform('src code', {
	plugins: ['transform-commonjs-es2015-modules']
});

result.code // 'transformed code'