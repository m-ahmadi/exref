var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('example', function () {
	return gulp.src('*.js', {
		read: false
	})
	.pipe( shell( ['echo <%= file.path %>'] ) );
});

// shorthand (super slow? not verified but something to watch out for):
// super slower than the callback in one case, but faster in another case.
gulp.task( 'shorthand', shell.task('echo Hello, World!') ); // or:
gulp.task( 'shorthand', shell.task(['echo hello', 'echo world']) );
gulp.task( 'shorthand', shell.task(['echo world']) );

// callback:
// faster than shorthand in one case, but slower in another case.
// suspicion: this way task doesn't even run! (test it in future)
gulp.task('superfast', function (cb) {
	shell.task('echo Hello, World!');
	cb();
});