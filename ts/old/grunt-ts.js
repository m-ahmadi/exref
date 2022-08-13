/*
	In order for grunt-ts to work correctly, install typescript locally,
	for some reason the typescript installed with the grunt-ts itslef, is not working.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
module.exports = function(grunt) {
	grunt.initConfig({
		ts: {
			default: {
				src: ["**/*.ts", "!node_modules/**"]
			}
		}
	});
	
	grunt.loadNpmTasks("grunt-ts");
	grunt.registerTask("default", ["ts"]);
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
ts: {
	default: {
		src: ["**/*.ts", "!node_modules/**"],
		// src: ["app/**/*.ts"]
		// src: ["**/*.ts", "**/*.js", "!emit/**", "!node_modules/**"]
		// src: ["references.ts","some/other/path/**/*.ts"]
		out: "dist/myscript.js",
		outDir: "dist",
		reference: "references.ts",
		html: ["templates/**/*.html"],
		vs: 'test/vsproj/testproject.csproj',
		watch: ".",  // will re-run this task if any .ts or .html file is changed.
		options: {
			compile: false,
			additionalFlags: '--autoFixBugs --gruntTs "is awesome!"',
			allowJs: true,
			allowSyntheticDefaultImports: true,
			module: 'umd',
			allowUnreachableCode: true,
			allowUnusedLabels: true,
			baseDir: 'src',
			fast: always
		},
		
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// created by me (works):
ts: {
	default: {
		src: [ "ts/main.ts" ],
		outDir: "js",
		options: {
			module: "CommonJS",
			noImplicitAny: false,
			sourceMap: true,
			removeComments: false,
			outDir: "js"
		}
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
ts: {
	CompileMyLibsOnly: {
		src: 'MyProject/lib/**/*.ts',
		out: 'built/mylibs.js',
		vs: {
			project: 'MyProject/MyProject.csproj',
			ignoreFiles: true,
			config: 'Release'
		}
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@