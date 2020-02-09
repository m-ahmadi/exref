// js api:
let chart;
let bars;

async function getData(ferom, to) {
	if (!bars) bars = await $.get('./api');
	if (chart) chart.setVisibleRange({ from: bars[0].time, to: bars[bars.length-1].time });
	let subset = bars.filter(i => i.time >= ferom && i.time <= to);
	subset.forEach(i => i.time *= 1000);
	return subset;
}

const japi = {
	onReady(callback) {
		const config = {
			supports_marks: false
		};
		setTimeout(callback, 0, config);
	},
	resolveSymbol(symbolName, onSymbolResolvedCallback, onResolveErrorCallback) {
		const symbolInfo = {
			name: symbolName,
			ticker: symbolName,
			description: 'zob ahan esfahan',
			session: '0830-1230:71234;7',
			timezone: 'Asia/Tehran' ,
			minmov: 1,
			pricescale: 1
		};
		setTimeout(onSymbolResolvedCallback, 0, symbolInfo);
	},
	async getBars(symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest) {
		const _bars = await getData(from, to).catch( err => onErrorCallback(err) );
		if (_bars.length) {
			onHistoryCallback(_bars, {noData: false})
		} else {
			onHistoryCallback(_bars, {noData: true})
		}
	},
	subscribeBars() {}
};

// widget constructor:
const widget = new TradingView.widget({
	symbol: 'zob',
	interval: '1D',
	container_id: 'tv_chart_container',
	datafeed: japi,
	library_path: 'tradingview/charting_library/',
	disabled_features: [
		'header_widget',
		'left_toolbar',
		'context_menus',
		'show_chart_property_page',
		'edit_buttons_in_legend',
		'countdown',
		'display_market_status',
		'timeframes_toolbar',
		'go_to_date',
		'control_bar'
	]
});

widget.onChartReady(function () {
	chart = widget.chart();
});