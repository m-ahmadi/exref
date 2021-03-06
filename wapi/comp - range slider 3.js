const newRangeSlider = (() => {
log=console.log;

function create(root, _opts={}) {
	const defOpts = {
		min:          0,
		max:          100,
		width:        '100%',
		moveDebounce: 15,
		emitDebounce: 15
	};
	const opts = { ...defOpts, ..._opts };
	
	root.innerHTML = ''+
//<div class"slider">
	'<div class="slider-selection" style="width: 80%; left: 10%;">\
		<div class="slider-handle"   style="left:0; top:-20%;"></div>\
		<div class="slider-handle"   style="right:0; bottom:-20%;"></div>\
	</div>';
//</div>
	
	const slider      = root;//.querySelector('.slider');
	const selection   = root.querySelector('.slider-selection');
	const leftHandle  = root.querySelectorAll('.slider-handle')[0];
	const rightHandle = root.querySelectorAll('.slider-handle')[1];
	
	Object.assign(slider.style, {
		width:      opts.width,
		height:     '20px',
		display:    'inline-block',
		position:   'relative',
		userSelect: 'none',
		background: 'grey',
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
		background: 'dodgerblue',
	});
	
	let el;
	let reqId;
	let min = opts.min;
	let max = opts.max;
	let prevMin, prevMax;
	const initialMax = max;
	
	[leftHandle, rightHandle, selection].forEach(i => {
		i.addEventListener('mousedown', start);
		i.addEventListener('dragstart', e => e.preventDefault());
	});
	const move = throttle(_move, opts.moveDebounce);
	
	function start(e) {
		e.stopPropagation();
		el = this;
		el.dragging = true;
		el.clickOffsetX = e.offsetX;
		window.addEventListener('mousemove', move);
		window.addEventListener('mouseup', end);
		if (el !== selection) document.body.style.cursor = 'ew-resize';
	}
	
	function end() {
		if (!el) return;
		el.dragging = false;
		el = undefined;
		document.body.style.cursor = '';
		window.removeEventListener('mousemove', move);
		window.removeEventListener('mouseup', end);
	}
	
	let selectionRight = selection.getBoundingClientRect().right - slider.offsetLeft;
	
	const emit = debounce(_emit, opts.emitDebounce);
	
	function _move(e) {
		if (!el || !el.dragging) return;
		if (e.type === 'dragover') e.preventDefault();
		if (reqId) cancelAnimationFrame(reqId);
		
		reqId = requestAnimationFrame(() => {
			
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
			
			const pxWidth = slider.getBoundingClientRect().width;
			const pxMin   = selection.offsetLeft;
			const pxMax   = selection.offsetLeft + selection.offsetWidth;
			const ratio   = pxWidth / initialMax;
			min = Math.round(pxMin / ratio);
			max = Math.round(pxMax / ratio);
			
			if (min !== prevMin || max !== prevMax) {
				if (min !== prevMin) prevMin = min;
				if (max !== prevMax) prevMax = max;
				emit(slider, {min,max});
			}
			reqId = undefined;
		});
		
	}
	
	return slider;
}

function _emit(instance, detail) {
	instance.dispatchEvent( new CustomEvent('slide', {detail}) );
}

function throttle(fn, wait=5) {
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
function debounce(fn, wait) {
	let timeout
	return function (...args) {
		clearTimeout(timeout);
		timeout = setTimeout(() => fn.apply(this, args), wait);
	};
}

const opts = {passive:false};
window.addEventListener('touchstart', touch2mouse, opts);
window.addEventListener('touchmove', touch2mouse, opts);
window.addEventListener('touchend', touch2mouse, opts);
window.addEventListener('touchcancel', touch2mouse, opts);
function touch2mouse(e) {
	e.preventDefault();
	const touch = e.changedTouches[0];
	let type = e.type;
	type =
		type === 'touchstart'  ? 'mousedown' :
		type === 'touchend'    ? 'mouseup' :
		type === 'touchcancel' ? 'mouseup' :
		type === 'touchmove'   ? 'mousemove' : type;
	const mouseEvent = new MouseEvent(type, {
		bubbles: true,
		screenX: touch.screenX,
		screenY: touch.screenY,
		clientX: touch.clientX,
		clientY: touch.clientY
	});
	touch.target.dispatchEvent(mouseEvent);
}
	
return create;
})();