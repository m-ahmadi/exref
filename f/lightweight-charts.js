// https://tradingview.github.io/lightweight-charts/docs/api
// https://cdn.jsdelivr.net/npm/lightweight-charts/

// https://tradingview.github.io/lightweight-charts/docs/migrations/from-v3-to-v4

// defaults
LightweightCharts.
	LineType
	LineStyle
	...


// https://tradingview.github.io/lightweight-charts/docs/api#type-aliases
Time = UTCTimestamp | BusinessDay | ''
	UTCTimestamp = 0
	BusinessDay  = 'YYYY-MM-DD' | {year:0, month:0, day:0}
LineWidth = 1|2|3|4
HorzAlign = 'left|center|right'
VertAlign = 'top|center|bottom'
PriceScaleMargins = {top:0, bottom:0}
Point = {x:0, y:0}
Logical = 0 // to|from number in a range


// https://tradingview.github.io/lightweight-charts/docs/api#enumerations
enum ColorType {Solid='solid', VerticalGradient='gradient'}
enum                   | -1          | 0           | 1            | 2            | 3            | 4
CrosshairMode          |             | Normal      | Magnet       |              |              |
LastPriceAnimationMode |             | Disabled    | Continuous   | OnDataUpdate |              |
LineStyle              |             | Solid       | Dotted       | Dashed       | LargeDashed  | SparseDotted
LineType               |             | Simple      | WithSteps    | Curved       |              |
MismatchDirection      | NearestLeft | None        | NearestRight |              |              |
PriceLineSource        |             | LastBar     | LastVisible  |              |              |
PriceScaleMode         |             | Normal      | Logarithmic  | Percentage   | IndexedTo100 |
TickMarkType           |             | Year        | Month        | DayOfMonth   | Time         | TimeWithSeconds
TrackingModeExitMode   |             | OnTouchEnd  | OnNextTap    |              |              |


// https://tradingview.github.io/lightweight-charts/docs/api#functions
LightweightCharts.isBusinessDay(t)
LightweightCharts.isUTCTimestamp(t)
LightweightCharts.version()

