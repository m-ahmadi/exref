// some examples from past

// todo: full ref

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// bar chart
var chart = Highcharts.chart(container, {
	chart: {
		type: 'column'
	},
	title: {
		align: 'left',
		text: title || '',
		style: {
			color: '#717171',
			fontSize: '14px'
		}
	},
	xAxis: {
		labels: false,
	},
	yAxis: {
		title: false
	},
	tooltip: {
		formatter: function () {
			// <span style='color:{this.color}'>\u25CF</span>
			return `
				${this.series.name}:
				<b>${ u.toDecimalPlace(this.y, 2) }</b>
			`;
		},
		changeDecimals: 2,
	},
	series: [],
	rangeSelector: false,
	exporting: false,
	credits: false,
	legend: {
		enabled: true
	}
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// stock
var chart = Highcharts.stockChart(container, {
	rangeSelector: false,
	exporting: false,
	credits: false,
	chart: {
		zoomType: 'x'
	}
	series: [{
		name: 'Water',
		data: [[0, 0], [1, 5], [2, 3], [4, 8]],
		tooltip: {
			valueDecimals: 2
		}
	}]
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// line chart
var chart = Highcharts.stockChart(container=HTMLElement|'id', {
	rangeSelector: false,
	exporting: false,
	credits: false,
	title: {
		align: 'left',
		text: title || '',
		style: {
			color: '#717171',
			fontSize: '14px'
		}
	},
	chart: {
		zoomType: 'x'
		/* resetZoomButton: { // works only with Highcharts.chart
			relativeTo: 'chart',
			position: {
				align: 'right',
				verticalAlign: 'top',
				x: 0,
				y: 0
			}
		} */
	},
	navigator: {
		adaptToUpdatedData: false
	},
	xAxis: {
		events: {
			setExtremes: e => {
				let d = e.DOMEvent;
				let trigger = e.trigger;
				if ( (d && d.DOMType !== 'mousemove') || trigger === 'zoom' ) { // drag-end or zoom
					startDate = moment(e.min).format(DATE_FORMAT);
					endDate = moment(e.max).format(DATE_FORMAT);
					loadGraphSensorData();
				}
			}
		}
	},
	yAxis: [],
	legend: {
		enabled: true
	},
	series: []
});