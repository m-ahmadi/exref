const { task, watch, series, src } = require('gulp');
const livereload = require('gulp-livereload');
const shell = require('gulp-shell');

const RUN_COMMAND_ON_CHANGES_PATH = './src/**/*';
const LIVERELOAD_ON_CHANGES_PATH = './public/**/*';

// watch and run
task('run-command', shell.task('echo Hello World!'));

task('watch', () => {
	watch( RUN_COMMAND_ON_CHANGES_PATH, {ignoreInitial: false}, series('run-command') );
});

// livereload
task('send-live', cb => {
	src(LIVERELOAD_ON_CHANGES_PATH).pipe( livereload() );
	cb();
});

task('live', () => {
	livereload.listen();
	watch( LIVERELOAD_ON_CHANGES_PATH, series('send-live') );
});

task( 'default', series('live') );