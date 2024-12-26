const fs = require('fs');
const { Readable } = require('stream');
const { finished, pipeline } = require('stream/promises');

(async () => {
	
	const url = 'https://fastly.picsum.photos/id/442/2560/1440.jpg?hmac=xJYs1YbNRLQYX2rBFAjnPf3LA8F-_94PGpChgDl2WDA';
	
	const resp = await fetch(url);
	const stream = fs.createWriteStream('file1.jpg');
	await finished(Readable.fromWeb(resp.body).pipe(stream));
	
	// alt
	await pipeline(
		(await fetch(url)).body,
		fs.createWriteStream('file2.jpg')
	);
	
})();
