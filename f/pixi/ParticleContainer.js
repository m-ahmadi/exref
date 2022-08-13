/*
	SpriteBatch does not exist any more, please use the new ParticleContainer instead.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*													Using a ParticleContainer
	PIXI.ParticleContainer
	Pixi has an alternative, high-performance way to group sprites called a ParticleContainer.
	Any sprites inside a ParticleContainer will render two to five times faster than they would if they were in a regular Container.
	
	Sprites inside the ParticleContainer can only use a few basic properties:
		x
		y
		width
		height
		scale
		alpha
		pivot
		visible
	
	The sprites that a ParticleContainer contains can't have nested children of their own.
	A ParticleContainer also can't use Pixi's advanced visual effects, such as filters, masks, and blend modes.
	
	When you create a ParticleContainer, there are two optional arguments you ca provide:
		the maximum number of sprites the container can hold
		an options object
		
	The default value for size is 15,000
	The options argument is an object with five Boolean properties that you can set:
	scale, position, rotation, alpha, and uvs.
	The default value for position is true, but all the others are set to false.
	If you don't think you'll have to use these properties, keep them set to false, to squeeze out the maximum amount of performance.
*/
const MAX = 15000;
const PER_BATCH = 15000;
const OPTIONS = {
	scale:    false,
	position: true,
	rotation: false,
	uvs:      false,
	alpha:    false,
};

var particle = new ParticleContainer(MAX, OPTIONS, PER_BATCH);

new PIXI.ParticleContainer(15000, [true, true, false, false, false], 15000);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@