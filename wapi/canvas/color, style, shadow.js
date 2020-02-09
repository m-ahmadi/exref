var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');

/*
	color:		A CSS color value that indicates the stroke color of the drawing. (default #000000)
	gradient:	A gradient object (linear or radial) used to create a gradient stroke
	pattern:	A pattern object used to create a pattern stroke
*/

ctx.fillStyle = '#FF0000';   // color | gradient | pattern
ctx.strokeStyle = '#FF0000'; // color | gradient | pattern
ctx.shadowBlur = 20;         // number
ctx.shadowColor = 'black';   // color
ctx.shadowOffsetX = 20;      // number: positive | negative
ctx.shadowOffsetY = 20;      // number: positive | negative

ctx.createLinearGradient(0, 0, 170, 0);           // x0, y0, x1, y1
ctx.createPattern(img, 'repeat');                 // image, repeat, repeat-x, repeat-y, no-repeat
ctx.createRadialGradient(75, 50, 5, 90, 60, 100); // x0, y0, r0, x1, y1, r1
grd.addColorStop(0, 'black');                     // stop, color