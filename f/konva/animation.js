/*
	Animation
	
	You can create animations in two ways:
	
	
*/

//	via Konva.Animation
var anim = new Konva.Animation(function(frame) {
    var time = frame.time,
        timeDiff = frame.timeDiff,
        frameRate = frame.frameRate;
    // update stuff
}, layer);
anim.start();


//	via Konva.Tween
var tween = new Konva.Tween({
        node: rect,
        duration: 1,
        x: 140,
        rotation: Math.PI * 2,
        opacity: 1,
        strokeWidth: 6
});
tween.play();

// or new shorter method:
circle.to({
    duration : 1,
    fill : 'green'
});