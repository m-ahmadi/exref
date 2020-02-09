var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');

ctx.rect(20, 20, 150, 100);
ctx.stroke();

// more custom
ctx.beginPath();
ctx.lineWidth = '6';     // 4
ctx.strokeStyle = 'red'; // green blue
ctx.rect(5, 5, 290, 140);
ctx.stroke();

ctx.fillRect(20, 20, 150, 100);		// x, y, width, height
ctx.strokeRect(20, 20, 150,100);	// x, y, width, height
ctx.clearRect(20, 20, 100, 50);		// x, y, width, height