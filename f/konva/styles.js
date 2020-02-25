/*	Styles
	Each shape supports the following style properties:
	
	Fill. Solid color, gradients or images
	Stroke (color, width)
	Shadow (color, offset, opacity, blur)
	Opacity
*/
var pentagon = new Konva.RegularPolygon({
	x: stage.getWidth() / 2,
	y: stage.getHeight() / 2,
	sides: 5,
	radius: 70,
	fill: 'red',
	stroke: 'black',
	strokeWidth: 4,
	shadowOffsetX : 20,
	shadowOffsetY : 25,
	shadowBlur : 40,
	opacity : 0.5
});