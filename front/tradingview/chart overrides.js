// these properties are treated as customizable ones.
// customization of other properties is not supported.

// supported values: large, medium, small, tiny
volumePaneSize: 'large'

// fonts available in text editors (i.e., in `Text` drawing tool properties dialog)
editorFontsList: ['Verdana', 'Courier New', 'Times New Roman', 'Arial']

paneProperties.background: '#ffffff'
paneProperties.vertGridProperties.color: '#E6E6E6'
paneProperties.vertGridProperties.style: LINESTYLE_SOLID
paneProperties.horzGridProperties.color: '#E6E6E6'
paneProperties.horzGridProperties.style: LINESTYLE_SOLID
paneProperties.crossHairProperties.color: '#989898'
paneProperties.crossHairProperties.width: 1
paneProperties.crossHairProperties.style: LINESTYLE_DASHED

// Margins (percentage). Used for auto scaling.
paneProperties.topMargin: 10
paneProperties.bottomMargin: 8

paneProperties.axisProperties.autoScale: true
paneProperties.axisProperties.lockScale: false
paneProperties.axisProperties.percentage: false
paneProperties.axisProperties.indexedTo100: false
paneProperties.axisProperties.log: false
paneProperties.axisProperties.alignLabels: true
paneProperties.axisProperties.isInverted: false

paneProperties.legendProperties.showStudyArguments: true
paneProperties.legendProperties.showStudyTitles: true
paneProperties.legendProperties.showStudyValues: true
paneProperties.legendProperties.showSeriesTitle: true
paneProperties.legendProperties.showSeriesOHLC: true
paneProperties.legendProperties.showLegend: true
paneProperties.legendProperties.showBarChange: true
paneProperties.legendProperties.showOnlyPriceSource: true

scalesProperties.backgroundColor : '#ffffff'
scalesProperties.fontSize: 11
scalesProperties.lineColor : '#555'
scalesProperties.textColor : '#555'
scalesProperties.scaleSeriesOnly : false
scalesProperties.showSeriesLastValue: true
scalesProperties.showSeriesPrevCloseValue: false
scalesProperties.showStudyLastValue: false
scalesProperties.showStudyPlotLabels: false
scalesProperties.showSymbolLabels: false

timeScale.rightOffset: 5

timezone: 'Etc/UTC' # See supported timezones list (at Symbology#timezone page) for available values


// Series style. See the supported values below
// Bars = 0
// Candles = 1
// Line = 2
// Area = 3
// Heikin Ashi = 8
// Hollow Candles = 9
// Renko = 4
// Kagi = 5
// Point&Figure = 6
// Line Break = 7
// Baseline = 10
mainSeriesProperties.style: 1

mainSeriesProperties.showCountdown: true
mainSeriesProperties.visible:true
mainSeriesProperties.showPriceLine: true
mainSeriesProperties.priceLineWidth: 1
mainSeriesProperties.priceLineColor: ''
mainSeriesProperties.showPrevClosePriceLine: false
mainSeriesProperties.prevClosePriceLineWidth: 1
mainSeriesProperties.prevClosePriceLineColor: 'rgba( 85, 85, 85, 1)'
mainSeriesProperties.lockScale: false
mainSeriesProperties.minTick: 'default'

mainSeriesProperties.priceAxisProperties.autoScale:true
mainSeriesProperties.priceAxisProperties.autoScaleDisabled:false
mainSeriesProperties.priceAxisProperties.percentage:false
mainSeriesProperties.priceAxisProperties.percentageDisabled:false
mainSeriesProperties.priceAxisProperties.log:false
mainSeriesProperties.priceAxisProperties.logDisabled:false

// possible values are: description, ticker.
mainSeriesProperties.statusViewStyle.symbolTextSource: 'description'

symbolWatermarkProperties.color : 'rgba(0, 0, 0, 0.00)'

// Different chart types defaults

// Candles styles
mainSeriesProperties.candleStyle.upColor: '#26a69a'
mainSeriesProperties.candleStyle.downColor: '#ef5350'
mainSeriesProperties.candleStyle.drawWick: true
mainSeriesProperties.candleStyle.drawBorder: true
mainSeriesProperties.candleStyle.borderColor: '#378658'
mainSeriesProperties.candleStyle.borderUpColor: '#26a69a'
mainSeriesProperties.candleStyle.borderDownColor: '#ef5350'
mainSeriesProperties.candleStyle.wickUpColor: '#26a69a'
mainSeriesProperties.candleStyle.wickDownColor: '#ef5350'
mainSeriesProperties.candleStyle.barColorsOnPrevClose: false

