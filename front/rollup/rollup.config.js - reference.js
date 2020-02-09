export default { // can be an array (for multiple inputs)
  // core input options
  external: string[] | (id: string, parentId: string, isResolved: boolean) => boolean,
  input:    string   | string[]  | { [entryName: string]: string }, // required
  plugins:  Plugin   | (Plugin   | void)[],

  // advanced input options
  cache:                RollupCache | false,
  inlineDynamicImports: false,
	manualChunks:         { [chunkAlias: string]: string[] } | (id: string) => string | void,
  onwarn:               (warning: RollupWarning, defaultHandler: (warning: string | RollupWarning) => void) => void,
  preserveModules:      false,
  strictDeprecations:   false,
	
  output: { // required (can be an array, for multiple outputs)
    // core output options
    dir:     '', // required if more than one chunk is generated
    file:    '',
    format:  'amd'|'cjs'|'esm'|'iife'|'umd'|'system', // required
		globals: { [id: string]: string } | (id: string) => string,
    name:    '', // required for iife/umd bundles
		
    // advanced output options
    assetFileNames:         'assets/[name]-[hash][extname]',
		banner:                 '' | () => '' | Promise<string>,
    chunkFileNames:         '[name]-[hash].js',
    compact:                 false,
    entryFileNames:          '',
    extend:                  false,
		footer:                  '' | () => string | Promise<string>,
    interop:                 true,
    intro:                   '' | () => string | Promise<string>,
    outro:                   '' | () => string | Promise<string>,
		paths:                   { [id: string]: string } | (id: string) => string,
    sourcemap:               false | 'inline',
    sourcemapExcludeSources: false,
    sourcemapFile:           '',
    sourcemapPathTransform:  (sourcePath: string) => string,

    // danger zone
    amd:                   {id?: string, define?: string},
    dynamicImportFunction: 'import',
    esModule:              true,
    exports:               'auto',
    externalLiveBindings:  true,
    freeze:                true,
    indent:                true,
    namespaceToStringTag:  false,
    noConflict:            false,
    preferConst:           false,
    strict:                true
  },

  watch: {
    chokidar:    false | ChokidarOptions,
    clearScreen: true,
    exclude:     '',
    include:     ''
  },
	
	// danger zone
  acorn:              AcornOptions,
  acornInjectPlugins: AcornPluginFunction | AcornPluginFunction[],
  context:            undefined | string,
	moduleContext:      (id: string) => string | { [id: string]: string },
  preserveSymlinks:   false,
  shimMissingExports: false,
  treeshake:          true | {
		annotations?=true:              boolean,
		moduleSideEffects?:             true | "no-external" | string[] | (id: string, external: boolean) => boolean,
		propertyReadSideEffects?=true:  boolean,
		tryCatchDeoptimization?=true:   boolean,
		unknownGlobalSideEffects?=true: boolean
	},

  // experimental
  chunkGroupingSize:          5000,
  experimentalCacheExpiry:    10,
  experimentalOptimizeChunks: false,
  experimentalTopLevelAwait:  false,
  perf:                       false
}