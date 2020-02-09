var promise = navigator.mediaDevices.getUserMedia(constraints);

var video = document.getElementById('video'); // <video width="400" height="300"></video>

var constraints = {
	video: true,
	audio: true
};
navigator.mediaDevices.getUserMedia(constraints)
	.then(function (stream) {
		
	})
	.catch(function (err) {
		// err.code
	});