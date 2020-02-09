/*----------------------------------------------------
	Setting up
*/
var smoothie = new Smoothie({
	engine: PIXI, 
	renderer: renderer,
	root: stage,
	fps: 30,
	update: update.bind(this)
});

function update() {
	console.log("It loops!");  
}

smoothie.start();

/*----------------------------------------------------
	Animation
*/
var cat;
cat = new PIXI.Sprite.fromImage("images/cat.png");
stage.addChild(cat);
smoothie.start();

function update() {
	cat.x += 1;
	cat.y += 1;
}