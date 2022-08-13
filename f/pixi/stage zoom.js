//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	The Best.
	Mine.
	Mix of ngraph and erika sorensen.
	Used ngraph's Zoom-In Zoom-Out.
	Used Erika Sorensen's Zoom-On-Cursor.
	mousewheel event by `jquery.mousewheel.js` plugin.
*/
function zoom(x, y, isZoomIn) {
	var direction = (isZoomIn) ? 1 : -1,
		factor = (1 + direction * 0.1),
		local_pt = new PIXI.Point(),
		point = new PIXI.Point(x, y);
		
	var stage = p.stage;
	
	PIXI.interaction.InteractionData.prototype.getLocalPosition(stage, local_pt, point);
	
	stage.scale.x *= factor;
	stage.scale.y *= factor;
	stage.pivot = local_pt;
	stage.position = point;
}
$(document).on('mousewheel', function (e) {
	zoom(e.pageX, e.pageY, e.deltaY > 0, e);
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	(stole it from Erika Sorensen pixizam :D)
	It does have zoom-on-cursor,
	But its zoom doesn't feel good.
	mousewheel event by `jquery.mousewheel.js` plugin.
*/
function zam( event ) {
	var factor = 1,
		// Next line is what was written originally by the author (due to writing native mousewheel detection):
		// delta = event.wheelDelta || -event.detail, // Firefox has 'detail' prop with opposite sign to std wheelDelta
        delta = event.deltaY,
		local_pt = new PIXI.Point(),
		point = new PIXI.Point(event.pageX, event.pageY),
		stage = p.stage;

	PIXI.interaction.InteractionData.prototype.getLocalPosition(stage, local_pt, point);

	if ( delta > 0 ) {
		// Zoom in
		factor = 1.1;
	} else {
		// Zoom out
		factor = 1 / 1.1;
	}
	
	stage.pivot = local_pt;
	stage.position = point;
	stage.scale.set(stage.scale.x * factor);
}
$(document).on('mousewheel', function (e) {
	zoom(e);
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	Better (stole it from ngraph :D)
	The zooming itslef is much better than the first one,
	But zoom-on-cursor part is broken, due to `updateTransform` deprecation.
	mousewheel event by `jquery.mousewheel.js` plugin.
*/
var zoom = (function () {
	var direction;
	
	var getGraphCoordinates = (function() {
		var ctx = {
			global: {
				x: 0,
				y: 0
			} // store it inside closure to avoid GC pressure
		};

		return function (x, y) {
			ctx.global.x = x;
			ctx.global.y = y;
			return PIXI.interaction.InteractionData.prototype.getLocalPosition.call(ctx, p.stage);
		}
	}());

	function zoom(x, y, isZoomIn) {
		direction = isZoomIn ? 1 : -1;
		var factor = (1 + direction * 0.1);
		stage.scale.x *= factor;
		stage.scale.y *= factor;

		/*
			Technically code below is not required, but helps to zoom on mouse cursor,
			instead center of graphGraphics coordinates.
		*/
		//	Stuff below won't work in latest pixi version, since there is no updateTransform anymore.
		var beforeTransform = getGraphCoordinates(x, y);
		stage.updateTransform();
		var afterTransform = getGraphCoordinates(x, y);

		stage.position.x += (afterTransform.x - beforeTransform.x) * stage.scale.x;
		stage.position.y += (afterTransform.y - beforeTransform.y) * stage.scale.y;
		stage.updateTransform();
	}
	
	return zoom;
}());
$(document).on('mousewheel', function (e) {
	zoom(e.pageX, e.pageY, e.deltaY > 0);
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	Very basic and crappy.
	mousewheel event by `jquery.mousewheel.js` plugin.
*/
$(document).on('mousewheel', function (e) {
	// e.deltaX, e.deltaY, e.deltaFactor
	
	var	stage = a.pixi.stage;
	
	if (e.deltaY < 0) {
		console.log( 'Zoom out...');
		stage.scale.set( stage.scale.x -= 0.05  );
		stage.scale.set( stage.scale.y -= 0.05  );
	} else {
		console.log( 'Zoom in..' );
		stage.scale.set( stage.scale.x += 0.05  );
		stage.scale.set( stage.scale.y += 0.05  );
	}
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@