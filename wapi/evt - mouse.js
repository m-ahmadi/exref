'click'
'dblclick'
'mousedown'
'mouseenter'        // mouse entered div (and not its children)
'mouseleave'
'mousemove'
'mouseover'         // mouse entered div or its children
'mouseout'
'mouseup'
'contextmenu'
'auxclick'
'pointerlockchange'
'pointerlockerror'
'select'
'wheel'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// pointer position
e.pageX,   e.pageY		// relative to document (html element)  unit: css pixels    (    changed on page scroll)
e.clientX, e.clientY	// relative to viewport (window)        unit: css pixels    (not changed on page scroll)
e.offsetX, e.offsetY	// relative to parent element           unit: css pixels
e.screenX, e.screenY  // relative to screen                   unit: device pixels

e.pageX === e.clientX + window.pageXOffset
e.pageY === e.clientY + window.pageYOffset

// see
document.addEventListener('mousemove', function(e) {
  console.table(
		`page(${e.pageX},${e.pageY}) `,
		`client(${e.clientX},${e.clientY}) `,
		`screen(${e.screenX},${e.screenY})`
	);
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// which mouse key was pressed
elem.addEventListener('mousedown', function (e) {
	e.buttons === 1  // left
	e.buttons === 4  // middle
	e.buttons === 2  // right
	e.buttons === 8  // browser back button
	e.buttons === 16 // browser forward button
	e.buttons === 0  // no button or un-initialized
});

elem.addEventListener('mouseup', function (e) {
	e.button === 0   // left
	e.button === 1   // middle
	e.button === 2   // right
	
	// only available in events fired by pressing or releasing one or multiple buttons.
	// not available in:
	'mouseenter', 'mouseleave', 'mouseover', 'mouseout', 'mousemove'
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// detect drag direction
var initX;
var initY;
document.addEventListener('mousedown', function (e) {
	this.dragging = true;
	initX = e.pageX;
	initY = e.pageY
});
document.addEventListener('mousemove', function (e) {
	var x = e.pageX;
	var y = e.pageY;
	
	if      (x < initX) { console.log('left');  }
	else if (x > initX) { console.log('right'); }
	
	if      (y < initY) { console.log('up');    }
	else if (y > initY) { console.log('down');  }
});
document.addEventListener('mouseup', function () {
	this.dragging = false;
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// detect scroll direction
// on document
var prev = document.documentElement.scrollTop;
document.addEventListener('scroll', function () {
  var curr = document.documentElement.scrollTop;
	console.log(curr > prev ? 'down' : 'up');
  prev = curr;
});
// on one element
var el = document.getElementById('foo');
var prev = el.scrollTop;
el.addEventListener('scroll', function () {
  var curr = el.scrollTop;
	console.log(curr > prev ? 'down' : 'up');
  prev = curr;
});

// another way:
var scrollPos = 0;
window.addEventListener('scroll', function () {
	var top = document.body.getBoundingClientRect().top;
  if (top > scrollPos) {
		console.log('up');
	} else {
		console.log('down');
		scrollPos = top;
	}
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// detect wheel direction
elem.addEventListener('wheel', function (e) {
	const { deltaY } = e;
	if (deltaY < 0) {
		console.log('up');
	} else if (deltaY > 0) { 
		console.log('down');
	}
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// e.relatedTarget 
e.relatedTarget // for mouseout: element being entered; for mouseover: element being exited
-               e.target       e.relatedTarget
'mouseenter' // entered to     exited from
'mouseover'  // entered to     exited from
'dragenter'  // entered to     exited from
'mouseout'   // exited from    entered to
'mouseleave' // exited from    entered to
'dragexit'   // exited from    entered to
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@