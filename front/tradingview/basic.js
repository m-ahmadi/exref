// you can't change the chart parameters once it's created.
// use chart methods to modify the chart after it's created.

// constructor (minimal):
var widget = new TradingView.widget({
	// symbol: 'A',
	// interval: 'D',
	container_id: 'tv_chart_container',
	datafeed: new Datafeeds.UDFCompatibleDatafeed('https://demo_feed.tradingview.com'),
	library_path: 'lib/tradingview/charting_library/' // default: 'dir where html was served'
});

// methods:
widget.onChartReady(function () {
	// it's now safe to call any other methods of the widget
});