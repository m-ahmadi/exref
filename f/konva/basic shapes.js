var triangle = new Konva.Shape({
	sceneFunc: function(context) {
		context.beginPath();
		context.moveTo(20, 50);
		context.lineTo(220, 80);
		context.quadraticCurveTo(150, 100, 260, 170);
		context.closePath();

		// special Konva.js method
		context.fillStrokeShape(this);
	},
	fill: '#00D2FF',
	stroke: 'black',
	strokeWidth: 4
});