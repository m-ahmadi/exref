//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Synchronous processing of lines:
var LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader('big_file.txt');

lr.on('error', function (err) {
	// 'err' contains error object
});

lr.on('line', function (line) {
	// 'line' contains the current line without the trailing newline character.
});

lr.on('end', function () {
	// All lines are read, file is closed now.
});

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Asynchronous processing of lines:

var LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader('big_file.txt');

lr.on('error', function (err) {
	// 'err' contains error object
});

lr.on('line', function (line) {
	// pause emitting of lines...
	lr.pause();

	// ...do your asynchronous line processing..
	setTimeout(function () {

		// ...and continue emitting lines.
		lr.resume();
	}, 100);
});

lr.on('end', function () {
	// All lines are read, file is closed now.
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@