/*
	Events
	
	With Konva you can easily listen to user input events (click, dblclick, mouseover, tap, dbltap, touchstart etc),
	attributes change events (scaleXChange, fillChange) and drag&drop events (dragstart, dragmove, dragend).
*/

circle.on('mouseout touchend', function () {
	console.log('user input');
});

circle.on('xChange', function () {
	console.log('position change');
});

circle.on('dragend', function () {
	console.log('drag stopped');
});