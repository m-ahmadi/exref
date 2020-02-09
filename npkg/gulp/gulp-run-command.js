// same as gulp-shell but slower
const run = require('gulp-run-command').default;
// import gulp from 'gulp'
// import run from 'gulp-run-command'
 
gulp.task('clean', run('rm -rf build'));

gulp.task('build', ['clean'], run('babel index.js --out-file index.es5.js', {
	env: { NODE_ENV: 'production' }
}))