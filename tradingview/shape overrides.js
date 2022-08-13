shape: 'trend_line',
overrides: {
	linecolor: 'rgba( 21, 153, 128, 1)', // #159980
	linewidth: 1.0,
	linestyle: 0, // 0: solid, 1: dotted, 2: dashed
	extendLeft: false,
	extendRight: false,
	leftEnd: 0,
	rightEnd: 0,
	font: 'Verdana',
	textcolor: 'rgba( 21, 119, 96, 1)', // #157760
	fontsize: 12,
	bold:false,
	italic:false,
	snapTo45Degrees:true,
	alwaysShowStats: false,
	showPriceRange: false,
	showBarsRange: false,
	showDateTimeRange: false,
	showDistance:false,
	showAngle: false
}
shape: 'arrow',
	overrides: {
	linewidth: 2
	rightEnd: 1
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
shape: 'text',
overrides: {
	backgroundColor: '#9bbed5',
	backgroundTransparency: 70,
	bold: false,
	borderColor: '#667b8b',
	color: '#667b8b',
	drawBorder: false,
	fillBackground: false,
	fixedSize: true,
	font: 'Verdana',
	fontsize: 20,
	italic: false,
	text: 'Text',
	wordWrap: false,
	wordWrapWidth: 400
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// generic possible values:
linestyle: 0 | 1 | 2 | 3 // 0 solid, 1 dotted, 2 dashed, 3 large dashed
linewidth: 1 | 2 | 3 | 4
horzLabelsAlign: 'center' | 'left' | 'right'
vertLabelsAlign: 'top' | 'middle' | 'bottom'
leftEnd, rightEnd: 0 | 1 // 0 normal, 1 arrow