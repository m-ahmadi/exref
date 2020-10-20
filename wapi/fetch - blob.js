fetch('https://file-examples-com.github.io/uploads/2017/10/file_example_JPG_100kB.jpg')
	.then(async r => {
		if (r.ok) {
			myimg.src = URL.createObjectURL( await r.blob() );
		} else {
			console.error('invalid response');
		}
	})
	.catch(error => {
		console.error('failed request', error);
	});