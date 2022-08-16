//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* Loading images into the texture cache
	
	Because Pixi renders the image on the GPU with WebGL, the image needs to be in a format that the GPU can process.
	WebGL-ready image is called a texture.
	Pixi uses a texture cache to store and reference all the textures your sprites will need.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// basic

PIXI.loader
	.add('images/cat.png')
	.load( setup );
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// chainable methods

PIXI.loader
	.add('images/cat.png')
	.add('images/dog.png')
	.add('images/tiger.png')
	.load(setup);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// passing an array

PIXI.loader
	.add([
		'images/cat.png',
		'images/dog.png',
		'images/tiger.png'
	])
	.load(setup);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// assigning a name to a loading file

PIXI.loader.add('catImage', 'images/cat.png');

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// where to find the loaded textures

var texture;

texture = PIXI.loader.resources['images/cat.png'].texture; // highly recommended
texture = PIXI.utils.TextureCache['images/dog.png']; // fine, but don't
	
sprite = new PIXI.Sprite(texture);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// atlas
 
 loader
	.add('images/atlas.json')
	.load(setup);
 //-----------------------------------------------
function setup() {
	var texture = PIXI.loader.resources['images/atlas.json'].textures['cat.png'];
	var sprite = new Sprite( texture );
	
	// or:
	
	var textures = PIXI.loader.resources['images/file.json'].textures;
	var sprite = new Sprite( textures['frameId.png'] );
}

// example of the json file:
"blob.png": {
    frame: {x:55, y:2, w:32, h:24},
    rotated: false,
    trimmed: false,
    spriteSourceSize: {x:0, y:0, w:32, h:24},
    sourceSize: {w:32, h:24},
    pivot: {x:0.5, y:0.5}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// monitoring load progress

PIXI.loader
	.add([
		'images/cat.png',
		'images/dog.png',
		'images/tiger.png'
	])
	.on('progress', loadProgressHandler)
	.load(setup);

function loadProgressHandler() {
	console.log('loading'); 
}
function setup() {
	console.log('setup');
}
/*loading
  loading
	loading
	setup */
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// convenience method

var sprite = new PIXI.Sprite.fromImage('images/cat.png');
// creates sprite, texture based on an image url, loads in texture cache, if not already
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// advanced
loader.add(name, url, options, callback)

'name'       // The name of the resource to load. If it's not passed, the url is used.
'url'        // The url for this resource, relative to the baseUrl of the loader.
options      // The options for the load
callback     // The function to call when this specific resource completes loading.

options = {
	crossOrigin : true || false,
	// Is the request cross-origin? The default is to determine automatically.
	loadType    : Resource.LOAD_TYPE.XHR,
	// How should the resource be loaded? (default value is Resource.LOAD_TYPE.XHR)
	xhrType     : XHR_RESPONSE_TYPE.DEFAULT
	// How should the data being loaded be interpreted when using XHR? (default Resource.XHR_RESPONSE_TYPE.DEFAULT)
}

.add('key', 'http://...', function () {})
.add('http://...', function () {})
.add('http://...')