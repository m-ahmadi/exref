var line;
//	Line
line = new PIXI.Graphics();
line.interactive = true;
line.buttonMode = true;
line.lineStyle();
line.beginFill();
line.moveTo();
line.lineTo();
line.endFill();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	Sprite-Based (useful only for straight lines)
	formula:
		calc x between to points
		put the sprite there
		set sprite anchro to center center
		add width to sprite
*/
line = PIXI.Sprite.fromImage('images/line.png');
line.interactive = true;
line.buttonMode = true;
line.width = 200;
line.height = 100;
line.x = 900;
line.y = 100;
line.anchor.set(0);

//	Cloining?
/*
	var clone = line.clone();
	clone.x = Math.random() * window.innerWidth *5;
	clone.y = Math.random() * window.innerHeight *5;
*/

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*	Redrawing Lines (WORKED)
	1. Grab context of the line.
	2. clear() on the context
	3. draw the new line with new properties
	4. switch dirty and clearDirty (set true if false, set false if true)
*/
line.clear();
line.beginFill();
line.lineStyle();
line.moveTo();
line.lineTo();
line.endFill;
line.dirty = (line.dirty) ? false : true;
line.clearDirty = (line.clearDirty) ? false : true;
 
//graphics.currentPath.shape.points
//line.graphicsData[0].shape.points
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	Interactivity
	problem:
	hitArea is a rectangular shape so you can click the line even if you click under or above it
*/
line.hitArea = line.getBounds();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	quadraticCurveTo
*/
quadraticCurveTo(cpX, cpY, toX, toY)

var line = new PIXI.Graphics();
line.lineStyle(4, 0x000000, 1);
line.moveTo(32, 128);
// line.lineTo(224, 128);
line.quadraticCurveTo(128, 20, 224, 128);