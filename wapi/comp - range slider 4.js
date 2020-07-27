// const newRangeSlider = (() => {
log=console.log;

function create(root, _opts={}) {
	const defOpts = {
		min:          0,
		max:          100,
		width:        '100%',
		moveDebounce: 15,
		emitDebounce: 15
	};
	const _atts = root.attributes;
	const attrs = {
		..._atts.min   && {min:   +_atts.min.value},
		..._atts.max   && {max:   +_atts.max.value},
		..._atts.width && {width: _atts.width.value},
	};
	const opts = { ...defOpts, ...attrs, ..._opts };
	
	root.innerHTML = ''+
	'<div class="slider-selection" style="">\
		<div class="slider-handle"   style="left:-10px;"></div>\
		<div class="slider-handle"   style="right:-10px;"></div>\
	</div>';
	
	/* const slider      = root;
	const selection   = root.querySelector('.slider-selection');
	const leftHandle  = root.querySelectorAll('.slider-handle')[0];
	const rightHandle = root.querySelectorAll('.slider-handle')[1]; */
	slider      = root;
	selection   = root.querySelector('.slider-selection');
	leftHandle  = root.querySelectorAll('.slider-handle')[0];
	rightHandle = root.querySelectorAll('.slider-handle')[1];
	
	Object.assign(slider.style, {
		width:        opts.width,
		height:       '20px',
		display:      'inline-block',
		position:     'relative',
		userSelect:   'none',
		background:   '#EEEEEF',
		borderRadius: '1px',
		border:       '1px solid #B2B2B2',
	});
	
	[leftHandle, rightHandle].forEach(i => Object.assign(i.style, {
		position:     'absolute',
		width:        '10px',
		minWidth:     '1px',
		height:       '200%',
		top:          '-50%',
		background:   '#23FB8B',
		cursor:       'ew-resize',
		borderRadius: '3px',
	}));
	
	Object.assign(selection.style, {
		position:     'relative',
		height:       '100%',
		background:   'dodgerblue',
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
		log(e.offsetX);
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
		if (e.type && e.type === 'dragover') e.preventDefault();
		if (reqId) cancelAnimationFrame(reqId);
		
		reqId = requestAnimationFrame(() => {
			
			if (el === leftHandle) {
				const leftBound = 0;
				// const rightBound = rightHandle.getBoundingClientRect().left - slider.offsetLeft;
				const rightBound = rightHandle.getBoundingClientRect().left;
				
				// let newLeft = e.pageX - el.clickOffsetX - slider.offsetLeft;
				let newLeft = e.pageX - slider.offsetLeft;
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
			
			
			
			const { _min, _max } = getCurrentRange();
			min = _min;
			max = _max;
			
			if (min !== prevMin || max !== prevMax) {
				if (min !== prevMin) prevMin = min;
				if (max !== prevMax) prevMax = max;
				emit(slider, {min,max});
			}
			reqId = undefined;
		});
		
	}
	
	function updateUi(min, max) {
		
	}
	
	function getCurrentRange() {
		const pxWidth = slider.getBoundingClientRect().width;
		const pxMin   = selection.offsetLeft;
		const pxMax   = selection.offsetLeft + selection.offsetWidth;
		const ratio   = pxWidth / initialMax;
		const _min    = Math.round(pxMin / ratio);
		const _max    = Math.round(pxMax / ratio);
		return { _min, _max };
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
	


/* 
	Object.defineProperties(slider, {
		'min': {
			get: () => min,
			set(v) {
				min = v;
				el = leftHandle;
				el.dragging = true;
				leftHandle.dispatchEvent(new MouseEvent('mousemove', {bubbles:true}));
			}
		},
		'max': {
			get: () => max,
			set(v) {
				max = v;
				el = rightHandle;
				el.dragging = true;
				leftHandle.dispatchEvent(new MouseEvent('mousemove', {bubbles:true}));
			}
		},
	});
	*/

const newRangeSlider = create;
// return create;
// })();