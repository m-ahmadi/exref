/*
	Since a task might contain asynchronous code you have to signal gulp when your task has finished executing ('async completion').

	In Gulp 3.x you could get away without doing this.
	If you didn't explicitly signal async completion gulp would just assume that your task is synchronous and
	that it is finished as soon as your task function returns.
	
	Gulp 4.x is stricter in this regard.
	You have to explicitly signal task completion.
	You can do that in five ways:
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Call the callback function:
// gulp automatically passes a callback function to your task as its first argument
gulp.task('message', function (done) {
  console.log('HTTP Server Started');
  done();
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Return a Stream:
var print = require('gulp-print');

gulp.task('message', function () {
  return gulp.src('package.json')
		.pipe(print(function() { return 'HTTP Server Started'; }));
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Return a Promise:
gulp.task('message', function () { 
  return new Promise(function (resolve, reject) {
    console.log('HTTP Server Started');
    resolve();
  });
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Return a child process:
var spawn = require('child_process').spawn;

gulp.task('message', function () {
  return spawn('echo', ['HTTP', 'Server', 'Started'], { stdio: 'inherit' });
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Return an RxJS Observable:
var Observable = require('rx').Observable;

gulp.task('message', function () {
  var o = Observable.just('HTTP Server Started');
  o.subscribe(function (str) {
    console.log(str);
  });
  return o;
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@