fetch('https://file-examples-com.github.io/uploads/2017/10/file_example_JPG_100kB.jpg')
	.then(async r => {
		var img = document.createElement('img');
		img.src = URL.createObjectURL( await r.blob() );
		document.body.append(img);
	})
	.catch(error => {
		console.error('failed request', error);
	});