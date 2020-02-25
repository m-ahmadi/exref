var s = function (sketch) {
	var x = 100;
	var y = 100;

	sketch.setup = function () {
		sketch.createCanvas(200, 200);
	};

	sketch.draw = function () {
		sketch.background(0);
		sketch.fill(255);
		sketch.rect(x, y, 50, 50);
	};
};

var myp5 = new p5(s);
