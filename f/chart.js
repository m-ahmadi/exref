/* includes:
Chart.css (optional)
Chart.js
*/
const chart = new Chart(ctx=HTMLCanvasElement | CanvasRenderingContext2D | $ctx | 'id', config={
	type:    'line|bar|horizontalBar|pie|doughnut|scatter|bubble|radar|polarArea',
	data: {
		labels:   [ '', '', ...],
		datasets: [ {}, {}, ...
			{
				// most props also accept an array of same type of values: (I think)
				prop: value | [ value, value, ... ]
				
				label:                     '',
				data:                      [ 0|{},  ... ],
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
				steppedLine:               false|''
				weight:                    undefined | 0 if 'pie|doughnut'
				
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
		position:   'top | left | bottom | right',
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
		position:         'top | left | bottom | right',
		align:            'center | start | end',
		fullWidth:        true,
		reverse:          false,
		weight:           1000,
		rtl:              undefined,
		textDirection:    canvas.ltr | canvas.style.textDirection | '',
		onClick:          () =>,
		onHover:          null | () =>,
		onLeave:          null | () =>,
		labels:        {
			boxWidth:       40,
			fontColor:      '#666',
			fontFamily:     "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
			fontSize:       12,
			fontStyle:      'normal',
			padding:        10,
			usePointStyle:  false,
			generateLabels:	()=>,
			filter:	        (LegendItem, Chart)=>,
		},
		
		interface LegendItem {
			text:           '',
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
		'xAxes | yAxes | ...': [
			{}, {}, ...
			{
				display:                    true | 'auto',
				position:                   'left | right | top | bottom',
				offset:                     false,
				type:                       'linear | radialLinear | category' | '',
				id:                         '',
				weight:                     0,
				callbacks:                  {}, // https://www.chartjs.org/docs/latest/axes/#callbacks
				distribution:               'linear|series',
				bounds:                     'data | ticks',
				gridLines: {
					display:                  true,
					color:                    'rgba(0,0,0,0.1)',
					lineWidth:                1,
					drawBorder:               true,
					drawOnChartArea:          true,
					drawTicks:                true,
					tickMarkLength:           10,
					zeroLineWidth:            1,
					zeroLineColor:            'rgba(0,0,0,0.25)',
					zeroLineBorderDash:       [],
					zeroLineBorderDashOffset: 0,
					offsetGridLines:          false,
					borderDash:               [],
					borderDashOffset:         0
				},
				scaleLabel: {
					display:                  false,
					labelString:              '',
					lineHeight:               1.2 | '',
					fontColor:                '#666',
					fontFamily:               "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" | '',
					fontSize:                 12,
					fontStyle:                'normal|italic|oblique|revert|unset|initial|inherit | bold',
					padding:                  4 | {top: 4, bottom: 4}
				},
				ticks: {		
					autoSkip:                 true,
					autoSkipPadding:          0,
					beginAtZero:              false,
					callback:                 (value, index, values)=> '',
					display:                  true,
					labelOffset:              0,
					labels:                   ['', ...],
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
					source:                   'auto | data | labels',
					stepSize:                 0,
					suggestedMax:             0,
					suggestedMin:             0,
				}
			},
			time: {
				displayFormats:             {},
				isoWeekday:                 false,
				parser:                     '' | ()=>,
				round:                      '',
				tooltipFormat:              '',
				unit:                       '' | 'millisecond | second | minute | hour | day | week | month | quarter | year',
				stepSize:                   1,
				minUnit:                    'millisecond',
			}
		]
	},
	
	tooltips: {
		backgroundColor:    'rgba(0,0,0,0.8)',
		bodyFontColor:      '#fff',
		bodyFontFamily:     "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
		bodyFontSize:       12,
		bodyFontStyle:      'normal',
		bodyAlign:          'left | right | center',
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
		footerAlign:        'left | right | center',
		footerFontColor:    '#fff',
		footerFontFamily:   "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
		footerFontSize:     12,
		footerFontStyle:    'bold',
		footerMarginTop:    6,
		footerSpacing:      2,
		itemSort:           (TooltipItem)=>
		intersect:          true,
		mode:               'nearest | point | index | dataset | x | y',
		multiKeyBackground: '#fff',
		position:           'average | nearest',
		rtl:                false
		textDirection:      canvas.ltr | canvas.style.textDirection | '',
		titleAlign:         'left | right | center',
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
			backgroundColor: 'rgba(0,0,0,0.1)',
			borderColor: '#fff',
			borderWidth: 2,
			borderAlign: 'center'
		},
		line: {
			tension: 0.4,
			backgroundColor: 'rgba(0,0,0,0.1)',
			borderWidth: 3,
			borderColor: 'rgba(0,0,0,0.1)',
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0,
			borderJoinStyle: 'miter',
			capBezierPoints: true,
			fill: true
		},
		point: {
			radius: 3,
			pointStyle: 'circle',
			backgroundColor: 'rgba(0,0,0,0.1)',
			borderColor: 'rgba(0,0,0,0.1)',
			borderWidth: 1,
			hitRadius: 1,
			hoverRadius: 4,
			hoverBorderWidth: 1
		},
		rectangle: {
			backgroundColor: 'rgba(0,0,0,0.1)',
			borderColor: 'rgba(0,0,0,0.1)',
			borderSkipped: 'bottom',
			borderWidth: 0
		}
	},
	
	animation: {
		duration:           1000,
		easing:             'easeOutQuart',
		onProgress:         null | ani => ani.animationObject, // {chart, currentStep, numSteps, ...}
		onComplete:         null | ani => ani.animationObject
	},
	
};

// methods
chart.destroy()
chart.update(config)
chart.reset()
chart.render(config)
chart.stop()
chart.resize()
chart.clear()
chart.toBase64Image()
chart.generateLegend()
chart.getElementAtEvent(e)
chart.getElementsAtEvent(e)
chart.getDatasetAtEvent(e)
chart.getDatasetMeta(index)

// update chart example
chart.data.datasets[0].data[2] = 50;
chart.update();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
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
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// defaults ref
Chart.defaults = {
	global: {
		defaultColor: 'rgba(0,0,0,0.1)',
		defaultFontColor: '#666',
		defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
		defaultFontSize: 12,
		defaultFontStyle: 'normal',
		defaultLineHeight: 1.2,
		showLines: true,
		animation: {
			duration: 1000,
			easing: 'easeOutQuart',
			onProgress: null,
			onComplete: null
		},
		elements: {
			arc: {
				backgroundColor: 'rgba(0,0,0,0.1)',
				borderColor: '#fff',
				borderWidth: 2,
				borderAlign: 'center'
			},
			line: {
				tension: 0.4,
				backgroundColor: 'rgba(0,0,0,0.1)',
				borderWidth: 3,
				borderColor: 'rgba(0,0,0,0.1)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0,
				borderJoinStyle: 'miter',
				capBezierPoints: true,
				fill: true
			},
			point: {
				radius: 3,
				pointStyle: 'circle',
				backgroundColor: 'rgba(0,0,0,0.1)',
				borderColor: 'rgba(0,0,0,0.1)',
				borderWidth: 1,
				hitRadius: 1,
				hoverRadius: 4,
				hoverBorderWidth: 1
			},
			rectangle: {
				backgroundColor: 'rgba(0,0,0,0.1)',
				borderColor: 'rgba(0,0,0,0.1)',
				borderSkipped: 'bottom',
				borderWidth: 0
			}
		},
		datasets: {
			bar: {
				categoryPercentage: 0.8,
				barPercentage: 0.9
			},
			horizontalBar: {
				categoryPercentage: 0.8,
				barPercentage: 0.9
			},
			scatter: {
				showLine: false
			}
		},
		layout: {
			padding: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0
			}
		},
		plugins: {
			filler: {
				propagate: true
			}
		},
		tooltips: {
			enabled: true,
			custom: null,
			mode: 'nearest',
			position: 'average',
			intersect: true,
			backgroundColor: 'rgba(0,0,0,0.8)',
			titleFontStyle: 'bold',
			titleSpacing: 2,
			titleMarginBottom: 6,
			titleFontColor: '#fff',
			titleAlign: 'left',
			bodySpacing: 2,
			bodyFontColor: '#fff',
			bodyAlign: 'left',
			footerFontStyle: 'bold',
			footerSpacing: 2,
			footerMarginTop: 6,
			footerFontColor: '#fff',
			footerAlign: 'left',
			yPadding: 6,
			xPadding: 6,
			caretPadding: 2,
			caretSize: 5,
			cornerRadius: 6,
			multiKeyBackground: '#fff',
			displayColors: true,
			borderColor: 'rgba(0,0,0,0)',
			borderWidth: 0,
			callbacks: {}
		},
		events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
		hover: {
			onHover: null,
			mode: 'nearest',
			intersect: true,
			animationDuration: 400
		},
		onClick: null,
		maintainAspectRatio: true,
		responsive: true,
		responsiveAnimationDuration: 0,
		legend: {
			display: true,
			position: 'top',
			align: 'center',
			fullWidth: true,
			reverse: false,
			weight: 1000,
			onHover: null,
			onLeave: null,
			labels: {
				boxWidth: 40,
				padding: 10
			}
		},
		title: {
			display: false,
			fontStyle: 'bold',
			fullWidth: true,
			padding: 10,
			position: 'top',
			text: '',
			weight: 2000
		}
	},
	bar: {
		hover: {
			mode: 'label'
		},
		scales: {
			xAxes: [{
				type: 'category',
				offset: true,
				gridLines: {
					offsetGridLines: true
				}
			}
			],
			yAxes: [{
				type: 'linear'
			}
			]
		}
	},
	bubble: {
		hover: {
			mode: 'single'
		},
		scales: {
			xAxes: [{
				type: 'linear',
				position: 'bottom',
				id: 'x-axis-0'
			}
			],
			yAxes: [{
				type: 'linear',
				position: 'left',
				id: 'y-axis-0'
			}
			]
		},
		tooltips: {
			callbacks: {}
		}
	},
	doughnut: {
		animation: {
			animateRotate: true,
			animateScale: false
		},
		hover: {
			mode: 'single'
		},
		legend: {
			labels: {}
		},
		cutoutPercentage: 50,
		rotation: -1.5707963267948966,
		circumference: 6.283185307179586,
		tooltips: {
			callbacks: {}
		}
	},
	horizontalBar: {
		hover: {
			mode: 'index',
			axis: 'y'
		},
		scales: {
			xAxes: [{
				type: 'linear',
				position: 'bottom'
			}
			],
			yAxes: [{
				type: 'category',
				position: 'left',
				offset: true,
				gridLines: {
					offsetGridLines: true
				}
			}
			]
		},
		elements: {
			rectangle: {
				borderSkipped: 'left'
			}
		},
		tooltips: {
			mode: 'index',
			axis: 'y'
		}
	},
	line: {
		showLines: true,
		spanGaps: false,
		hover: {
			mode: 'label'
		},
		scales: {
			xAxes: [{
				type: 'category',
				id: 'x-axis-0'
			}
			],
			yAxes: [{
				type: 'linear',
				id: 'y-axis-0'
			}
			]
		}
	},
	polarArea: {
		scale: {
			type: 'radialLinear',
			angleLines: {
				display: false
			},
			gridLines: {
				circular: true
			},
			pointLabels: {
				display: false
			},
			ticks: {
				beginAtZero: true
			}
		},
		animation: {
			animateRotate: true,
			animateScale: true
		},
		startAngle: -1.5707963267948966,
		legend: {
			labels: {}
		},
		tooltips: {
			callbacks: {}
		}
	},
	pie: {
		animation: {
			animateRotate: true,
			animateScale: false
		},
		hover: {
			mode: 'single'
		},
		legend: {
			labels: {}
		},
		cutoutPercentage: 0,
		rotation: -1.5707963267948966,
		circumference: 6.283185307179586,
		tooltips: {
			callbacks: {}
		}
	},
	radar: {
		spanGaps: false,
		scale: {
			type: 'radialLinear'
		},
		elements: {
			line: {
				fill: 'start',
				tension: 0
			}
		}
	},
	scatter: {
		hover: {
			mode: 'single'
		},
		scales: {
			xAxes: [{
				id: 'x-axis-1',
				type: 'linear',
				position: 'bottom'
			}
			],
			yAxes: [{
				id: 'y-axis-1',
				type: 'linear',
				position: 'left'
			}
			]
		},
		tooltips: {
			callbacks: {}
		}
	},
	scale: {
		display: true,
		position: 'left',
		offset: false,
		gridLines: {
			display: true,
			color: 'rgba(0,0,0,0.1)',
			lineWidth: 1,
			drawBorder: true,
			drawOnChartArea: true,
			drawTicks: true,
			tickMarkLength: 10,
			zeroLineWidth: 1,
			zeroLineColor: 'rgba(0,0,0,0.25)',
			zeroLineBorderDash: [],
			zeroLineBorderDashOffset: 0,
			offsetGridLines: false,
			borderDash: [],
			borderDashOffset: 0
		},
		scaleLabel: {
			display: false,
			labelString: '',
			padding: {
				top: 4,
				bottom: 4
			}
		},
		ticks: {
			beginAtZero: false,
			minRotation: 0,
			maxRotation: 50,
			mirror: false,
			padding: 0,
			reverse: false,
			display: true,
			autoSkip: true,
			autoSkipPadding: 0,
			labelOffset: 0,
			minor: {},
			major: {}
		}
	}
}