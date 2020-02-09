/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
	Setting up
*/
var t = new Tink(PIXI, renderer.view);

function animate() {
	requestAnimationFrame(animate);
	
	t.update();
	
	renderer.render(stage);
}
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
	A universal pointer
*/
var pointer = t.makePointer();

pointer.press =   function () { console.log("The pointer was pressed");  }
pointer.release = function () { console.log("The pointer was released"); }
pointer.tap =     function () { console.log("The pointer was tapped");   }

pointer.x
pointer.y

pointer.isUp
pointer.isDown
pointer.tapped

pointer.visible = false;
pointer.visible = true;
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
	Pointer interaction with sprites
*/
pointer.hitTestSprite(anySprite);
anyCircularSprite.circular = true;

function animate() {
	if ( pointer.hitTestSprite(anySprite) ) {
		pointer.cursor = "pointer";
	} else {
		pointer.cursor = "auto";
	}
}
pointer.cursor = "pointer" // same as:
renderer.view.style.cursor = "pointer";
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
	Drag and drop sprites
*/
t.makeDraggable(cat, tiger, hedgehog);
anySprite.draggable = false;
anySprite.draggable = true;
t.makeUndraggable(cat, tiger, hedgehog);
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
	Buttons
*/
playButton.press =   function () { console.log("pressed");  }
playButton.release = function () { console.log("released"); }
playButton.over =    function () { console.log("over");     }
playButton.out =     function () { console.log("out");      }
playButton.tap =     function () { console.log("tapped");   }


var id = PIXI.loader.resources["images/button.json"].textures;
var buttonFrames = [
	id["up.png"],
	id["over.png"],
	id["down.png"]
];