// Hollow Candles styles
mainSeriesProperties.hollowCandleStyle.upColor: '#26a69a'
mainSeriesProperties.hollowCandleStyle.downColor: '#ef5350'
mainSeriesProperties.hollowCandleStyle.drawWick: true
mainSeriesProperties.hollowCandleStyle.drawBorder: true
mainSeriesProperties.hollowCandleStyle.borderColor: '#378658'
mainSeriesProperties.hollowCandleStyle.borderUpColor: '#26a69a'
mainSeriesProperties.hollowCandleStyle.borderDownColor: '#ef5350'
mainSeriesProperties.hollowCandleStyle.wickColor: '#737375'

// Heikin Ashi styles
mainSeriesProperties.haStyle.upColor: '#26a69a'
mainSeriesProperties.haStyle.downColor: '#ef5350'
mainSeriesProperties.haStyle.drawWick: true
mainSeriesProperties.haStyle.drawBorder: true
mainSeriesProperties.haStyle.borderColor: '#378658'
mainSeriesProperties.haStyle.borderUpColor: '#26a69a'
mainSeriesProperties.haStyle.borderDownColor: '#ef5350'
mainSeriesProperties.haStyle.wickColor: '#737375'
mainSeriesProperties.haStyle.barColorsOnPrevClose: false

// Bar styles
mainSeriesProperties.barStyle.upColor: '#26a69a'
mainSeriesProperties.barStyle.downColor: '#ef5350'
mainSeriesProperties.barStyle.barColorsOnPrevClose: false
mainSeriesProperties.barStyle.dontDrawOpen: false

// Line styles
mainSeriesProperties.lineStyle.color: '#2196f3'
mainSeriesProperties.lineStyle.linestyle: LINESTYLE_SOLID
mainSeriesProperties.lineStyle.linewidth: 3
mainSeriesProperties.lineStyle.priceSource: 'close'

// Area styles
mainSeriesProperties.areaStyle.color1: '#2196f3'
mainSeriesProperties.areaStyle.color2: '#2196f3'
mainSeriesProperties.areaStyle.linecolor: '#2196f3'
mainSeriesProperties.areaStyle.linestyle: LINESTYLE_SOLID
mainSeriesProperties.areaStyle.linewidth: 1
mainSeriesProperties.areaStyle.priceSource: 'close'

// Baseline styles
mainSeriesProperties.baselineStyle.baselineColor: 'rgba( 117, 134, 150, 1)'
mainSeriesProperties.baselineStyle.topFillColor1: 'rgba( 38, 166, 154, 0.05)'
mainSeriesProperties.baselineStyle.topFillColor2: 'rgba( 38, 166, 154, 0.05)'
mainSeriesProperties.baselineStyle.bottomFillColor1: 'rgba( 239, 83, 80, 0.05)'
mainSeriesProperties.baselineStyle.bottomFillColor2: 'rgba( 239, 83, 80, 0.05)'
mainSeriesProperties.baselineStyle.topLineColor: 'rgba( 38, 166, 154, 1)'
mainSeriesProperties.baselineStyle.bottomLineColor: 'rgba( 239, 83, 80, 1)'
mainSeriesProperties.baselineStyle.topLineWidth: 3
mainSeriesProperties.baselineStyle.bottomLineWidth: 3
mainSeriesProperties.baselineStyle.priceSource: 'close'
mainSeriesProperties.baselineStyle.transparency: 50
mainSeriesProperties.baselineStyle.baseLevelPercentage: 50

// Hi-Lo style
mainSeriesProperties.hiloStyle.color: '#2196f3'
mainSeriesProperties.hiloStyle.showBorders: true
mainSeriesProperties.hiloStyle.borderColor: '#2196f3'
mainSeriesProperties.hiloStyle.showLabels: true
mainSeriesProperties.hiloStyle.labelColor: '#2196f3'
mainSeriesProperties.hiloStyle.fontFamily: 'Trebuchet MS'
mainSeriesProperties.hiloStyle.fontSize: 7