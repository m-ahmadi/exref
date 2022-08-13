var Progress = require('progress');

var bar = new Progress(':bar :current :total :elapsed :percent :eta :rate :<customToken>', {
	curr:              0,
	total:             0,
	width:             this.total | 0,
	stream:            stderr | inputStream,
	head:              this.complete | '',
	complete:          '=', // █ ▓ ▒ ░
	incomplete:        '-',
	renderThrottle:    16,
	clear:             false,
	callback:          ()=>,
	// https://www.npmjs.com/package/progress#options
});

bar.curr            0
bar.total           0
bar.chars           {complete:'', incomplete:'', head:''}
bar.fmt             ''
bar.renderThrottle  0
bar.tokens          {}
bar.lastDraw        ''
bar.lastRender      0
bar.stream          WriteStream
bar.width           0
bar.complete        ''
bar.clear           boolean
bar.callback        ()=>
bar.interrupt(message='')
bar.render()
bar.terminate()
bar.tick(?len=1, ?tokens={})
bar.update(ratio, ?tokens={})
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

// basic
var bar = new Progress(':bar', {total: 10}); // or
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
var bar = new Progress(':bar :percent :task', {total:100, width:18, complete:'█', incomplete:'░', clear:true});
var tasks = ['fucking','sucking','cumming','rubbing','shitting','farting'];
var timer = setInterval(() => {
	bar.tick({task: tasks[ Math.ceil(Math.random()*5) ] })
	if (bar.complete) clearTimeout(timer);
}, 100);

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