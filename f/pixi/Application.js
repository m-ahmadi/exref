var app, width, height, options, noWebGL;

width = window.innerWidth;
height = window.innerHeight;
noWebGL = false;
options = {
	view:                  undefined,
	transparent:           false,
	antialias:             false,
	preserveDrawingBuffer: false,
	resolution:            1
};

var app = new PIXI.Application(width, height, options, noWebGL);

document.body.appendChild(app.view);



app.ticker.add(function () {
    // loop
});