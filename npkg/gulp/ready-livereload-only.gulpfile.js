const { task, watch, series, src } = require('gulp');
const livereload = require('gulp-livereload');

const h = './index.html';
const c = './css/**/*.css';
const j = './js/**/*.js';

task('send-html', cb => { src(h).pipe( livereload() ); cb() });
task('send-css',  cb => { src(c).pipe( livereload() ); cb() });
task('send-js',   cb => { src(j).pipe( livereload() ); cb() });
task('live', () => {
	livereload.listen();
	watch(h, series('send-html'));
	watch(c, series('send-css'));
	watch(j, series('send-js'));
});
task('default', series('live'));