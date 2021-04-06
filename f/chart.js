// https://cdn.jsdelivr.net/npm/chart.js/
Chart.defaults = {
	font: {
		family:      "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" | '',
		size:        12,
		style:       'normal|italic|oblique|revert|unset|initial|inherit | bold',
		weight:      '',
		lineHeight:  1.2 | ''
	}
}

const chart = new Chart(ctx=HTMLCanvasElement | CanvasRenderingContext2D | $ctx | 'id', config={
	type:    'line|bar|pie|doughnut|scatter|bubble|radar|polarArea',
	data: {
		labels:   [ '', '', ...],
		datasets: [ {}, {}, ...
			{
				// most props also accept an array of same type of values: (I think)
				prop: value | [ value, value, ... ]
				
				label:                     '',
				data:                      [ 0|{},  ... ]  |  {},
				type:                      'line|bar|pie|...', // for mixed charts (change the type of this dataset)
				order:                     0,
				xAxisID:                   'first x axis',
				yAxisID:                   'first y axis',
				
				// shared (mostly)
				backgroundColor:           'rgba(0, 0, 0, 0.1)' | ['',...],
				borderAlign:               undefined | 'center|inner' if 'pie|doughnut|polarArea',
				borderCapStyle:            'butt',
				borderColor:               'rgba(0, 0, 0, 0.1)' | ['',...] | '#fff' if 'pie|doughnut|polarArea',
				borderDash:                [],
				borderDashOffset:          0.0,
				borderJoinStyle:           'miter',
				borderSkipped:             undefined | ('bottom|left|top|right' | false) if 'bar',
				borderWidth:               3 | 2 if 'pie|doughnut' | ( 0 | {left:0,right:0,top:0,bottom:0} ) if 'bar',
				cubicInterpolationMode:    'default | monotone',
				clip:                      (this.borderWidth / 2) | {},
				fill:                      true | '',
				hoverBackgroundColor:      '',
				hoverBorderCapStyle:       '',
				hoverBorderColor:          '',
				hoverBorderDash:           undefined | [],
				hoverBorderDashOffset:     undefined | 0,
				hoverBorderJoinStyle:      '',
				hoverBorderWidth:          undefined | 0 | 1 if 'bubble',
				lineTension:               0.4 if 'line' | 0 if 'radar',
				pointBackgroundColor:      'rgba(0, 0, 0, 0.1)',
				pointBorderColor:          'rgba(0, 0, 0, 0.1)',
				pointBorderWidth:          1,
				pointHitRadius:            1,
				pointHoverBackgroundColor: '',
				pointHoverBorderColor:     '',
				pointHoverBorderWidth:     1,
				pointHoverRadius:          4,
				pointRadius:               3,
				pointRotation:             0,
				pointStyle:                'circle' | HTMLImageElement | ('circle' | undefined) if 'bubble',
				rotation:                  undefined | 0 if 'bubble' | (-0.5 * Math.PI) if 'pie|doughnut'
				showLine:                  false,
				spanGaps:                  false,
				weight:                    undefined | 0 if 'pie|doughnut',
				stack:                     '',
				parsing:                   false | {},
				hidden:                    false,
				
				// bar only
				barPercentage:             0.9,
				categoryPercentage:        0.8,
				barThickness:              undefined | 0 | 'flex|...',
				maxBarThickness:           undefined | 0,
				minBarLength:              undefined | 0,
				
				// pie|doughnut only
				cutoutPercentage:          50,
				circumference:             2 * Math.PI, 	
				
				// polarArea only
				startAngle:                -0.5 * Math.PI,
				
				// bubble/scatter only
				radius:                    3,
				
				animation.animateRotate:   undefined | true  if 'pie|doughnut|plotArea'
				animation.animateScale:    undefined | false if 'pie|doughnut' | true if 'polarArea'
			}
		]
	},
	options: opts
});

