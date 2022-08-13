//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// basic stuff
var renderer;

renderer = PIXI.autoDetectRenderer(256, 256);
renderer = PIXI.autoDetectRenderer(256, 256, { antialias: false });
renderer = new PIXI.CanvasRenderer(256, 256);
renderer = new PIXI.WebGLRenderer(256, 256);

renderer.view.style.border = '1px dashed black';
renderer.view.style.position = 'absolute';
renderer.view.style.display = 'block';
renderer.backgroundColor = 0x061639;
renderer.autoResize = true;
renderer.resize (width, height);

document.body.appendChild(renderer.view);
var stage = new PIXI.Container();
function animate() {
	requestAnimationFrame(animate);
	renderer.render(stage);
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* autoDetectRenderer

	This helper function will automatically detect which renderer you should be using.
	WebGL is the preferred renderer as it is a lot faster.
	If webGL is not supported by the browser then this function will return a canvas renderer
*/

var renderer = PIXI.autoDetectRenderer(
	width,
	height,
	{
		view: HTMLCanvasElement,       // optional
		transparent: false,            // optional
		antialias: false,              // optional
		preserveDrawingBuffer: false,  // optional
		resolution: false, // 1        // optional
		backgroundColor: 0x1099bb,
	},
	noWebGL: false,                    // optional
);

// Returns Type WebGLRenderer if available, otherwise CanvasRenderer