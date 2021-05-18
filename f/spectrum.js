/* includes:
spectrum.css
spectrum.js

cdn:
	https://cdn.jsdelivr.net/npm/spectrum-colorpicker/ 
*/

// basic
$('#colorpick').spectrum({
	color: '#f00',
	change: function (color) {
		$('#basic-log').text('change called: ' + color.toHexString());
	}
});
// <input type='text' id="colorpick" />
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
$('#full').spectrum({
	color: '#ECC',
	showInput: true,
	className: 'full-spectrum',
	showInitial: true,
	showPalette: true,
	showSelectionPalette: true,
	maxSelectionSize: 10,
	preferredFormat: 'hex',
	localStorageKey: 'spectrum.demo',
	\move: function (color) {
		
	},
	show: function () {
	
	},
	beforeShow: function () {
	
	},
	hide: function () {
	
	},
	change: function() {
		
	},
	palette: [
		['rgb(0, 0, 0)', 'rgb(67, 67, 67)', 'rgb(102, 102, 102)',
		'rgb(204, 204, 204)', 'rgb(217, 217, 217)','rgb(255, 255, 255)'],
		['rgb(152, 0, 0)', 'rgb(255, 0, 0)', 'rgb(255, 153, 0)', 'rgb(255, 255, 0)', 'rgb(0, 255, 0)',
		'rgb(0, 255, 255)', 'rgb(74, 134, 232)', 'rgb(0, 0, 255)', 'rgb(153, 0, 255)', 'rgb(255, 0, 255)'], 
		['rgb(230, 184, 175)', 'rgb(244, 204, 204)', 'rgb(252, 229, 205)', 'rgb(255, 242, 204)', 'rgb(217, 234, 211)', 
		'rgb(208, 224, 227)', 'rgb(201, 218, 248)', 'rgb(207, 226, 243)', 'rgb(217, 210, 233)', 'rgb(234, 209, 220)', 
		'rgb(221, 126, 107)', 'rgb(234, 153, 153)', 'rgb(249, 203, 156)', 'rgb(255, 229, 153)', 'rgb(182, 215, 168)', 
		'rgb(162, 196, 201)', 'rgb(164, 194, 244)', 'rgb(159, 197, 232)', 'rgb(180, 167, 214)', 'rgb(213, 166, 189)', 
		'rgb(204, 65, 37)', 'rgb(224, 102, 102)', 'rgb(246, 178, 107)', 'rgb(255, 217, 102)', 'rgb(147, 196, 125)', 
		'rgb(118, 165, 175)', 'rgb(109, 158, 235)', 'rgb(111, 168, 220)', 'rgb(142, 124, 195)', 'rgb(194, 123, 160)',
		'rgb(166, 28, 0)', 'rgb(204, 0, 0)', 'rgb(230, 145, 56)', 'rgb(241, 194, 50)', 'rgb(106, 168, 79)',
		'rgb(69, 129, 142)', 'rgb(60, 120, 216)', 'rgb(61, 133, 198)', 'rgb(103, 78, 167)', 'rgb(166, 77, 121)',
		'rgb(91, 15, 0)', 'rgb(102, 0, 0)', 'rgb(120, 63, 4)', 'rgb(127, 96, 0)', 'rgb(39, 78, 19)', 
		'rgb(12, 52, 61)', 'rgb(28, 69, 135)', 'rgb(7, 55, 99)', 'rgb(32, 18, 77)', 'rgb(76, 17, 48)']
	]
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// options
$('inp').spectrum({
	color: tinycolor,
	flat: bool,
	showInput: boolean,
	showInitial: bool,
	allowEmpty: bool,
	showAlpha: bool,
	disabled: bool,
	localStorageKey: string,
	showPalette: bool,
	showPaletteOnly: bool,
	togglePaletteOnly: bool,
	showSelectionPalette: bool,
	clickoutFiresChange: bool,
	cancelText: string,
	chooseText: string,
	togglePaletteMoreText: string,
	togglePaletteLessText: string,
	containerClassName: string,
	replacerClassName: string,
	preferredFormat: string,
	maxSelectionSize: int,
	palette: [[string]],
	selectionPalette: [string]
});
// or in html:
// <input data-show-alpha="true" />
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// methods

$('inp').spectrum('get').toHex()
$('inp').spectrum('get')
$('inp').spectrum('disable')
$('inp').spectrum('enable')

$('inp').spectrum('show')
$('inp').spectrum('hide')
$('inp').spectrum('toggle')
$('inp').spectrum('set', colorString)
$('inp').spectrum('container')
$('inp').spectrum('reflow')
$('inp').spectrum('destroy')
$('inp').spectrum('option', optionName)
$('inp').spectrum('option', optionName, newOptionValue)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// events
// add when initializing:
$('inp').spectrum({
	move: function(tinycolor) { },
	show: function(tinycolor) { },
	hide: function(tinycolor) { },
	beforeShow: function(tinycolor) { },
});

// add as event listeners:
$('inp').on('move.spectrum', function(e, tinycolor) {});
$('inp').on('show.spectrum', function(e, tinycolor) {});
$('inp').on('hide.spectrum', function(e, tinycolor) {});
$('inp').on('beforeShow.spectrum', function(e, tinycolor) {});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// use case example:
$el.spectrum({
	color: color || '#ecc',
	showInput: true,
	showAlpha: true,
	className: 'full-spectrum',
	showInitial: true,
	showPalette: true,
	showSelectionPalette: true,
	maxSelectionSize: 10,
	preferredFormat: 'hex',
	localStorageKey: 'spectrum',
	change: onChange,
	palette: [
		['rgb(0, 0, 0)', 'rgb(67, 67, 67)', 'rgb(102, 102, 102)',
		'rgb(204, 204, 204)', 'rgb(217, 217, 217)','rgb(255, 255, 255)'],
		['rgb(152, 0, 0)', 'rgb(255, 0, 0)', 'rgb(255, 153, 0)', 'rgb(255, 255, 0)', 'rgb(0, 255, 0)',
		'rgb(0, 255, 255)', 'rgb(74, 134, 232)', 'rgb(0, 0, 255)', 'rgb(153, 0, 255)', 'rgb(255, 0, 255)'], 
		['rgb(230, 184, 175)', 'rgb(244, 204, 204)', 'rgb(252, 229, 205)', 'rgb(255, 242, 204)', 'rgb(217, 234, 211)', 
		'rgb(208, 224, 227)', 'rgb(201, 218, 248)', 'rgb(207, 226, 243)', 'rgb(217, 210, 233)', 'rgb(234, 209, 220)', 
		'rgb(221, 126, 107)', 'rgb(234, 153, 153)', 'rgb(249, 203, 156)', 'rgb(255, 229, 153)', 'rgb(182, 215, 168)', 
		'rgb(162, 196, 201)', 'rgb(164, 194, 244)', 'rgb(159, 197, 232)', 'rgb(180, 167, 214)', 'rgb(213, 166, 189)', 
		'rgb(204, 65, 37)', 'rgb(224, 102, 102)', 'rgb(246, 178, 107)', 'rgb(255, 217, 102)', 'rgb(147, 196, 125)', 
		'rgb(118, 165, 175)', 'rgb(109, 158, 235)', 'rgb(111, 168, 220)', 'rgb(142, 124, 195)', 'rgb(194, 123, 160)',
		'rgb(166, 28, 0)', 'rgb(204, 0, 0)', 'rgb(230, 145, 56)', 'rgb(241, 194, 50)', 'rgb(106, 168, 79)',
		'rgb(69, 129, 142)', 'rgb(60, 120, 216)', 'rgb(61, 133, 198)', 'rgb(103, 78, 167)', 'rgb(166, 77, 121)',
		'rgb(91, 15, 0)', 'rgb(102, 0, 0)', 'rgb(120, 63, 4)', 'rgb(127, 96, 0)', 'rgb(39, 78, 19)', 
		'rgb(12, 52, 61)', 'rgb(28, 69, 135)', 'rgb(7, 55, 99)', 'rgb(32, 18, 77)', 'rgb(76, 17, 48)']
	]
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@