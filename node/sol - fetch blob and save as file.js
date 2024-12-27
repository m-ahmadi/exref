const fs = require('fs');
const { Readable } = require('stream');
const { finished, pipeline } = require('stream/promises');

(async () => {
	
	var url = 'https://fastly.picsum.photos/id/442/2560/1440.jpg?hmac=xJYs1YbNRLQYX2rBFAjnPf3LA8F-_94PGpChgDl2WDA';
	
	var resp = await fetch(url);
	var stream = Readable.fromWeb(resp.body);
	await fs.promises.writeFile('file1.jpg', stream);
	
	// alt
	var resp = await fetch(url);
	var stream = fs.createWriteStream('file2.jpg');
	await finished(Readable.fromWeb(resp.body).pipe(stream));
	
	// alt
	await pipeline(
		(await fetch(url)).body,
		fs.createWriteStream('file3.jpg')
	);
	
})();
