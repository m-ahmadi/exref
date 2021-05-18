const rollup = require('rollup');
	
const bundle = await rollup.rollup({input: 'src/main.js'});

const dependencies = bundle.watchFiles;

await bundle.write({file: 'public/bundle.js', format: 'iife'});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ref
const inputOptions = {...};  // same as rollup.config.js
const outputOptions = {...}; // ...

const bundle = await rollup.rollup(inputOptions);        // create a bundle
bundle.watchFiles                                        // an array of file names this bundle depends on
await bundle.write(outputOptions);                       // write the bundle to disk
const { output } = await bundle.generate(outputOptions); // or  generate code
for (const chunkOrAsset of output) {
	if (chunkOrAsset.type === 'asset') {
		/* for assets, this contains
		{
			fileName: string,              // the asset file name
			source: string | Buffer        // the asset source
			type: 'asset'                  // signifies that this is an asset
		} */
		console.log('Asset', chunkOrAsset);
	} else {
		/* for chunks, this contains
		{
			code: string,                  // the generated JS code
			dynamicImports: string[],      // external modules imported dynamically by the chunk
			exports: string[],             // exported variable names
			facadeModuleId: string | null, // the id of a module that this chunk corresponds to
			fileName: string,              // the chunk file name
			imports: string[],             // external modules imported statically by the chunk
			isDynamicEntry: boolean,       // is this chunk a dynamic entry point
			isEntry: boolean,              // is this chunk a static entry point
			map: string | null,            // sourcemaps if present
			modules: {                     // information about the modules in this chunk
				[id: string]: {
					renderedExports: string[]; // exported variable names that were included
					removedExports: string[];  // exported variable names that were removed
					renderedLength: number;    // the length of the remaining code in this module
					originalLength: number;    // the original length of the code in this module
				};
			},
			name: string                   // the name of this chunk as used in naming patterns
			type: 'chunk',                 // signifies that this is a chunk
		} */
		console.log('Chunk', chunkOrAsset.modules);
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ref - rollup.watch
const rollup = require('rollup');

const watchOptions = {
  ...inputOptions,
  output: [outputOptions],
  watch: {
    chokidar,
    clearScreen,
    exclude,
    include
  }
};
const watcher = rollup.watch(watchOptions);

watcher.on('event', event => {
  // event.code can be one of:
  //   START        — the watcher is (re)starting
  //   BUNDLE_START — building an individual bundle
  //   BUNDLE_END   — finished building a bundle
  //   END          — finished building all bundles
  //   ERROR        — encountered an error while bundling
  //   FATAL        — encountered an unrecoverable error
});

// stop watching
watcher.close();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@