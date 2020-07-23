const newRangeSlider = (() => {
	
function create(container, options) {
	const instance = new EventTarget();
	
	container.innerHTML = '\
	<div class="slider">\
	<div class="slider-selection" style="width: 80%; left: 10%;">\
				<div class="slider-handle" style="left:0; top:-20%;"></div>\
				<div class="slider-handle" style="right:0; bottom:-20%;"></div>\
			</div>\
		</div>\
	';
	
	const slider      = container.querySelector('.slider'); 
	const selection   = container.querySelector('.slider-selection');
	const leftHandle  = container.querySelectorAll('.slider-handle')[0];
	const rightHandle = container.querySelectorAll('.slider-handle')[1];
	
	Object.assign(slider.style, {
		width:      '600px',
		height:     '80px',
		background: 'yellow',
		position:   'relative',
		boxSizing:  'border-box',
	});
	
	[leftHandle, rightHandle].forEach(i => Object.assign(i.style, {
		position:   'absolute',
		width:      '10px',
		height:     '120%',
		background: 'rgba(255,0,0,.4)',
		cursor:     'ew-resize',
	}));
	
	Object.assign(selection.style, {
		position:   'relative',
		height:     '100%',
		background: 'blue',
	});
	
	const els = [leftHandle, rightHandle, selection];
	
	let el;
	let which;
	
	window.addEventListener('mousedown', start);
	window.addEventListener('dragstart', start);
	
	window.addEventListener('mouseup', end);
	window.addEventListener('dragend', end);
	
	const move = throttle(_move, 5);
	//const move = _move;
	window.addEventListener('mousemove', move);
	window.addEventListener('dragover', move);
	
	
	function start(e) {
		if (els.indexOf(e.target) === -1) return;
		el = e.target;
		el.dragging = true;
		el.clickOffsetX = e.offsetX;
	}
	
	function end() {
		if (!el) return;
		el.dragging = false;
		el = undefined;
	}
	
	let selectionRight = selection.getBoundingClientRect().right - slider.offsetLeft;
	
	function _move(e) {
		if (!el || !el.dragging) return;
		e.preventDefault();
		
		if (el === leftHandle) {
			const leftBound = 0;
			const rightBound = rightHandle.getBoundingClientRect().left - slider.offsetLeft;
			
			let newLeft = e.pageX - el.clickOffsetX - slider.offsetLeft;
			if (newLeft < leftBound) newLeft = leftBound;
			const elWidth  = el.getBoundingClientRect().width;
			if (newLeft + elWidth > rightBound) newLeft = rightBound - elWidth;
			
			const newWidth = selectionRight - newLeft;
			
			selection.style.left = newLeft;
			selection.style.width = newWidth;
			
		} else if (el === rightHandle) {
			const leftBox = leftHandle.getBoundingClientRect();
			const leftBound = leftBox.right - leftBox.left + leftBox.width;
			const rightBound = slider.getBoundingClientRect().right - selection.offsetLeft - slider.offsetLeft;
			
			
			let newWidth = e.pageX - el.clickOffsetX - selection.offsetLeft - slider.offsetLeft + el.offsetWidth;
			if (newWidth < leftBound) newWidth = leftBound;
			if (newWidth > rightBound) newWidth = rightBound;
			
			selection.style.width = newWidth;
			selectionRight = selection.getBoundingClientRect().right - slider.offsetLeft;
			
		} else if (el === selection) {
			const leftBound = 0;
			const rightBound = slider.getBoundingClientRect().right - slider.offsetLeft;
			
			let newLeft = e.pageX - el.clickOffsetX - slider.offsetLeft;
			
			if (newLeft < leftBound) newLeft = leftBound;
			const elWidth  = el.getBoundingClientRect().width;
			if (newLeft + elWidth > rightBound) newLeft = rightBound - elWidth;
			
			selection.style.left = newLeft;
			selectionRight = selection.getBoundingClientRect().right - slider.offsetLeft;
		}
		
		const newRange = {};
		instance.dispatchEvent( new CustomEvent('slide', {detail: newRange}) );
		console.log(  (selection.getBoundingClientRect().width / slider.getBoundingClientRect().width) * 100   );
		
	}
	
	return instance;
}

function throttle(fn, wait=100) {
	let last;
	let deferTimer;
	return function (...args) {
		const now = Date.now();
		if (last && now < last + wait) {
			clearTimeout(deferTimer);
			deferTimer = setTimeout(function () {
				last = now;
				fn.apply(this, args);
			}, wait);
		} else {
			last = now;
			fn.apply(this, args);
		}
	};
}
	
return create;
})();