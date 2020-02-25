// includes:  TweenLite.js | .min.js

// create a tween that changes the value of the score property of the demo object from 0 to 100 over the course of 4 seconds.
var demo = {
	score: 0
};
var tween = TweenLite.to(demo, 4, {
	score: 100,
	
	onStart: 						// function - A function that should be called every time the animation updates (on every frame while the animation is active).
	onStartParams: 
	onStartScope: 
	
	onUpdate: showScore,
	onUpdateParams: [],
	onUpdateScope: {},
	
	onComplete: function () {},  // function - a function that should be called when the animation has completed
	onCompleteParams: [],        // array    - array of parameters to pass the onComplete function
	onCompleteScope: {},         // object   - defines the scope of the onComplete function (what "this" refers to inside that function).
	
	onReverseComplete: fn,
	onReverseCompleteParams: [],
	onReverseCompleteScope: {},
	
	ease: Linear.easeNone
});
//	ease:
Linear
Linear.easeNone
Power0
Power1
Power2
Power3
Power4
Quad
Cubic
Quart
Quint
Strong
function showScore() {
	console.log( demo.score.toFixed(2) );
}

//	TimelineLite:
new TimelineMax()
	.to( textBox, 3, { x: 150, y: 150 })
	.to( textBox.scale, 3, { x: 0.5, y: 0.5 }, "-=3");