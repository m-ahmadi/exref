// stock
return Highcharts.stockChart(container[0], {
	rangeSelector: false,
	exporting: false,
	credits: false,
	chart: {
		zoomType: "x"
	}
	series: [{
		name: "Water",
		data: [[0, 0], [1, 5], [2, 3], [4, 8]],
		tooltip: {
			valueDecimals: 2
		}
	}]
});