const opts = {
	maintainAspectRatio:         true,
	responsive:                  true,
	responsiveAnimationDuration: 0,
	
	layout: {
		padding:   0 | {top: 0, right: 0, bottom: 0,  left: 50}
	}
	
	title: {
		display:    false,
		position:   'top|left|bottom|right',
		fontColor:  '#666',
		fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
		fontSize:   12,
		fontStyle:  'bold',
		padding:    10,
		lineHeight: 1.2 | '',
		text:       '',
		fullWidth:  true,
		weight:     2000
	},
	
	legend: {
		display:          true,
		position:         'top|left|bottom|right',
		align:            'center|start|end',
		maxHeight:        0,
		maxWidth:         0,
		fullSize:         true,
		reverse:          false,
		rtl:              undefined,
		textDirection:    canvas.ltr | canvas.style.textDirection | '',
		onClick:          () =>,
		onHover:          null | () =>,
		onLeave:          null | () =>,
		labels:        {
			boxWidth:       40,
			boxHeight:      font.size | 0,
			color:          Chart.defaults.color | '',
			font:           Chart.defaults.font  | '',
			padding:        10,
			pointStyle:     '',
			usePointStyle:  false,
			generateLabels:	()=>,
			filter:	        (LegendItem, Chart)=>,
			sort:           (LegendItem, LegendItem, data)=>
		},
		
		interface LegendItem {
			text:           '',
			datasetIndex:   0,
			fillStyle:      '',
			hidden:         false,
			lineCap:        '',
			lineDash:       [0,...],
			lineDashOffset: 0,
			lineJoin:       '',
			lineWidth:      0,
			strokeStyle:    '',
			pointStyle:     '' | HTMLImageElement.href,
			rotation:       0,
		}
	},
	
	scales: {
		'x | y | ...': {
			display:                    true | 'auto',
			position:                   'left|right|top|bottom',
			offset:                     false,
			type:                       'linear|radialLinear|category' | '',
			id:                         '',
			weight:                     0,
			callbacks:                  {}, // https://www.chartjs.org/docs/latest/axes/#callbacks
			distribution:               'linear|series',
			bounds:                     'data|ticks',
			grid: {
				borderColor:          '',
				borderWidth:          0,
				borderDash:           [0,...],
				borderDashOffset:     0.0,
				circular:             false,
				color:                'rgba(0,0,0,0.1)',
				display:              true,
				drawBorder:           true,
				drawOnChartArea:      true,
				drawTicks:            true,
				lineWidth:            1,
				offset:               false,
				tickBorderDash:       [0,...],
				tickBorderDashOffset: 0,
				tickColor:            '',
				tickLength:           8,
				tickWidth:            0,
				z:                    0,
			},
			title: {
				display:                  false,
				align:                    ,
				text:                     '' | ['',...],
				color:                    Chart.defaults.color | '',
				font:                     Chart.defaults.font  | {},
				padding:                  4 | {top: 4, bottom: 4}
			},
			ticks: {		
				autoSkip:                 true,
				autoSkipPadding:          0,
				beginAtZero:              false,
				callback:                 (value, index, values)=> '',
				display:                  true,
				labelOffset:              0,
				labels:                   ['',...],
				major:                    {},
				max:                      0 | '',
				maxRotation:              50,
				maxTicksLimit:            11
				min:                      0 | '',
				minor:                    {},
				minRotation:              0,
				mirror:                   false,
				padding:                  0,
				precision:                0,
				reverse:                  false,
				sampleSize:               ticks.length,
				source:                   'auto|data|labels',
				stepSize:                 0,
				suggestedMax:             0,
				suggestedMin:             0,
			}
		},
		'time': {
			displayFormats:             {},
			isoWeekday:                 false,
			parser:                     '' | ()=>,
			round:                      '',
			tooltipFormat:              '',
			unit:                       '' | 'millisecond|second|minute|hour|day|week|month|quarter|year',
			stepSize:                   1,
			minUnit:                    'millisecond',
		}
	},
	
	tooltips: {
		backgroundColor:    'rgba(0,0,0,0.8)',
		bodyFontColor:      '#fff',
		bodyFontFamily:     "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
		bodyFontSize:       12,
		bodyFontStyle:      'normal',
		bodyAlign:          'left|right|center',
		bodySpacing:        2,
		borderColor:        'rgba(0,0,0,0)',
		borderWidth:        0,
		caretPadding:       2,
		caretSize:          5,
		cornerRadius:       6,
		custom:             null | (tooltipModel)=>,
		displayColors:      true,
		enabled:            true,
		filter:             (TooltipItem)=>,
		footerAlign:        'left|right|center',
		footerFontColor:    '#fff',
		footerFontFamily:   "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
		footerFontSize:     12,
		footerFontStyle:    'bold',
		footerMarginTop:    6,
		footerSpacing:      2,
		itemSort:           (TooltipItem)=>
		intersect:          true,
		mode:               'nearest|point|index|dataset|x|y',
		multiKeyBackground: '#fff',
		position:           'average|nearest',
		rtl:                false
		textDirection:      canvas.ltr | canvas.style.textDirection | '',
		titleAlign:         'left|right|center',
		titleFontColor:     '#fff',
		titleFontFamily:    "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
		titleFontSize:      12
		titleFontStyle:     'bold',
		titleMarginBottom:  6,
		titleSpacing:       2,
		xPadding:           6,
		yPadding:           6,
		callbacks:          {
			f: (TooltipItem|TooltipItem[], Chart|{})=>'',
			label:                  (TooltipItem, {})=>'',
			(before|after)Label:    ...,
			title:                  (TooltipItem[], {})=>'',
			footer:                 ...,
			(before|after)Title:    ...,
			(before|after)Body:     ...,
			(before|after)Footer:   ...,
			label(Color|TextColor): (TooltipItem, Chart)=>''
		},
		
		interface TooltipItem {
			label:        '',
			value:        '',
			xLabel:       0 | '',
			yLabel:       0 | '',
			datasetIndex: 0,
			index:        0,
			x:            0,
			y:            0,
		}
	},
	
	elements: {
		arc: {
			backgroundColor:  'rgba(0,0,0,0.1)',
			borderColor:      '#fff',
			borderWidth:      2,
			borderAlign:      'center'
			ange:             0,
		},
		line: {
			tension:          0.4,
			backgroundColor:  'rgba(0,0,0,0.1)',
			borderWidth:      3,
			borderColor:      'rgba(0,0,0,0.1)',
			borderCapStyle:   'butt',
			borderDash:       [],
			borderDashOffset: 0,
			borderJoinStyle:  'miter',
			capBezierPoints:  true,
			fill:             true
		},
		point: {
			radius:           3,
			pointStyle:       'circle',
			backgroundColor:  'rgba(0,0,0,0.1)',
			borderColor:      'rgba(0,0,0,0.1)',
			borderWidth:      1,
			hitRadius:        1,
			hoverRadius:      4,
			hoverBorderWidth: 1
		},
		bar: {
			backgroundColor:  'rgba(0,0,0,0.1)',
			borderColor:      'rgba(0,0,0,0.1)',
			borderSkipped:    'bottom',
			borderWidth:       0
		}
	},
	
	animation: {
		duration:           1000,
		easing:             'easeOutQuart',
		onProgress:         null | ani => ani.animationObject, // {chart, currentStep, numSteps, ...}
		onComplete:         null | ani => ani.animationObject
	},
	
	hover: {
		onHover:   null,
		mode:      'nearest',
		intersect: true
	},
	
};

