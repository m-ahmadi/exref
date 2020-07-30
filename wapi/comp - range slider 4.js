// const newRangeSlider = (() => {
log=console.log;

function create(root, _opts={}) {
	const defOpts = {
		min:          0,
		max:          100,
		width:        '100%',
		height:       '20px',
		moveThrottle: 15,
		emitDebounce: 15,
		handleHeight:  1.5,
		handleTop:    0.5,
		handleWidth:  '5px',
	};
	const _keys = Object.keys(defOpts);
	for (const i of root.attributes) {
		const k = camel(i.name);
		if (_keys.indexOf(k) !== -1) defOpts[k] = typeof defOpts[k] === 'number' ? +i.value : i.value;
	}
	const opts = { ...defOpts, ..._opts };
	log(opts);
	
	root.innerHTML = ''+
	'<div class="slider-selection">\
		<div class="slider-handle"></div>\
		<div class="slider-handle"></div>\
	</div>';
	
	/* const slider      = root;
	const selection   = root.querySelector('.slider-selection');
	const leftHandle  = root.querySelectorAll('.slider-handle')[0];
	const rightHandle = root.querySelectorAll('.slider-handle')[1]; */
	slider      = root;
	selection   = root.querySelector('.slider-selection');
	leftHandle  = root.querySelectorAll('.slider-handle')[0];
	rightHandle = root.querySelectorAll('.slider-handle')[1];
	
	
	const h            = +opts.height.replace(/px|%|em|rem/,'');
	const handleHeight = h * opts.handleHeight;
	const handleTop    = -(h - (handleHeight * opts.handleTop));
	
	Object.assign(slider.style, {
		width:         `calc(${opts.width} - (${opts.handleWidth} * 2))`,
		height:        opts.height,
		display:       'inline-block',
		verticalAlign: 'top',
		position:      'relative',
		userSelect:    'none',
		margin:        `${-handleTop+5}px calc(${opts.handleWidth} + 5px)`,
		background:    '#ebebed',
	});
	
	[leftHandle, rightHandle].forEach(i => Object.assign(i.style, {
		position:     'absolute',
		width:        opts.handleWidth,
		height:       handleHeight+'px',
		top:          handleTop+'px',
		background:   'rgb(169 169 169 / 60%)',
		cursor:       'ew-resize',
		borderRadius: '1px',
	}));
	leftHandle.style.left   = '-'+opts.handleWidth;
	rightHandle.style.right = '-'+opts.handleWidth;
	
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
	
	[leftHandle, rightHandle, selection].forEach(i => {
		i.addEventListener('mousedown', start);
		i.addEventListener('dragstart', e => e.preventDefault());
	});
	const move = throttle(_move, opts.moveThrottle);
	
	function start(e) {
		el = this;
		el.dragging = true;
		el.clickOffsetX = e.offsetX;
		window.addEventListener('mousemove', move);
		window.addEventListener('mouseup', end);
		if (el === selection) {
			[leftHandle, rightHandle].forEach(i => i.style.cursor = 'default')
		} else {
			e.stopPropagation();
			document.body.style.cursor = 'ew-resize';
		}
	}
	function end() {
		if (!el) return;
		el.dragging = false;
		window.removeEventListener('mousemove', move);
		window.removeEventListener('mouseup', end);
		document.body.style.cursor = '';
		if (el === selection) [leftHandle, rightHandle].forEach(i => i.style.cursor = 'ew-resize');
		el = undefined;
	}
	
	let selectionRight;
	const setSelectionRight = () => selectionRight = selection.getBoundingClientRect().right - slider.offsetLeft;
	setSelectionRight();
	
	const emit = debounce(_emit, opts.emitDebounce);
	
	function _move(e) {
		if (!el || !el.dragging) return;
		if (e.type && e.type === 'dragover') e.preventDefault();
		if (reqId) cancelAnimationFrame(reqId);
		
		reqId = requestAnimationFrame(() => {
			
			if (el === leftHandle) {
				const leftBound = 0;
				const rightBound = selectionRight;
				
				let newLeft = e.pageX + (el.offsetWidth - el.clickOffsetX) - slider.offsetLeft;
				if (newLeft < leftBound)  newLeft = leftBound;
				if (newLeft > rightBound) newLeft = rightBound;
				
				const newWidth = selectionRight - newLeft;
				
				selection.style.left = newLeft;
				selection.style.width = newWidth;
				
			} else if (el === rightHandle) {
				const minWidth = selection.getBoundingClientRect().left - selection.offsetLeft - slider.offsetLeft;
				const maxWidth = slider.getBoundingClientRect().right - selection.offsetLeft - slider.offsetLeft;
				
				let newWidth = e.pageX - el.clickOffsetX - selection.offsetLeft - slider.offsetLeft;
				if (newWidth < minWidth) newWidth = minWidth;
				if (newWidth > maxWidth) newWidth = maxWidth;
				
				selection.style.width = newWidth;
				setSelectionRight();
				
			} else if (el === selection) {
				const leftBound = 0;
				const rightBound = slider.getBoundingClientRect().right - slider.offsetLeft;
				
				let newLeft = e.pageX - el.clickOffsetX - slider.offsetLeft;
				
				if (newLeft < leftBound) newLeft = leftBound;
				const elWidth  = el.getBoundingClientRect().width;
				if (newLeft + elWidth > rightBound) newLeft = rightBound - elWidth;
				
				selection.style.left = newLeft;
				setSelectionRight();
				
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
	
	function getCurrentRange() {
		const pxWidth = slider.getBoundingClientRect().width;
		const pxMin   = selection.offsetLeft;
		const pxMax   = selection.offsetLeft + selection.offsetWidth;
		const ratio   = pxWidth / opts.max;
		const _min    = Math.round(pxMin / ratio);
		const _max    = Math.round(pxMax / ratio);
		return { _min, _max };
	}
	
	function setCurrentRange(newMin=prevMin||min, newMax=prevMax||max) {
		if (newMin === prevMin && newMax === prevMax) return;
		
		// log(min, max);
		log(newMin, newMax);
		// log(prevMin, prevMax);
		
		const pxWidth = slider.getBoundingClientRect().width;
		const ratio   = pxWidth / opts.max;
		
		if (newMin !== prevMin) {
			newMin = newMin < opts.min ? opts.min : newMin > max ? max : newMin;
			
			const newLeft = newMin * ratio;
			const newWidth = selectionRight - newLeft;
			
			// log(newMin,newLeft, newWidth);
			selection.style.left  = newLeft;
			selection.style.width = newWidth;
			
			min = newMin;
			prevMin = newMin;
			
		}
		
		if (newMax !== prevMax) {
			newMax = newMax < min ? min : newMax > opts.max ? opts.max : newMax;
			
			const newWidth = newMax * ratio;
			
			// log(newWidth);
			
			selection.style.width = newWidth;
			
			max = newMax;
			prevMax = newMax;
			
		}
		
		setSelectionRight();
	}
	
	
	
	window.set = setCurrentRange.bind(this);
	
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
function camel(str) {
	return str
		.split('-')
		.map((v, i) => i ? v.charAt(0).toUpperCase() + v.slice(1).toLowerCase() : v)
		.join('');
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