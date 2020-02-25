/* includes:
Chart.css (optional?)
Chart.js
*/

// <canvas id="myChart" width="400" height="400"></canvas>

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
  type: 'bar', // 'line'
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

// another example:
var ctx = document.getElementById('myChart').getContext('2d');
var data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fillColor: 'rgba(220,220,220,0.2)',
      strokeColor: 'rgba(220,220,220,1)',
      pointColor: 'rgba(220,220,220,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(220,220,220,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: 'My Second dataset',
      fillColor: 'rgba(151,187,205,0.2)',
      strokeColor: 'rgba(151,187,205,1)',
      pointColor: 'rgba(151,187,205,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(151,187,205,1)',
      data: [28, 48, 40, 19, 86, 27, 90]
    }
  ]
};
var myLineChart = new Chart(ctx).Line(data);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ref

// all valid:
const ctx = document.getElementById('myChart');
const ctx = document.getElementById('myChart').getContext('2d');
const ctx = $('#myChart');
const ctx = 'myChart';


const myChart = new Chart(ctx, {
	type: 'line'|'bar'|...,
	data: data,
	options: opts
});


const opts = {
	layout: {
		padding: 0 | {top: 0, right: 0, bottom: 0,  left: 50}
	}
	title: {
		display: false,
		position: 'top'|'left'|'bottom'|'right',
		fontSize: this.parent.defaultFontSize
		fontStyle: 'bold',
		fullWidth: true,
		padding: 10,
		text: '',
		weight: 2000
	},
	animation: {
		duration: 1000,
		easing: 'easeOutQuart',
		onProgress: null | ani => ani.animationObject, // {chart, currentStep, numSteps, ...}
		onComplete: null | ani => ani.animationObject
	},
	legend: {
		display: true,
		position: 'top',
		align: 'center',
		fullWidth: true,
		reverse: false,
		weight: 1000,
		labels: {boxWidth: 40, padding: 10},
		onClick: () =>
		onHover: null | () =>,
		onLeave: null | () =>,
	},
}

const data = {
	labels: ['', '', ...],
  datasets: [ {}, {}, ... ]
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// full ref
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