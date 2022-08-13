const fetch = require('node-fetch'); // npm i node-fetch

// https://github.com/node-fetch/node-fetch#difference-from-client-side-fetch

fetch('', ?init={
	...browserOptions,
	
	follow:  20,
	timeout:  0,
	compress: true,
	size:     0,
	agent:    null | http.Agent,
})

// node-fetch-only
res.body.pipe()
res.buffer()

fetch('https://file-examples-com.github.io/uploads/2017/10/file_example_JPG_1MB.jpg').then(res => {
	const writeStream = fs.createWriteStream('file.png');
	res.body.pipe(writeStream);
});

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// download progress
fetch('https://file-examples-com.github.io/uploads/2017/10/file_example_JPG_1MB.jpg').then(res => {
	const total = +res.headers.get('content-length');
	const bar = new Progress('[:bar] :percent', {total, width:40, renderThrottle:1});
	const writeStream = fs.createWriteStream('file.jpg');
	res.body.on('data', chunk => bar.tick(chunk.length));
	res.body.pipe(writeStream);
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@