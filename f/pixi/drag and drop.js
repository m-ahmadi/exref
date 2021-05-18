//	Basic Drag and Drop
function dragstart(e) {
	this.data = e.data;
	this.alpha = 0.5;
	this.dragging = true;
	
    this.dragPoint = e.data.getLocalPosition(this.parent);
    this.dragPoint.x -= this.position.x;
    this.dragPoint.y -= this.position.y;
    
	/*	I tried and failed flat on my back.
		console.log( e.data.global.x - this.x );
		console.log( this.width, pointerX, offsetX );
		var pointerX = e.data.global.x;
		var offsetX = pointerX - this.x;
	*/
	
	// reorder children for z-index
	var arr = stage.children;
	arr.splice( arr.indexOf(this), 1 );
	arr.push(this);
	
	this.scale.x *= 1.1;
	this.scale.y *= 1.1;
}
function dragmove(e) {
	if (this.dragging) {
		var newPosition = this.data.getLocalPosition(this.parent);
		this.position.x = newPosition.x - this.dragPoint.x;
		this.position.y = newPosition.y - this.dragPoint.y;
		
		/*	I tried and it didn't work (sad face)
			var newPosition = e.data.getLocalPosition(this.parent);
			var pointerX = e.data.global.x; // same as newPosition.x
			var pointerY = e.data.global.y; // same as newPosition.y
			var offsetX = newPosition.x - pointerX;
			var offsetY = newPosition.y - pointerY;
			this.position.x = offsetX;
			this.position.y = offsetY;
		*/
	}
}
function dragend() {
	this.alpha = 1;
	this.dragging = false;
	
	
	this.scale.x /= 1.1;
	this.scale.y /= 1.1;
	
	this.data = null;
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	Event Bubbling
	I think the bubbling is upward.
	
	If a container has a sprite in it, and they both have mousedown handlers defined,
	first the sprite will fire,
	then the container.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@