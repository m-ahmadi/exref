// includes:
// Tween.js

var position = { x: 100, y: 0 }
// Create a tween for position first
var tween = new TWEEN.Tween(position); // sprite.position

// Then tell the tween we want to animate the x property over 1000 milliseconds
tween.to({ x: 200 }, 1000);

// And set it to start
tween.start();

animate();

function animate() {
	requestAnimationFrame(animate);
	// [...]
	TWEEN.update();
	// [...]
}

tween.onUpdate(function() {
	console.log(this.x);
});