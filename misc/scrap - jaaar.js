NUMBER_OF_COLUMNS = 6;
IMAGE_WIDTH = 300;
IMAGE_HEIGHT = 200;
BACKGROUND = 'black';
OUTPUT_FILE = './news.html';

let https = require('https');
let fs = require('fs');

(async () => {
	
	let text = await httpsGet('https://www.jaaar.com/kiosk');
	
	if (!text) {
		console.log('Could not connect.');
		return;
	}
	
	// let srcs = [...text.matchAll(/data-full-image="([a-zA-Z0-9:/_.]*)"/g)].map(i=> i[1]);
	let srcs = [...text.matchAll(/data-mobile-image="([a-zA-Z0-9:/_.]*)"/g)].map(i=> i[1]);
	
	let body = srcs.map(src => `<div><img src="${src}" width="${IMAGE_WIDTH}" height="${IMAGE_HEIGHT}" /></div>`).join('\n');
	
	let html = `
<div id="_g" style="
	display: grid;
	grid-template-columns: ${ 'auto '.repeat(NUMBER_OF_COLUMNS).trim() };
	row-gap: .8rem;
	column-gap: .4rem;
	background: ${ BACKGROUND };">

${body}

</div>`;
	
	fs.writeFileSync(OUTPUT_FILE, html);
	
})();


function httpsGet(url) {
	return new Promise((resolve, reject) => {
		https.get(url, res => {
			if (res.statusCode !== 200) resolve('');
			let data = [];
			res.on('data', chunk => data.push(chunk));
			res.on('end', () => resolve(Buffer.concat(data).toString()) );
		}).on('error', () => resolve(''));
	});
}