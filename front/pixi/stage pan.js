//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
stage = new PIXI.Container();
//p.stage.buttonMode = true;
stage.interactive = true;
stage.hitArea = new PIXI.Rectangle( -100000, -100000, p.renderer.width / p.renderer.resolution * 100000, p.renderer.height / p.renderer.resolution *100000 );
stage
	.on('mousedown', pan.start)
	.on('touchstart', pan.start)
	.on('mouseup', pan.end)
	.on('mouseupoutside', pan.end)
	.on('touchend', pan.end)
	.on('touchendoutside', pan.end)
	.on('mousemove', pan.move)
	.on('touchmove', pan.move);

var pan = (function () {
	var isDragging = false,
		prevX,
		prevY;
	
	function down(e) {
		var pos = e.data.global;
		prevX = pos.x;
		prevY = pos.y;
		isDragging = true;
	}
	function move(e) {
		if ( !isDragging ) { return; }
		
		var pos = e.data.global;
		var dx = pos.x - prevX;
		var dy = pos.y - prevY;

		p.stage.position.x += dx;
		p.stage.position.y += dy;
		prevX = pos.x;
		prevY = pos.y;
	}
	function up() {
		isDragging = false;
	}
	
	return {
		start: down,
		move: move,
		end: up
	};
	
}());


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//	Crappy
var initX,
	initY,
	left = false,
	right = false,
	up = false,
	down = false;
	
$('canvas')
	.on('mousedown', function (e) {
		this.dragit = true;
		initX = e.pageX;
		initY = e.pageY
	})
	.on('mousemove', function (e) {
		var x = e.pageX,
			y = e.pageY;
		
		if (!this.dragit) { return; }
		
		
		if (x < initX) { // left
			right = false;
			left= true;
		} else if (x > initX) { // right
			right = true;
			left = false;
		}
		if (y < initY) { // up
			down = false;
			up = true;
		} else if (y >  initY) { // down
			up = false;
			down = true
		}
		
		if (left) {
			stage.x += 1;
		}
		if (right) {
			stage.x -= 1;
		}
		if (up) {
			stage.y += 1;
		}
		if (down) {
			stage.y -= 1;
		}
	})
	.on('mouseup', function () {
		this.dragit = false;
	});