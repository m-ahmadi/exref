const gulp = require('gulp');

gulp.task('task1', function (cb) {
	console.log('task1 done');
	cb(); // you have to call the callback otherwise the task will be left running and never finishes
});

// terminal: gulp task1