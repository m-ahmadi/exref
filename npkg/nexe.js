const nexe = require('nexe')

// https://github.com/nexe/nexe#options-object
nexe.compile(options={
	input:         '',
	output:        '',
	target:        '' | {},
	bundle:        true | '',
	name:          basename(input) | '',
	cwd:           process.cwd() | '',
	mangle:        true,
	build:         false,
	remote:        null | '',
	asset:         '', // relative to cwd
	python:        null,
	flags:         ['',..],
	configure:     ['',..],
	make:          ['',..],
	vcBuild:       ['nosign','release'] | ['',..],
	snapshot:      null | '',
	resources:     ['',..],
	temp:          '~/.nexe' | '',
	ico:           '', // win only
	rc:            {},
	clean:         boolean,
	enableNodeCli: false,
	fakeArgv:      boolean,
	ghToken:       process.env.GITHUB_TOKEN | '',
	sourceUrl:     '',
	loglevel:      'info|silent|verbose',
	patches:       [NexePatch,..],
	plugins:       [NexePatch,..],
})

NexePatch: (compiler=NexeCompiler, next=()=>Promise<void>) => Promise<void>

NexeCompiler.setFileContentsAsync(filename: string, contents: string): Promise<void>
NexeCompiler.replaceInFileAsync(filename: string, ...replaceArgs): Promise<void>
NexeCompiler.readFileAsync(filename: string): Promise<NexeFile>
NexeCompiler.addResource(filename: string, contents: Buffer): Promise<void>
NexeCompiler.files: NexeFile[]

NexeFile: {contents:'', absPath:''. filename:''}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// example

nexe.compile({
	input: './my-app.js',
	build: true, //required to use patches
	patches: [
		async (compiler, next) => {
			await compiler.setFileContentsAsync(
				'lib/new-native-module.js',
				'module.exports = 42'
			)
			return next()
		}
	]
}).then(() => {
	console.log('success')
})