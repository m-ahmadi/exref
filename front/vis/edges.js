edges: {
	arrows: {
		to: {
			enabled: false,
			scaleFactor: 1,
			type: 'arrow'
		},
		middle: {
			enabled: false,
			scaleFactor: 1,
			type: 'arrow'
		},
		from: {
			enabled: false,
			scaleFactor: 1,
			type: 'arrow'
		}
	},
	arrowStrikethrough: true,
	chosen: true,
	color: {
		color: '#848484',
		highlight: '#848484',
		hover: '#848484',
		inherit: 'from',
		opacity: 1.0
	},
	dashes: false,
	font: {
		color: '#343434',
		size: 14, // px
		face: 'arial',
		background: 'none',
		strokeWidth: 2, // px
		strokeColor: '#ffffff',
		align: 'horizontal',
		multi: false,
		vadjust: 0,
		bold: {
			color: '#343434',
			size: 14, // px
			face: 'arial',
			vadjust: 0,
			mod: 'bold'
		},
		ital: {
			color: '#343434',
			size: 14, // px
			face: 'arial',
			vadjust: 0,
			mod: 'italic',
		},
		boldital: {
			color: '#343434',
			size: 14, // px
			face: 'arial',
			vadjust: 0,
			mod: 'bold italic'
		},
		mono: {
			color: '#343434',
			size: 15, // px
			face: 'courier new',
			vadjust: 2,
			mod: ''
		}
	},
	hidden: false,
	hoverWidth: 1.5,
	label: undefined,
	labelHighlightBold: true,
	length: undefined,
	physics: true,
	scaling: {
		min: 1,
		max: 15,
		label: {
			enabled: true,
			min: 14,
			max: 30,
			maxVisible: 30,
			drawThreshold: 5
		},
		customScalingFunction: function (min, max, total, value) {
			if (max === min) {
				return 0.5;
			} else {
				var scale = 1 / (max - min);
				return Math.max(0, (value - min) * scale);
			}
		}
	},
	selectionWidth: 1,
	selfReferenceSize: 20,
	shadow: {
		enabled: false,
		color: 'rgba(0,0,0,0.5)',
		size: 10,
		x: 5,
		y: 5
	},
	smooth: {
		enabled: true,
		type: "dynamic", // 'continuous', 'discrete', 'diagonalCross', 'straightCross', 'horizontal', 'vertical', 'curvedCW', 'curvedCCW', 'cubicBezier'
		roundness: 0.5
	},
	title: undefined,
	value: undefined,
	width: 1,
	widthConstraint: false
};
