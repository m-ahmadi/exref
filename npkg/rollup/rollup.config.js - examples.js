// rollup.config.js
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// amd:
export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'amd'
  }
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// umd:
export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
		format: 'umd',
		name: 'myBundle',
		sourcemap: true
  }
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// building multiple bundles:
export default [{
  input: 'main-a.js',
  output: {
    file: 'bundle-a.js',
    format: 'cjs'
  }
}, {
  input: 'main-b.js',
  output: [
    { file: 'bundle-b1.js', format: 'cjs' },
    { file: 'bundle-b2.js', format: 'esm' }
  ]
}]
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// write a plugin:
const myPlugin = {
	name: 'myPlugin',
	generateBundle(options, bundle) {
		console.log(bundle); /* {
			'main.js': {
				code: '',
				fileName: 'main.js',
				name: 'main',
				modules: {
					'D:\xampp\htdocs\rollup-t\src\m1.js': { originalLength: 81, ...},
					'D:\xampp\htdocs\rollup-t\src\m2.js': { originalLength: 81, ...},
					...
				},
				isEntry: true,
				isDynamicEntry: false,
				...
			}
		} */
	}
};
export default {
	input: 'src/main.js',
  output: {
    file: 'bundle.js',
		format: 'esm'
	},
  plugins: [myPlugin]
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// manualChunks
export default {
	input: 'src/main.js',
  output: {
    file: 'bundle.js',
		format: 'esm'
	},
	manualChunks(id) {
		console.log(id); /*
			D:\xampp\htdocs\rollup-t\src\main.js
			D:\xampp\htdocs\rollup-t\src\m1.js
			D:\xampp\htdocs\rollup-t\src\m2.js
		*/
		if ( id.includes('node_modules') ) {
			// const dirs = id.split(path.sep);
      // return dirs[dirs.lastIndexOf('node_modules') + 1];
			return 'vendor';
		}
	}
	// or
	manualChunks: {
		lodash: ['lodash']
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@