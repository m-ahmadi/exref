function writeMessage(context, message) {
	context.font = '18pt Calibri';
	context.fillStyle = 'black';
	context.fillText(message, 10, 25);
}


$(function () {
	events = new Events('myCanvas');
	var canvas = events.getCanvas();
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	var context = events.getContext();

	var rectX = 200;
	var rectY = 200;
	var draggingRect = false;
	var draggingRectOffsetX = 0;
	var draggingRectOffsetY = 0;

	events.setStage(function () {
		// get the mouse position
		var mousePos = this.getMousePos();

		if (draggingRect) {
			rectX = mousePos.x - draggingRectOffsetX;
			rectY = mousePos.y - draggingRectOffsetY;
		}

		// clear the canvas
		this.clear();
		
		writeMessage(context, 'Drag and drop the box... ss');

		this.beginRegion();

		// draw the box
		context.beginPath();
		context.rect(rectX, rectY, 200, 100);
		context.lineWidth = 10;
		context.strokeStyle = 'black';
		context.fillStyle = '#00D2FF';
		context.fill();
		context.stroke();
		context.closePath();

		// attach event listeners
		this.addRegionEventListener('mousedown', function() {
			draggingRect = true;
			var mousePos = events.getMousePos();
			
			draggingRectOffsetX = mousePos.x - rectX;
			draggingRectOffsetY = mousePos.y - rectY;
		});
		this.addRegionEventListener('mouseup', function() {
			draggingRect = false;
		});
		this.addRegionEventListener('mouseover', function() {
			document.body.style.cursor = 'pointer';
		});
		this.addRegionEventListener('mouseout', function() {
			document.body.style.cursor = 'default';
		});

		this.closeRegion();
	});
});