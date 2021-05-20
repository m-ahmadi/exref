// https://cdn.jsdelivr.net/npm/lightweight-charts/

var chart = LightweightCharts.createChart(document.body, {
	width: 400,
	height: 300
})


var lineSeries = chart.addLineSeries()
lineSeries.setData([
	{time:'2019-04-11', value:80.01},
	{time:'2019-04-12', value:96.63},
	...
])


var areaSeries = chart.addAreaSeries({
	topColor:    'rgba(21, 146, 230, 0.4)',
	bottomColor: 'rgba(21, 146, 230, 0)',
	lineColor:   'rgba(21, 146, 230, 1)',
	lineStyle:    0,
	lineWidth:    3,
	crosshairMarkerVisible:     false,
	crosshairMarkerRadius:      3,
	crosshairMarkerBorderColor: 'rgb(255, 255, 255, 1)',
	crosshairMarkerBackgroundColor: 'rgb(34, 150, 243, 1)',
})
areaSeries.setData({
	{time:'2018-12-22', value:32.51},
	{time:'2018-12-23', value:31.11},
	...
})


var barSeries = chart.addBarSeries({
	thinBars:    false,
	upColor:     'rgba(37, 148, 51, 0.2)',
	downColor:   'rgba(191, 55, 48, 0.2)',
	openVisible: true,
})
barSeries.setData([
	{time:'2018-12-19', open:141.77, high:170.39, low:120.25, close:145.72},
	{time:'2018-12-20', open:145.72, high:147.99, low:100.11, close:108.19},
	...
])


var candlestickSeries = chart.addCandlestickSeries({
	upColor:         '#6495ED',
	downColor:       '#FF6347',
	borderVisible:   false,
	wickVisible:     true,
	borderColor:     '#000000',
	wickColor:       '#000000',
	borderUpColor:   '#4682B4',
	borderDownColor: '#A52A2A',
	wickUpColor:     '#4682B4',
	wickDownColor:   '#A52A2A',
});
candlestickSeries.applyOptions({↑...})

candlestickSeries.setData([
	{time:'2018-12-22', open:75.16, high:82.84, low:36.16, close:45.72},
	{time:'2018-12-23', open:45.12, high:53.90, low:45.12, close:48.09},
	...
])