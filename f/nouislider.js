/* includes:
nouislider.css
nouislider.js

cdn:
https://cdn.jsdelivr.net/npm/nouislider/
*/

var slider = document.getElementById('slider'); // jquery el won't work: $('#slider')

noUiSlider.create(slider, {
	start: [20, 80],
	connect: true,
	range: {
		min: 0,
		max: 100
	}
});
// <div id="slider"></div>

slider.noUiSlider.set([null, 60])
slider.setAttribute('disabled', true)
slider.removeAttribute('disabled')
slider.getElementsByClassName('noUi-origin')[0].setAttribute('disabled', true) // disable one handle
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// an example
slider.style.height = '400px';
slider.style.margin = '0 auto 30px';

const formatter = { // remove decimals formatter
	from: value => value,
	to: value => Math.floor( parseFloat(value) )
};

noUiSlider.create(slider, {
	start: [1450, 2050, 2350, 3000], // 4 handles, starting at...
	margin: 300,                     // handles must be at least 300 apart
	limit: 600,                      // ... but no more than 600
	connect: true,                   // display a colored bar between the handles
	direction: 'rtl',                // put '0' at the bottom of the slider
	orientation: 'vertical',         // orient the slider vertically
	behaviour: 'tap-drag',           // move handle on tap, bar is draggable
	step: 150,
	tooltips: true,
	range: { min: 1300, max: 3250},
	pips: { mode: 'steps', stepped: true, density: 4 }, // show a scale with the slider
	format: formatter,
	cssPrefix: 'noUi-',
	cssClasses: {
		// full list of classnames to override.
		// does not extend the default classes.
	}
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// reference
const formatter = { // default formatter (accept all numeric values, output two decimals)
	from: value => value,
	to: value => parseFloat( value.toFixed(2) )
};

noUiSlider.create(slider, {
	start:             number[] | string[],                           // required
	range:             { min: 0|[0], max: 0|[0], '30%': 0|[0], ... }, // required
	step:              0,
	snap:              false,
	format:            formatter,
	ariaFormat:        formatter,
	connect:           false|'upper'|'lower'|boolean[],
	margin:            0,
	limit:             0,
	padding:           0 | [0] | [0,0],
	orientation:       'horizontal'|'vertical',
	direction:         'ltr'|'rtl',
	tooltips:          false|formatter|boolean[] |formatter[],
	animate:           true,
	animationDuration: this.animate ? 300 : undefined,
	keyboardSupport:   true,
	behaviour:         'tap'|'drag'|'fixed'|'snap'|'unconstrained'|'none'|'tap-drag-fixed-...'
	pips: {
		mode: 'range'|'steps'|'positions'|'count'|'values',
		values: number[],
		density: 0,
		stepped: true,
		filter: 0|1|2,
		format: formatter
	},
	documentElement:   documentElement,
	cssPrefix:         'noUi-',
	cssClasses:        ClassList
});

// props
slider.noUiSlider.options
slider.noUiSlider.target // <div>
slider.getAttribute('disabled')

// methods
slider.noUiSlider.destroy()
slider.noUiSlider.steps()
slider.noUiSlider.on('string', function)
slider.noUiSlider.off('string')
slider.noUiSlider.get()
slider.noUiSlider.set(boolean|[])
slider.noUiSlider.setHandle(0, '', false)
slider.noUiSlider.reset()
slider.noUiSlider.updateOptions({})
slider.noUiSlider.pips(pips{})
slider.noUiSlider.removePips()
slider.noUiSlider.removeTooltips()

// events
slider.noUiSlider.on('start'|'slide'|'update'|'change'|'set'|'end', callback)
slider.noUiSlider.on('set.one', callback)    // namespaced events
slider.noUiSlider.on('change.one', callback)
slider.noUiSlider.off('.one')                // remove all events in the 'one' namespace
slider.noUiSlider.off()                      // remove all events
slider.noUiSlider.off('change')              // remove all 'change' events in any namespace

function callback(values=[], handle=0, unencoded=[], tap=false, positions=[]) { /*
	values:     current slider values
	handle:     handle that caused the event
	unencoded:  slider values without formatting
	tap:        event was caused by the user tapping the slider
	positions:  left offset of the handles */
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// options that need adding css classes

/* colored connect elements
.c-1-color { background: red; }
.c-2-color { background: yellow; }
.c-3-color { background: green; }
.c-4-color { background: blue; }
.c-5-color { background: purple; }
*/
var cls = ['c-1-color', 'c-2-color', 'c-3-color', 'c-4-color', 'c-5-color'];
slider.querySelectorAll('.noUi-connect')
	.forEach( (v,i) => v.classList.add(cls[i]) );

/* show tooltips only when sliding handles
.noUi-tooltip {
	display: none;
}
.noUi-active .noUi-tooltip {
	display: block;
}
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@