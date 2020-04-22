var myimage = document.getElementById('myimage');
if (myimage.addEventListener) {
	// IE9, Chrome, Safari, Opera
	myimage.addEventListener('mousewheel', MouseWheelHandler, false);
	// Firefox
	myimage.addEventListener('DOMMouseScroll', MouseWheelHandler, false);
} else {
	// IE 6/7/8
	myimage.attachEvent('onmousewheel', MouseWheelHandler);
}

function MouseWheelHandler(e) {
	// cross-browser wheel delta
	var e = window.event || e; // old IE support
	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	myimage.style.width = Math.max(50, Math.min(800, myimage.width + (30 * delta))) + 'px';
	
	console.log(e.wheelData, e.detail);
	return false;
}