var rect = new PIXI.Graphics();
rect.interactive = true;
rect.buttonMode = true;
rect.beginFill(0xFF3300, 1);       // color, alpha
rect.lineStyle(4, 0xffd900, 1);    // lineWidth, color, alpha
rect.drawRect(50, 250, 120, 120);  // x, y, width, height
rect.endFill();