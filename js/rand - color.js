'#' + Math.random().toString(16).substr(-6)

'#' + ((1 << 24) * Math.random() | 0).toString(16)

'#' + (Math.random() * 0xFFFFFF << 0).toString(16)

function getRandColor(brightness) {
	// Six levels of brightness from 0 to 5, 0 being the darkest
	var rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
	var mix = [brightness * 51, brightness * 51, brightness * 51]; //51 => 255/5
	var mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]].map(function (x) {
		return Math.round(x / 2.0)
	})
	return 'rgb(' + mixedrgb.join(',') + ')';
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	var i;
	for (i=0; i<6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function get_random_color() {
	function c() {
		var hex = Math.floor(Math.random() * 256).toString(16);
		return ('0' + String(hex)).substr(-2); // pad with zero
	}
	return '#' + c() + c() + c();
}

function get_random_color() {
	// I needed to generate only light colours (for backgrounds), so I went with three letter (#AAA) format:
	var letters = 'ABCDE'.split('');
	var color = '#';
	var i;
	for (i=0; i<3; i++) {
		color += letters[Math.floor(Math.random() * letters.length)];
	}
	return color;
}