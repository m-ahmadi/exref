var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');

ctx.lineCap = 'round'; // butt | round | square
ctx.lineJoin = 'round'; // bevel | round | miter
ctx.lineWidth = 10;
ctx.miterLimit = 5;