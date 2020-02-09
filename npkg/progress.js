var ProgressBar = require('progress');
 
/* 
	:bar        the progress bar itself
	:current    current tick number
	:total      total ticks
	:elapsed    time elapsed in seconds
	:percent    percentage
	:eta        estimated completion time in seconds
	:rate       rate of ticks per second
*/

var bar = new ProgressBar(':bar', { total: 10 });
var timer = setInterval(function () {
  bar.tick();
  if (bar.complete) {
    console.log('\ncomplete\n');
    clearInterval(timer);
  }
}, 100);


/*	
	Options
	These are keys in the options object you can pass to the progress bar along with total as seen in the example above.

	curr 				current completed index
	total 				total number of ticks to complete
	width 				the displayed width of the progress bar defaulting to total
	stream 				the output stream defaulting to stderr
	head 				head character defaulting to complete character
	complete 			completion character defaulting to "="
	incomplete			incomplete character defaulting to "-"
	renderThrottle		minimum time between updates in milliseconds defaulting to 16
	clear				option to clear the bar on completion defaulting to false
	callback			optional function to call when the progress bar completes
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
var ProgressBar = require('progress');
var https = require('https');
 
var req = https.request({
  host: 'download.github.com',
  port: 443,
  path: '/visionmedia-node-jscoverage-0d4608a.zip'
});
 
req.on('response', function (res){
  var len = parseInt(res.headers['content-length'], 10);
 
  console.log();
  var bar = new ProgressBar('  downloading [:bar] :rate/bps :percent :etas', {
    complete: '=',
    incomplete: ' ',
    width: 20,
    total: len
  });
 
  res.on('data', function (chunk) {
    bar.tick(chunk.length);
  });
 
  res.on('end', function () {
    console.log('\n');
  });
});
 
req.end();

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Interrupt
var ProgressBar = require('progress');
 
var bar = new ProgressBar(':bar :current/:total', { total: 10 });
var timer = setInterval(function () {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  } else if (bar.curr === 5) {
      bar.interrupt('this message appears above the progress bar\ncurrent progress is ' + bar.curr + '/' + bar.total);
  }
}, 1000);