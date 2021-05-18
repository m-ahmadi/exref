//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
browserify: {
	all: {
		files: {
			'dist/app.js': ['src/main.js']
		},
		options: {
			watch: true // use watchify mechanism
		}
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// grunt-browserify and tsify together and working
all: {
	files: {
		'app.js': ['main.ts']
	},
	options: {
		watch: true,
		plugin: ['tsify']
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
browserify: {
	'public/app.js': ['client/app.js']
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
browserify: {
	dist: {
		files: {
			'build/module.js': ['client/scripts/**/*.js', 'client/scripts/**/*.coffee']
		},
		options: {
			transform: ['coffeeify']
		}
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
browserify: {
	all: {
		files: {
			'public/app.browserify.js': ['app/vendor/lib.js', 'app/main.js']
		},
		options: {
			transform: ['browserify-shim'],
			watch: true
		}
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
options: {
	plugin: [
		[
			'remapify', [
				{
				src: './client/views/**/*.js',  // glob for the files to remap 
				expose: 'views', // this will expose `__dirname + /client/views/home.js` as `views/home.js` 
				cwd: __dirname  // defaults to process.cwd() 
				}
			]
		]
	]
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@