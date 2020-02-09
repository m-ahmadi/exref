const gulp = require('gulp');

gulp.task('task1', function (cb) {
	console.log('task1 done');
	cb();
});

gulp.task('task12', function (cb) {
	console.log('task2 done');
	cb();
});

// a task that runs other tasks:
gulp.task( 'task3', gulp.series(['task1', 'task2']) );

// default task: (running gulp without any cli aguments)
gulp.task( 'default', gulp.series('task3') );