var gulp = require('gulp');
var less = require('gulp-less');
var livereload = require('gulp-livereload');

gulp.task('less', function () {
	gulp.src('less/*.less')
	.pipe( less() )
	.pipe( gulp.dest('css') )
	.pipe( livereload() );
});

gulp.task('watch', function () {
	livereload.listen();
	gulp.watch('less/*.less', gulp.series('less'));
});

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
gulp.task('html', function (cb) {
	gulp.src('./*.html')
		.pipe( livereload() );
	cb();
});

gulp.task('watch', function () {
	livereload.listen();
	gulp.watch('sass/**/*.scss', gulp.series('sass'));
	gulp.watch('images/src/**/*', gulp.series('image'));
	gulp.watch('./*.html', gulp.series('html'));
});