// includes: TweenMax.js | .min.js

// basic illustration of TweenMax's repeat, repeatDelay, yoyo and onRepeat
var box = document.getElementById("greenBox"),
    count = 0,
    tween;

tween = TweenMax.to(box, 0.5, {
	left: 700,
	repeat: 10,
	yoyo: true,
	onRepeat: onRepeat,
	repeatDelay: 0.5,
	ease:Linear.easeNone
});

function onRepeat() {
	count+=1;
	box.innerHTML = count;
	TweenLite.set(box, {
		backgroundColor: "hsl(" + Math.random() * 255 + ", 90%, 60%)"
	});
}