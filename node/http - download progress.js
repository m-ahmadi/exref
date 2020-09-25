var http = require('http');
var zlib = require('zlib');
var cliProgress = require('cli-progress');

// fail
var req = http.get('http://jsonplaceholder.typicode.com/posts', res => {
	res.setEncoding('utf8');
	
	let len = +res.headers['content-length'];
	
	const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
	bar1.start(len, 0);	
	
	res.on('data', function (chunk) {
		var compressed = zlib.gzipSync(chunk).toString();
		len += compressed.length; // len += chunk.length;
		bar1.update(len);
	});
	
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// axios
const fs = require('fs')  
const path = require('path')  
const axios = require('axios')  
const Progress = require('progress')

async function downloadImage () {  
	const url = 'https://unsplash.com/photos/AaEQmoufHLk/download?force=true'
	
	console.log('Connecting …')
	const { data, headers } = await axios({
		url,
		method: 'GET',
		responseType: 'stream'
	})
	const totalLength = headers['content-length']
	
	console.log('Starting download')
	const progress = new Progress('-> downloading [:bar] :percent :etas', {
		width: 40,
		complete: '=',
		incomplete: ' ',
		renderThrottle: 1,
		total: parseInt(totalLength)
	})
	
	const writer = fs.createWriteStream(
		path.resolve(__dirname, 'images', 'code.jpg')
	)
	
	data.on('data', (chunk) => progress.tick(chunk.length))
	data.pipe(writer)
}

downloadImage()
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@