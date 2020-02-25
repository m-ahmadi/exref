nodes: {
	borderWidth: 1,
	borderWidthSelected: 2,
	brokenImage: undefined,
	chosen: true,
	color: {
		border: '#2B7CE9',
		background: '#97C2FC',
		highlight: {
			border: '#2B7CE9',
			background: '#D2E5FF'
		},
		hover: {
			border: '#2B7CE9',
			background: '#D2E5FF'
		}
	},
	fixed: {
		x: false,
		y: false
	},
	font: {
		color: '#343434',
		size: 14, // px
		face: 'arial',
		background: 'none',
		strokeWidth: 0, // px
		strokeColor: '#ffffff',
		align: 'center',
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
	group: undefined,
	heightConstraint: false,
	hidden: false,
	icon: {
		face: 'FontAwesome',
		code: undefined,
		size: 50, //50,
		color: '#2B7CE9'
	},
	image: undefined,
	label: undefined,
	labelHighlightBold: true,
	level: undefined,
	mass: 1,
	physics: true,
	scaling: {
		min: 10,
		max: 30,
		label: {
			enabled: false,
			min: 14,
			max: 30,
			maxVisible: 30,
			drawThreshold: 5
		},
		customScalingFunction: function (min, max, total, value) {
			if (max === min) {
				return 0.5;
			} else {
				let scale = 1 / (max - min);
				return Math.max(0, (value - min) * scale);
			}
		}
	},
	shadow: {
		enabled: false,
		color: 'rgba(0,0,0,0.5)',
		size: 10,
		x: 5,
		y: 5
	},
	shape: 'ellipse',
	shapeProperties: {
		borderDashes: false, // only for borders
		borderRadius: 6, // only for box shape
		interpolation: false, // only for image and circularImage shapes
		useImageSize: false, // only for image and circularImage shapes
		useBorderWithImage: false // only for image shape
	}
	size: 25,
	title: undefined,
	value: undefined,
	widthConstraint: false,
	x: undefined,
	y: undefined
};