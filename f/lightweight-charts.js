// https://cdn.jsdelivr.net/npm/lightweight-charts/

LightweightCharts.
	LineType.         Simple  | WithSteps   |            |              |
	LineStyle.        Dashed  | Solid       | Dotted     | LargeDashed  | SparseDotted
	PriceScaleMode.   Normal  | Logarithmic | Percentage | IndexedTo100 |
	CrosshairMode.    Magnet  | Normal      |            |              |
	PriceLineSource.  LastBar | LastVisible |            |              |
	TickMarkType.     Year    | Month       | DayOfMonth | Time         | TimeWithSeconds
	
	.isBusinessDay(t)
	.isUTCTimestamp(t)

Time = UTCTimestamp | BusinessDay
	UTCTimestamp = 0
	BusinessDay  = 'YYYY-MM-DD' | {year:0, month:0, day:0}

var chart = LightweightCharts.createChart(container=''|HTMLEelemnt, {
	width:  0,
	height: 0,
	timeScale: {
		rightOffset:                  0,
		barSpacing:                   6,
		minBarSpacing:                0.5,
		fixLeftEdge:                  false,
		fixRightEdge:                 false,
		lockVisibleTimeRangeOnResize: false,
		rightBarStaysOnScroll:        false,
		borderVisible:                true,
		borderColor:                  '#2b2b43',
		visible:                      true,	
		timeVisible:                  false,
		secondsVisible:               true,
		shiftVisibleRangeOnNewBar:    true,
		tickMarkFormatter:            (time, tickMarkType, locale)=>'' | undefined,
	},
	priceScale: {
		position:       'right|left|none', // deprecated
		mode:           PriceScaleMode.Normal,
		autoScale:      true,
		invertScale:    false,
		alignLabels:    true,
		borderVisible:  true,
		borderColor:    '#2b2b43',
		scaleMargins:   {top:0.2, bottom:0.1},
		entireTextOnly: false,
		drawTicks:      true,
	}, 
	leftPriceScale:  {↑...},
	rightPriceScale: {↑...},
  crosshair: {
		vertLine | horzLine: {
			color:                '#758696',
			width:                1,
			style:                LineStyle.Dashed,
			visible:              true,
			labelVisible:         true,
			labelBackgroundColor: '#4c525e',
			mode:                 CrosshairMode.Magnet,
		},
  },
	grid: {
		vertLines | horzLines: {
			color:   '#d6dcde',
			style:   LineStyle.Solid,
			visible: true,
		}
	},
	localization: {
		dateFormat:     'yyyy/MM/dd',
			'yyyy' // full    year:  2020
			'yy'   // short   year:  20
			'MMMM' // long    month: February
			'MMM'  // short   month: Feb
			'MM'   // numeric month: 03  (with leading zero if needed)
			'dd'   // day of  month: 15  (with leading zero if needed)
		locale:         'en-US',
		timeFormatter:  (time=0|'')=>'',
		priceFormatter: (price=0)=>'',
	},
	layout: {
		backgroundColor: '#ffffff',
		textColor:       '#191919',
		fontSize:        11,
		fontFamily:      "'Trebuchet MS', Roboto, Ubuntu, sans-serif",
	},
	handleScroll: true | {
		mouseWheel:       true,
		pressedMouseMove: true,
		horzTouchDrag:    true,
		vertTouchDrag:    true,
	},
	handleScale: true | {
		axisPressedMouseMove: true | {time:true, price:true},
		axisDoubleClickReset: true,
		mouseWheel:           true,
		pinch:                true,
	},
	watermark: {
		color:      'rgba(0,0,0,0)',
		visible:    false,
		text:       '',
		fontSize:   48,
		fontFamily: "'Trebuchet MS', Roboto, Ubuntu, sans-serif",
		fontStyle:  '',
		horzAlign:  'center|left|right',
		vertAlign:  'center|left|right',
	},
})

chart.resize(width, height)
chart.applyOptions(opts={})
chart.subscribeCrosshairMove()
chart.subscribeClick((param={time:Time, point:{x:0,y:0}, seriesPrices:Map<ISeriesApi,number|OHLC>}) => void)
chart.unsubscribeClick(↑...)
chart.subscribeCrosshairMove(↑...)
chart.unsubscribeCrosshairMove(↑...)
chart.remove()

var timeScale = chart.timeScale()
timeScale.scrollPosition()
timeScale.scrollToPosition(position=0, animated=true)
timeScale.scrollToRealTime()
timeScale.getVisibleRange()
timeScale.setVisibleRange(range={from:0, to:0})
timeScale.getVisibleLogicalRange()
timeScale.setVisibleLogicalRange(range={from:0, to:0})
timeScale.resetTimeScale()
timeScale.fitContent()
timeScale.timeToCoordinate(time: Time)
timeScale.coordinateToTime(coordinate=0)
timeScale.logicalToCoordinate(logicalIndex=0)
timeScale.coordinateToLogical(coordinate=0)
timeScale.applyOptions(opts={})
timeScale.options()
timeScale.subscribeVisibleTimeRangeChange(callback=(range)=>)
timeScale.unsubscribeVisibleTimeRangeChange(callback)
timeScale.subscribeVisibleLogicalRangeChange(callback=(range)=>)
timeScale.unsubscribeVisibleLogicalRangeChange(callback)

var lineSeries = chart.addLineSeries({
	color:                          '#2196f3',
	lineStyle:                      LineStyle.Solid,
	lineWidth:                      3,
	crosshairMarkerVisible:         true,
	crosshairMarkerRadius:          4,
	crosshairMarkerBorderColor:     '',
	crosshairMarkerBackgroundColor: '',
	lineType:                       LineType.Simple,
	// ↓...??
	priceScaleId: 'left|right',
	title:        '',
	scaleMargins: {top:0, bottom:0},
	visible:      true,
})
lineSeries.setData([{time:Time, value:0}, ...])


var areaSeries = chart.addAreaSeries({
	topColor:                      'rgba(46, 220, 135, 0.4)',
	bottomColor:                   'rgba(40, 221, 100, 0)',
	lineColor:                     '#33D778',
	lineStyle:                      LineStyle.Solid,
	lineWidth:                      3,
	crosshairMarkerVisible:         true,
	crosshairMarkerRadius:          4,
	crosshairMarkerBorderColor:     '',
	crosshairMarkerBackgroundColor: '',
})
areaSeries.setData([{time:Time, value:0}, ...])


var barSeries = chart.addBarSeries({
	thinBars:    true,
	upColor:     '#26a69a',
	downColor:   '#ef5350',
	openVisible: true,
})
barSeries.setData([{time:Time, open:0, high:0, low:0, close:0,}, ...])


var candlestickSeries = chart.addCandlestickSeries({
	upColor:         '#26a69a',
	downColor:       '#ef5350',
	borderVisible:   true,
	wickVisible:     true,
	borderColor:     '#378658',
	wickColor:       '#737375',
	borderUpColor:   '#26a69a',
	borderDownColor: '#ef5350',
	wickUpColor:     '#26a69a',
	wickDownColor:   '#ef5350',
});
candlestickSeries.applyOptions(opts={↑...})
candlestickSeries.setData([{time:Time, open:0, high:0, low:0, close:0,}, ...])


var histSeries = chart.addHistogramSeries({
	color: '#26a69a',
	base:  0,
	// ↓...??
	priceScaleId: '',
	priceFormat:  {type:'volume'},
	scaleMargins: {top:0, bottom:0},
});
histSeries.setData([{time:Time, value:0, color:''}, ...])