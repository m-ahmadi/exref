// incomplete

const http = require('http');
const https = require('https');

function httpsGet(url) {
	return new Promise((resolve, reject) => {
		https.get(url, res => {
			if (res.statusCode !== 200) reject(res.statusCode);
			const data = [];
			res.on('data', chunk => data.push(chunk));
			res.on('end', () => resolve(Buffer.concat(data).toString()) );
		}).on('error', reject);
	});
}

(async () => {
	try {
		const data = await httpsGet('https://file-examples-com.github.io/uploads/2017/10/file_example_JPG_2500kB.jpg');
		console.log(data);
	} catch (error) {
		console.error(error);
	}
})();