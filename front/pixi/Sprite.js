PIXI.Sprite(PIXI.Texture texture)
/*
	The Sprite object is the base for all textured objects that are rendered to the screen.
	
*/
sprite = new PIXI.Sprite( texture );
// A sprite can be created directly from an image like this:
var sprite = new PIXI.Sprite.fromImage('assets/image.png');

sprite.alpha	// The opacity of the object.
sprite.anchor	// The anchor sets the origin point of the texture.
/*	Anchor Values:
	0, 0		top left (default)
	0.5, 0.5	center
	1, 1		bottom right
	anchor.set(50, 100) means x starts at 50, and y starts at 100
*/
sprite.width	// width of the sprite, setting this will modify the scale to achieve value set
sprite.height	// height of the sprite, setting this will modify the scale to achieve value set
sprite.x		// position of displayObject on x axis relative to local coordinates of parent. An alias to position.x
sprite.y		// position of displayObject on y axis relative to local coordinates of parent. An alias to position.y


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//	Creation
PIXI.loader
	.add('images/anyImage.png')
	load( setup );

function setup() {
	var texture = PIXI.utils.TextureCache['images/anySpriteImage.png'];
	var sprite = new PIXI.Sprite(texture);
	// or:
	var sprite = new PIXI.Sprite( PIXI.loader.resources['images/anyImage.png'].texture );
}
//-------------------------------------------------------------------------------------------------

var texture = PIXI.Texture.fromImage('images/computer.png');
var sprite = new PIXI.Sprite(texture);

//-------------------------------------------------------------------------------------------------

var sprite = new PIXI.Sprite.fromImage('images/cat.png');

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//	Properties

sprite.interactive = true;
sprite.buttonMode = true;
sprite.anchor.set(0.5, 0.5); // The anchor is really just an offset value for texture display
sprite.scale.set(0.2);
sprite.rotation = 0.5;
sprite.position.x = 200;
sprite.position.y = 20;
sprite.x = 200;   // alias (getter) for position.x
sprite.y = 20;    // alias (getter) for position.y
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//	Events
sprite
	.on('mousedown', dragstart)
	.on('touchstart', dragstart)
	.on('mouseup', dragend)
	.on('mouseupoutside', dragend)
	.on('touchend', dragend)
	.on('touchendoutside', dragend)
	.on('mousemove', dragmove)
	.on('touchmove', dragmove);