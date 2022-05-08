$(selector).sparkline(values=[0,..] | 'html', options={
	type:               'line|bar|tristate|discrete|bullet|pie|box',
	width:              'auto|<num><unit>',
	height:             'auto|<num><unit>',
	lineColor:          '<color>' if 'line' | 'discrete',
	fillColor:          '' | false,
	chartRangeMin:      Math.min(...values) | 0,
	chartRangeMax:      Math.max(...values) | 0,
	composite:          false,
	enableTagOptions:   false,
	tagOptionPrefix:    'spark',
	tagValuesAttribute: 'values',
	disableHiddenCheck: false,
});

$.fn.sparkline.defaults = {
	common: {
		type:                  'line',
		lineColor:             '#00f',
		fillColor:             '#cdf',
		defaultPixelsPerValue: 3,
		width:                 'auto',
		height:                'auto',
		composite:             false,
		tagValuesAttribute:    'values',
		tagOptionsPrefix:      'spark',
		enableTagOptions:      false,
		enableHighlight:       true,
		highlightLighten:      1.4,
		tooltipSkipNull:       true,
		tooltipPrefix:         '',
		tooltipSuffix:         '',
		disableHiddenCheck:    false,
		numberFormatter:       false,
		numberDigitGroupCount: 3,
		numberDigitGroupSep:   ',',
		numberDecimalMark:     '.',
		disableTooltips:       false,
		disableInteraction:    false,
	},
	line: {
		spotColor:          '#f80',
		highlightSpotColor: '#5f5',
		highlightLineColor: '#f22',
		spotRadius:         1.5,
		minSpotColor:       '#f80',
		maxSpotColor:       '#f80',
		lineWidth:          1,
		normalRangeColor:   '#ccc',
		drawNormalOnTop:    false,
		tooltipFormat: {
			format: '<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}'
		}
	},
	bar: {
		barColor:        '#3366cc',
		negBarColor:     '#f44',
		stackedBarColor: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#66aa00', '#dd4477', '#0099c6', '#990099'],
		zeroAxis:        true,
		barWidth:        4,
		barSpacing:      1,
		chartRangeClip:  false,
		tooltipFormat: {
			format: '<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}'
		}
	},
	tristate: {
		barWidth:      4,
		barSpacing:    1,
		posBarColor:   '#6f6',
		negBarColor:   '#f44',
		zeroBarColor:  '#999',
		colorMap:      {},
		tooltipFormat: {
			format: '<span style="color: {{color}}">&#9679;</span> {{value:map}}'
		},
		tooltipValueLookups: {
			map: {
				0: 'Draw',
				1: 'Win',
				'-1': 'Loss'
			}
		}
	},
	discrete: {
		lineHeight:     'auto',
		thresholdValue: 0,
		chartRangeClip: false,
		tooltipFormat:  {format: '{{prefix}}{{value}}{{suffix}}'}
	},
	bullet: {
		targetColor:         '#f33',
		targetWidth:         3,
		performanceColor:    '#33f',
		rangeColors:         ['#d3dafe', '#a8b6ff', '#7f94ff'],
		tooltipFormat:       {format: '{{fieldkey:fields}} - {{value}}'},
		tooltipValueLookups: {fields: {r:'Range', p:'Performance', t:'Target'}}
	},
	pie: {
		offset:        0,
		sliceColors:   ['#3366cc', '#dc3912', '#ff9900', '#109618', '#66aa00', '#dd4477', '#0099c6', '#990099'],
		borderWidth:   0,
		borderColor:   '#000',
		tooltipFormat: {format: '<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)'}
	},
	box: {
		raw:              false,
		boxLineColor:     '#000',
		boxFillColor:     '#cdf',
		whiskerColor:     '#000',
		outlierLineColor: '#333',
		outlierFillColor: '#fff',
		medianColor:      '#f00',
		showOutliers:     true,
		outlierIQR:       1.5,
		spotRadius:       1.5,
		targetColor:      '#4a2',
		tooltipFormat:    {format: '{{field:fields}}: {{value}}'},
		tooltipFormatFieldlistKey: 'field',
		tooltipValueLookups: {
			fields: {
				lq: 'Lower Quartile',
				med: 'Median',
				uq: 'Upper Quartile',
				lo: 'Left Outlier',
				ro: 'Right Outlier',
				lw: 'Left Whisker',
				rw: 'Right Whisker'
			}
		}
	}
}