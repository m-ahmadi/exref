var Progress = require('progress');

var bar = new Progress(':bar :current :current :total :elapsed :percent :eta :rate', {
	curr:              0,
	total:             0,
	width:             this.total | 0,
	stream:            stderr | inputStream,
	head:              this.complete | '',
	complete:          '=',
	incomplete:        '-',
	renderThrottle:    16,
	clear:             false,
	callback:          ()=>,
	// https://www.npmjs.com/package/progress#options
});

bar.tick(customTokens={})
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

// basic
var bar = new ProgressBar(':bar', {total: 10}); // or
var bar = new Progress('-> downloading [:bar] :percent :etas', {
	width: 40,
	complete: '=',
	incomplete: ' ',
	renderThrottle: 1,
	total: 100
});
var timer = setInterval(() => {
	bar.tick();
	if (bar.complete) {
		console.log('\ncomplete\n');
		clearInterval(timer);
	}
}, 100);

// download progress
require('https').get('https://file-examples-com.github.io/uploads/2017/10/file_example_JPG_1MB.jpg').on('response', res => {
	var total = parseInt(res.headers['content-length'], 10);
	var bar = new Progress('  downloading [:bar] :rate/bps :percent :etas', {width: 20, total});
	res
		.on('data', chunk => bar.tick(chunk.length))
		.on('end', () => console.log('\n'));
});

// custom tokens
var bar = new Progress(':current: :token1 :token2', {total: 3})
bar.tick({
	'token1': "Hello",
	'token2': "World!\n"
});
bar.tick(2, {
	'token1': "Goodbye",
	'token2': "World!"
});

// interrupt
var bar = new Progress(':bar :current/:total', {total: 10});
var timer = setInterval(() => {
	bar.tick();
	if (bar.complete) {
		clearInterval(timer);
	} else if (bar.curr === 5) {
		bar.interrupt('this message appears above the progress bar\ncurrent progress is ' + bar.curr + '/' + bar.total);
	}
}, 1000);