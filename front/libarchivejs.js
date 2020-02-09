/* includes:
npm install libarchive.js
libarchive.js/main.js
libarchive.js/dist/worker-bundle.js */
import { Archive } from 'libarchive.js/main.js';

Archive.init({
	workerUrl: 'libarchive.js/dist/worker-bundle.js'
});

document.getElementById('file').addEventListener('change', async e => {
	const file = e.currentTarget.files[0];
	const archive = await Archive.open(file);
	
	// extract the whole file
	const obj = await archive.extractFiles();
	console.log(obj);
	
	// extract a single file
	const filesObj = await archive.getFilesObject();
	const extractedFile = await filesObj['.gitignore'].extract();
	console.log(extractedFile);
});

// <input id="file" type="file"></input>