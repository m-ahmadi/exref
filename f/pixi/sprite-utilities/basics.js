/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
	Setting up and initializing SpriteUtilities
*/
var u = new SpriteUtilities(PIXI);
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
	The sprite function
*/
var anySprite = u.sprite(frameTextures, xPosition, yPosition);
/*
	The first argument, frameTextures can be any of the following:
	
	A single PNG image string.
	A Pixi Texture object.
	An array of texture atlas frame ids.
	An array of single PNG image strings.
	An array of Pixi Texture objects.
*/
var anySprite = u.tilingSprite("images/tile.png", 128, 128);
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
	text
*/
var messgae = u.text("Hello!", "32px Futura", "black", xPosition, yPosition); 
message.style = {fill: "black", font: "16px Helvetica"}; 
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
	rectangle
*/
u.rectangle( width, height, fillStyle, strokeStyle, lineWidth, xPosition, yPosition );

var square = u.rectangle(64, 64, "seaGreen", "hotPink", 2);
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
	circle
*/
u.circle(diameter, fillStyle, strokeStyle, lineWidth, xPosition, yPosition)

var ball = u.circle(64, "powderBlue", "plum", 3);
ball.anchor.set(0.5, 0.5);
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
	line
*/
u.line(color, width, ax, ay, bx, by)

var diagonal = u.line(0xff0000, 3, 64, 64, 128, 128);
diagonal.bx = 100;
diagonal.by = 90;
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
	group
*/
var container = u.group(spriteOne, spriteTwo, spriteThree);

var container = u.group();
container.addChild(anySprite);
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
	remove
*/
u.remove(spriteOne, spriteTwo, spriteThree);

u.remove(arrayOfSprites);
