var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');

//-----------------------------------------------------------------------------
// Draw a Line
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
//-----------------------------------------------------------------------------
// Draw a Circle
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2*Math.PI);
ctx.stroke();
//-----------------------------------------------------------------------------
// Draw a Text
ctx.font = '30px Arial';
ctx.fillText('Hello World', 10, 50);
//-----------------------------------------------------------------------------
// Stroke Text
ctx.font = '30px Arial';
ctx.strokeText('Hello World', 10, 50);
//-----------------------------------------------------------------------------
// Create gradient
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, 'red');
grd.addColorStop(1, 'white');
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);
//-----------------------------------------------------------------------------
// Create gradient
var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0,'red');
grd.addColorStop(1,'white');
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);
//-----------------------------------------------------------------------------
// Draw Image
var img = document.getElementById('scream');
ctx.drawImage(img, 10, 10);
//-----------------------------------------------------------------------------