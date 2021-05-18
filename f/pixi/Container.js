var container = new PIXI.Container();

container.addChild();

stage.addChild( container );

/*
	You can't make containers interactive,
	So if you do this:
*/
container.interactive = true;
container.buttonMode = true;
/*
	It doesn't do anything.
	Solution to make a container interactive:
	(eg: mousedon will fire on empty spaces of the container)
	You can't do this to stage, because stage is in the game loop,
	and it's constantly being updated.
*/
container.hitArea = new PIXI.Rectangle( 0, 0, width, height );
container.hitArea = new PIXI.Rectangle( 0, 0, renderer.width / renderer.resolution, renderer.height / renderer.resolution );
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*													Useful Information
	
	There are events when an object is added/removed to/from containers.
	The child will emit an 'added'   event when added   to   a container, and
	the child will emit a  'removed' event when removed from a container.

	Rendering a different container doesn't add/remove any children so no events are emitted.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*													Sprite-Based Stage (not completely tested)
	We can treat a sprite as a container, and make it act as a container.
	One benefit of doing this is, now our container have an anchor. (which is useful and easier to work with than pivot)
	
	First create an empty Sprite with no textures/frames,
	The constructor of sprite requires a texture,
	We can generate a transparent texture using the PIXI.Graphics,
	don't use the width and height of the spriteContainer for any calculations, using the boundingbox if necessary.
*/
var graphic = new PIXI.Graphics();
graphic.beginFill( 0xFFFFFF, 0 );
graphic.drawRect( 0, 0, 1, 1 );
graphic.endFill();

var txtr = renderer.generateTexture(graphic);
var spriteContainer = new PIXI.Sprite( txtr );
spriteContainer.anchor.set(0.5, 0.5);
/*
	Don't set width height, as the bounding box and size is really going to take into account the children.
*/
//spriteContainer.width = width;
//spriteContainer.height = height;
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@