// methods
Chart.getChart(key)
chart.destroy()
chart.update(?mode)
chart.reset()
chart.render()
chart.stop()
chart.resize(?width, ?height)
chart.clear()
chart.toBase64Image(?type, ?quality)
chart.generateLegend()
chart.getElementsAtEventForMode(e, mode, options, useFinalPosition)
chart.getDatasetMeta(index)
chart.setDatasetVisibility(datasetIndex, visibility)
chart.toggleDataVisibility(index)
chart.getDataVisibility(index)
chart.hide(datasetIndex)
chart.show(datasetIndex)
chart.setActiveElements(activeElements)

// update chart example
chart.data.datasets[0].data[2] = 50;
chart.update();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function plotPie(series=[], w=600, h=400) {
	var div = document.createElement('div');
	div.style.width = w;
	div.style.height = h;
	div.innerHTML = '<canvas width="'+w+'" height="'+h+'"></canvas>';
	document.body.append(div);
	
	var colors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];
	var chart = new Chart(div.children[0], {
		type: 'pie',
		data: {
			labels: series.map(i => i[0]),
			datasets: [
				{
					backgroundColor: series.map((v,i) => colors[i]),
					data:            series.map(i => i[1]),
				}
			]
		},
		options: { legend: {position:'bottom'} }
	});
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// defaults ref