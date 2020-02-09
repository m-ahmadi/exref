var stage = new PIXI.Container();
stage.position.set(0); // 0 0



var g = new PIXI.Graphics();
g.drawRect(100, 100, 50, 50);



var box = new PIXI.Container();
box.position.set(200, 200);

box.addChild(g);

g.position // 0 0
box.position // 200 200
box.toGlobal( g.position ) // 200 200
 

stage.addChild(box);