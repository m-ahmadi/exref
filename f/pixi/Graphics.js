var graphics = new PIXI.Graphics();
graphics.interactive = true;
graphics.buttonMode = true;


// set a fill and line style
graphics.beginFill(0xFF3300, 1);       // color, alpha
graphics.lineStyle(4, 0xffd900, 1);    // lineWidth, color, alpha

//--------------------------------------------------------------------
// draw a line
graphics.moveTo(50,50);
graphics.lineTo(150, 150);
// or
graphics.moveTo(50,50);
graphics.lineTo(150, 150);
graphics.lineTo(50, 50);
//--------------------------------------------------------------------
// draw a shape
graphics.moveTo(50,50);
graphics.lineTo(250, 50);
graphics.lineTo(100, 100);
graphics.lineTo(50, 50);
//--------------------------------------------------------------------
// draw a rectangle
graphics.drawRect(50, 250, 120, 120);  // x, y, width, height
//--------------------------------------------------------------------
// draw a rounded rectangle
graphics.drawRoundedRect(150, 450, 300, 100, 15);

//--------------------------------------------------------------------
// lineStyle(0) = circle without outline
graphics.drawCircle(470, 90,60);

//--------------------------------------------------------------------
graphics.arcTo();

//--------------------------------------------------------------------

graphics.endFill();

// after endFill
graphics.currentPath.shape.closed = false;
graphics.graphicsData[0]

graphics.x = 64;
graphics.y = 64;
graphics.alpha = 0.5;


/*
	Redrawing Graphics Issue:
	
	Graphics don't update if you change their path properties.
*/
graphics.graphicsData
graphics.currentPath.shape
graphics.currentPath.shape.points
graphics.currentPath.points
// and others

// 	Work around:
clear():
dirty = (dirty) ? false : true;
clearDirty = (clearDirty) ? false : true;

/*
	If you clear() then all polygon coords will be re-calculated,
	and that's not good for javascript performance (recalculating graphics._webgl)
	
	Simple properties like 'position', 'scale', 'rotation', 'pivot' you can change every frame.
	It's probably much easier to just discard the old graphics object and create a new one
*/

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
var texture = graphics.generateCanvasTexture();