var chart = LightweightCharts.createChart(container=''|HTMLElement, ?options={
	// https://tradingview.github.io/lightweight-charts/docs/api/interfaces/ChartOptions
	width:    0,
	height:   0,
	autoSize: true,
	timeScale: {
		// https://tradingview.github.io/lightweight-charts/docs/api/interfaces/TimeScaleOptions
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
	['left|right|overlay'+'PriceScale']: {
		// https://tradingview.github.io/lightweight-charts/docs/api/interfaces/PriceScaleOptions
		autoScale:      true,
		mode:           PriceScaleMode.Normal,
		invertScale:    false,
		alignLabels:    true,
		scaleMargins:   {top:0.2, bottom:0.1},
		borderVisible:  true,
		borderColor:    '#2B2B43',
		textColor:      undefined | '',
		entireTextOnly: false,
		visible:        true,
		ticksVisible:   false, // v4 renamed from `drawTicks`
	},
  crosshair: {
		// https://tradingview.github.io/lightweight-charts/docs/api/interfaces/CrosshairOptions
		['vertLine|horzLine']: {
			// https://tradingview.github.io/lightweight-charts/docs/api/interfaces/CrosshairLineOptions
			mode:                 CrosshairMode.Magnet,
			
			color:                '#758696',
			width:                1,
			style:                LineStyle.LargeDashed,
			visible:              true,
			labelVisible:         true,
			labelBackgroundColor: '#4c525e',
		},
  },
	grid: {
		// https://tradingview.github.io/lightweight-charts/docs/api/interfaces/GridOptions
		['vertLines|horzLines']: {
			// https://tradingview.github.io/lightweight-charts/docs/api/interfaces/GridLineOptions
			color:   '#D6DCDE',
			style:   LineStyle.Solid,
			visible: true,
		}
	},
	localization: {
		// https://tradingview.github.io/lightweight-charts/docs/api/interfaces/LocalizationOptions
		locale:         navigator.language | 'en-US|...',
		priceFormatter: undefined | (price=0)=>'',
		timeFormatter:  undefined | (time=Time)=>'',
		dateFormat:     'dd MMM \'yy',
			'yyyy' // full    year:  2020
			'yy'   // short   year:  20
			'MMMM' // long    month: February
			'MMM'  // short   month: Feb
			'MM'   // numeric month: 03  (with leading zero if needed)
			'dd'   // day of  month: 15  (with leading zero if needed)
	},
	layout: {
		// https://tradingview.github.io/lightweight-charts/docs/api/interfaces/LayoutOptions
		background: {type:ColorType.Solid, color:'#FFFFFF'},
		textColor:  '#191919',
		fontSize:   11,
		fontFamily: "-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif",
	},
	handleScroll: true | {
		// https://tradingview.github.io/lightweight-charts/docs/api/interfaces/HandleScrollOptions
		mouseWheel:       true,
		pressedMouseMove: true,
		horzTouchDrag:    true,
		vertTouchDrag:    true,
	},
	handleScale: true | {
		// https://tradingview.github.io/lightweight-charts/docs/api/interfaces/HandleScaleOptions
		mouseWheel:           true,
		pinch:                true,
		axisPressedMouseMove: true | {time:true, price:true},
		axisDoubleClickReset: true | {time:true, price:true},
	},
	kineticScroll: {
		// https://tradingview.github.io/lightweight-charts/docs/api/interfaces/KineticScrollOptions
		touch: true,
		touch: false,
	},
	trackingMode: {
		// https://tradingview.github.io/lightweight-charts/docs/api/interfaces/TrackingModeOptions
		exitMode: TrackingModeExitMode.OnNextTap,
		
	},
	watermark: {
		// https://tradingview.github.io/lightweight-charts/docs/api/interfaces/WatermarkOptions
		color:      'rgba(0, 0, 0, 0)',
		visible:    false,
		text:       '',
		fontSize:   48,
		fontFamily: "-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif",
		fontStyle:  '',
		horzAlign:  HorzAlign,
		vertAlign:  VertAlign,
	},
})

chart.Nm.cv = container<HTMLElement>


// https://tradingview.github.io/lightweight-charts/docs/api/interfaces/IChartApi
chart.addAreaSeries()
chart.addBarSeries()
chart.addBaselineSeries()
chart.addCandlestickSeries()
chart.addHistogramSeries()
chart.addLineSeries()
chart.applyOptions()
chart.autoSizeActive()
chart.options()
chart.priceScale(priceScaleId='')
chart.remove()
chart.removeSeries()
chart.resize(width, height)
chart.subscribeClick((param={time:Time, point:{x:0,y:0}, seriesPrices:Map<ISeriesApi,number|OHLC>}) => void)
chart.subscribeCrosshairMove(↑...)
chart.takeScreenshot()
chart.timeScale()
chart.unsubscribeClick(...subscribe*)
chart.unsubscribeCrosshairMove(...subscribe*)


// https://tradingview.github.io/lightweight-charts/docs/api/interfaces/ISeriesApi
series = chart['add'+'Area|Bar|Baseline|Candlestick|Histogram|Line'+'Series']()
series.priceFormatter()
series.priceToCoordinate(price=0)
series.coordinateToPrice(coordinate=0)
series.barsInLogicalRange(range=[0,..])
series.applyOptions(options)
series.options()
series.priceScale()
series.setData(data)
series.update(bar)
series.dataByIndex(logicalIndex, ?mismatchDirection)
series.setMarkers(data)
series.markers()
series.createPriceLine(options)
series.removePriceLine(line)
series.seriesType()


// https://tradingview.github.io/lightweight-charts/docs/api/interfaces/ITimeScaleApi
var timeScale = chart.timeScale()
timeScale.applyOptions(options={})
timeScale.coordinateToLogical(coordinate=0)
timeScale.coordinateToTime(coordinate=0)
timeScale.fitContent()
timeScale.getVisibleLogicalRange()
timeScale.getVisibleRange()
timeScale.height()
timeScale.logicalToCoordinate(logicalIndex=0)
timeScale.options()
timeScale.resetTimeScale()
timeScale.scrollPosition()
timeScale.scrollToPosition(position=0, animated=true)
timeScale.scrollToPosition()
timeScale.scrollToRealTime()
timeScale.setVisibleLogicalRange(range={from:0, to:0})
timeScale.setVisibleRange(range={from:0, to:0})
timeScale.subscribeSizeChange()
timeScale.subscribeVisibleLogicalRangeChange(callback=(range)=>)
timeScale.subscribeVisibleTimeRangeChange(callback=(range)=>)
timeScale.timeToCoordinate(time: Time)
timeScale.unsubscribeSizeChange()
timeScale.unsubscribeVisibleLogicalRangeChange(callback)
timeScale.unsubscribeVisibleTimeRangeChange(callback)
timeScale.width()


// https://tradingview.github.io/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon
SeriesOptionsCommon = {
	lastValueVisible:      ,
	title:                 '',
	priceScaleId:          'left|right',
	visible:               true,
	priceLineVisible:      true,
	priceLineSource:       PriceLineSource.LastBar,
	priceLineWidth:        LineWidth,
	priceLineColor:        '',
	priceLineStyle:        LineStyle.Solid,
	priceFormat:           {type:'price', precision:2, minMove:0.01},
	baseLineVisible:       true,
	baseLineColor:         '#B2B5BE',
	baseLineWidth:         LineWidth,
	baseLineStyle:         LineStyle.Solid,
	autoscaleInfoProvider: undefined | ()=>,
//scaleMargins:          PriceScaleMargins, // v4 removed. use `series.priceScale().applyOptions({ scaleMargins: {...} })`
};


// https://tradingview.github.io/lightweight-charts/docs/api/interfaces/LineStyleOptions
var lineSeries = chart.addLineSeries({
	color:                          '#2196f3',
	lineStyle:                      LineStyle.Solid,
	lineWidth:                      3 | LineWidth,
	lineType:                       LineType.Simple,
	crosshairMarkerVisible:         true,
	crosshairMarkerRadius:          4,
	crosshairMarkerBorderColor:     '',
	crosshairMarkerBackgroundColor: '',
	crosshairMarkerBorderWidth:     2,
	lastPriceAnimation:             LastPriceAnimationMode.Disabled,
	...SeriesOptionsCommon,
})
lineSeries.setData([{time:Time, value:0}, ...])


// https://tradingview.github.io/lightweight-charts/docs/api/interfaces/AreaStyleOptions
var areaSeries = chart.addAreaSeries({
	topColor:                       'rgba(46, 220, 135, 0.4)',
	bottomColor:                    'rgba(40, 221, 100, 0)',
	invertFilledArea:               false,
	lineColor:                      '#33D778',
	lineStyle:                      LineStyle.Solid,
	lineWidth:                      3 | LineWidth,
	lineType:                       LineType.Simple,
	crosshairMarkerVisible:         true,
	crosshairMarkerRadius:          4,
	crosshairMarkerBorderColor:     '',
	crosshairMarkerBackgroundColor: '',
	crosshairMarkerBorderWidth:     2,
	lastPriceAnimation:             LastPriceAnimationMode.Disabled,
	...SeriesOptionsCommon,
})
areaSeries.setData([{time:Time, value:0}, ...])


// https://tradingview.github.io/lightweight-charts/docs/api/interfaces/BarStyleOptions
var barSeries = chart.addBarSeries({
	upColor:     '#26a69a',
	downColor:   '#ef5350',
	openVisible: true,
	thinBars:    true,
	...SeriesOptionsCommon,
})
barSeries.setData([{time:Time, open:0, high:0, low:0, close:0,}, ...])


// https://tradingview.github.io/lightweight-charts/docs/api/interfaces/CandlestickStyleOptions
var candlestickSeries = chart.addCandlestickSeries({
	upColor:         '#26a69a',
	downColor:       '#ef5350',
	wickVisible:     true,
	borderVisible:   true,
	borderColor:     '#378658',
	borderUpColor:   '#26a69a',
	borderDownColor: '#ef5350',
	wickColor:       '#737375',
	wickUpColor:     '#26a69a',
	wickDownColor:   '#ef5350',
	...SeriesOptionsCommon,
});
candlestickSeries.setData([{time:Time, open:0, high:0, low:0, close:0,}, ...])


// https://tradingview.github.io/lightweight-charts/docs/api/interfaces/HistogramStyleOptions
var histSeries = chart.addHistogramSeries({
	color: '#26a69a',
	base:  0,
	...SeriesOptionsCommon,
});
histSeries.setData([{time:Time, value:0, color:''}, ...])


// https://tradingview.github.io/lightweight-charts/docs/api/interfaces/BaselineStyleOptions
var baselineSeries = chart.addBaselineSeries({
	baseValue:                      {type:'price', price:0},
	topFillColor1:                  'rgba(38, 166, 154, 0.28)',
	topFillColor2:                  'rgba(38, 166, 154, 0.05)',
	topLineColor:                   'rgba(38, 166, 154, 1)',
	bottomFillColor1:               'rgba(239, 83, 80, 0.05)',
	bottomFillColor2:               'rgba(239, 83, 80, 0.28)',
	bottomLineColor:                'rgba(239, 83, 80, 1)',
	lineWidth:                      3 | LineWidth,
	lineStyle:                      LineStyle.Solid,
	lineType:                       LineType.Simple,
	crosshairMarkerVisible:         true,
	crosshairMarkerRadius:          4,
	crosshairMarkerBorderColor:     '',
	crosshairMarkerBackgroundColor: '',
	crosshairMarkerBorderWidth:     2,
	lastPriceAnimation:             LastPriceAnimationMode.Disabled,
	...SeriesOptionsCommon,
});


// https://tradingview.github.io/lightweight-charts/docs/api/interfaces/MouseEventParams
interface MouseEventParams{
	time?:            Time,
	logical?:         Logical,
	point?:           Point,
	seriesData?:      Map<ISeriesApi<keyof SeriesOptionsMap>, BarData|HistogramData|LineData>,
	hoveredSeries?:   ISeriesApi<keyof SeriesOptionsMap>,
	hoveredObjectId?: undefined,
	sourceEvent?:     TouchMouseEventData,
}


// ps
console.log([...document.querySelectorAll('h3.anchor.anchorWithStickyNavbar_LWe7')].map(i=>i.textContent).join('\n'))
