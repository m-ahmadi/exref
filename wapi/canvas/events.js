var Events = function (canvasId) {
	this.canvas = document.getElementById(canvasId);
	this.context = this.canvas.getContext('2d');
	this.stage = undefined;
	this.listening = false;
	// desktop flags
	this.mousePos = null;
	this.mouseDown = false;
	this.mouseUp = false;
	this.mouseOver = false;
	this.mouseMove = false;
	// mobile flags
	this.touchPos = null;
	this.touchStart = false;
	this.touchMove = false;
	this.touchEnd = false;
	// Region Events
	this.currentRegion = null;
	this.regionIndex = 0;
	this.lastRegionIndex = -1;
	this.mouseOverRegionIndex = -1;
};
Events.prototype.getContext = function () {
	return this.context;
};
Events.prototype.getCanvas = function () {
	return this.canvas;
};
Events.prototype.clear = function () {
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};
Events.prototype.getCanvasPos = function () {
	var obj = this.getCanvas();
	var top = 0;
	var left = 0;
	while (obj.tagName !== 'BODY') {
		top += obj.offsetTop;
		left += obj.offsetLeft;
		obj = obj.offsetParent;
	}
	return {
		top: top,
		left: left
	};
};
Events.prototype.setStage = function (func) {
	this.stage = func;
	this.listen();
};
Events.prototype.reset = function(evt){
	if (!evt) {
		evt = window.event;
	}
	this.setMousePosition(evt);
	this.setTouchPosition(evt);
	this.regionIndex = 0;
	if (this.stage !== undefined) {
		this.stage();
	}
	// desktop flags
	this.mouseOver = false;
	this.mouseMove = false;
	this.mouseDown = false;
	this.mouseUp = false;
	// mobile touch flags
	this.touchStart = false;
	this.touchMove = false;
	this.touchEnd = false;
};
Events.prototype.listen = function () {
	var that = this;
	if (this.stage !== undefined) {
		this.stage();
	}
	// desktop events
	this.canvas.addEventListener('mousedown', function (evt) {
		that.mouseDown = true;
		that.reset(evt);
	}, false);
	this.canvas.addEventListener('mousemove', function (evt) {
		that.reset(evt);
	}, false);
	this.canvas.addEventListener('mouseup', function (evt) {
		that.mouseUp = true;
		that.reset(evt);
	}, false);
	this.canvas.addEventListener('mouseover', function (evt) {
		that.reset(evt);
	}, false);
	this.canvas.addEventListener('mouseout', function (evt) {
		that.mousePos = null;
	}, false);
	// mobile events
	this.canvas.addEventListener('touchstart', function (evt) {
		evt.preventDefault();
		that.touchStart = true;
		that.reset(evt);
	}, false);
	this.canvas.addEventListener('touchmove', function (evt) {
		evt.preventDefault();
		that.reset(evt);
	}, false);
	this.canvas.addEventListener('touchend', function (evt) {
		evt.preventDefault();
		that.touchEnd = true;
		that.reset(evt);
	}, false);
};
Events.prototype.getMousePos = function (evt) {
	return this.mousePos;
};
Events.prototype.getTouchPos = function (evt) {
	return this.touchPos;
};
Events.prototype.setMousePosition = function (evt) {
	var mouseX = evt.clientX - this.getCanvasPos().left + window.pageXOffset;
	var mouseY = evt.clientY - this.getCanvasPos().top + window.pageYOffset;
	this.mousePos = {
		x: mouseX,
		y: mouseY
	};
};
Events.prototype.setTouchPosition = function (evt) {
	if (evt.touches !== undefined && evt.touches.length === 1) {
		// Only deal with one finger
		var touch = evt.touches[0]; // Get the information for finger #1
		var touchX = touch.pageX - this.getCanvasPos().left + window.pageXOffset;
		var touchY = touch.pageY - this.getCanvasPos().top + window.pageYOffset;
		this.touchPos = {
			x: touchX,
			y: touchY
		};
	}
};
Events.prototype.beginRegion = function () {
	this.currentRegion = {};
	this.regionIndex++;
};
Events.prototype.addRegionEventListener = function (type, func) {
	var event = (type.indexOf('touch') === -1) ? 'on' + type : type;
	this.currentRegion[event] = func;
};
Events.prototype.closeRegion = function () {
	var pos = this.touchPos || this.mousePos;
	if ( pos !== null &&
		this.context.isPointInPath(pos.x, pos.y) ) {
		
		if (this.lastRegionIndex !== this.regionIndex) {
			this.lastRegionIndex = this.regionIndex;
		}
		// handle onmousedown
		if (this.mouseDown &&
			this.currentRegion.onmousedown !== undefined) {
			this.currentRegion.onmousedown();
			this.mouseDown = false;
		} else if (this.mouseUp &&
			this.currentRegion.onmouseup !== undefined) {
			// handle onmouseup
			this.currentRegion.onmouseup();
			this.mouseUp = false;
		} else if (!this.mouseOver &&
			this.regionIndex !== this.mouseOverRegionIndex &&
			this.currentRegion.onmouseover !== undefined) {
			// handle onmouseover
			this.currentRegion.onmouseover();
			this.mouseOver = true;
			this.mouseOverRegionIndex = this.regionIndex;
		}
		// handle onmousemove
		else if (!this.mouseMove &&
			this.currentRegion.onmousemove !== undefined) {
			this.currentRegion.onmousemove();
			this.mouseMove = true;
		}
		// handle touchstart
		if (this.touchStart &&
			this.currentRegion.touchstart !== undefined) {
			this.currentRegion.touchstart();
			this.touchStart = false;
		}
		// handle touchend
		if (this.touchEnd &&
			this.currentRegion.touchend !== undefined) {
			this.currentRegion.touchend();
			this.touchEnd = false;
		}
		// handle touchmove
		if (!this.touchMove &&
			this.currentRegion.touchmove !== undefined) {
			this.currentRegion.touchmove();
			this.touchMove = true;
		}
	} else if (this.regionIndex === this.lastRegionIndex) {
		this.lastRegionIndex = -1;
		this.mouseOverRegionIndex = -1;
		// handle mouseout condition
		if (this.currentRegion.onmouseout !== undefined) {
			this.currentRegion.onmouseout();
		}
	}
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
$(function () {
	var events = new Events('myCanvas');
	var canvas = events.getCanvas();
	var context = events.getContext();
	
	canvas.addEventListener('mouseout', function () {
		events.clear();
		console.log('Mouseover me!');
	}, false);
});
