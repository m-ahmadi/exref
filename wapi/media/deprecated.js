// deprecated
navigator.getUserMedia(constraints, successCallback, errorCallback);

var video document.getElementById("video"); // <video width="400" height="300"></video>
navigator.getUserMedia // webkitGetUserMedia mozGetUserMedia msGetUserMedia

navigator.getUserMedia({
	video: true,
	audtio: true
}, function (stream) {
	video.src = new URL(stream);
}, function (err) {
	console.log(err.code);
});