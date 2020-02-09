var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');
//----------------------------------------------------------------------------------------
ctx.beginPath();
ctx.rect(20, 20, 150, 100);
ctx.fillStyle = 'red';
ctx.fill();
ctx.beginPath();
ctx.rect(40, 40, 150, 100);
ctx.fillStyle = 'blue';
ctx.fill();
//----------------------------------------------------------------------------------------
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(20, 100);
ctx.lineTo(70, 100);
ctx.strokeStyle='red';
ctx.stroke();
//----------------------------------------------------------------------------------------
ctx.beginPath(); 
ctx.lineWidth = '5';
ctx.strokeStyle = 'green'; // Green path
ctx.moveTo(0, 75);
ctx.lineTo(250, 75);
ctx.stroke(); // Draw it
ctx.beginPath();
ctx.strokeStyle = 'purple'; // Purple path
ctx.moveTo(50, 0);
ctx.lineTo(150, 130); 
ctx.stroke(); // Draw it
//----------------------------------------------------------------------------------------
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(300, 150);
ctx.stroke();
//----------------------------------------------------------------------------------------
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(20, 100);
ctx.lineTo(70, 100);
ctx.closePath();
ctx.stroke();
//----------------------------------------------------------------------------------------
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(300, 150);
ctx.stroke();
//----------------------------------------------------------------------------------------
// Clip a rectangular area
ctx.rect(50, 20, 200, 120);
ctx.stroke();
ctx.clip();
// Draw red rectangle after clip()
ctx.fillStyle='red';
ctx.fillRect(0, 0, 150, 100);
//----------------------------------------------------------------------------------------
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
ctx.stroke();
//----------------------------------------------------------------------------------------
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2*Math.PI);
ctx.stroke();
//----------------------------------------------------------------------------------------
ctx.beginPath(); 
ctx.moveTo(20, 20);               // Create a starting point
ctx.lineTo(100, 20);              // Create a horizontal line
ctx.arcTo(150, 20, 150, 70, 50);  // Create an arc
ctx.lineTo(150, 120);             // Continue with vertical line
ctx.stroke();                     // Draw it
//----------------------------------------------------------------------------------------
ctx.rect(20, 20, 150, 100);
if (  ctx.isPointInPath(20, 50)  ) {
	ctx.stroke();
};
//----------------------------------------------------------------------------------------