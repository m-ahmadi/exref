var disabled_features, enabled_features;
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// naked chart without header, toolbar, etc
disabled_features = [
	'header_widget',
	'left_toolbar',
	'context_menus', // timezone_menu, scales_context_menu, legend_context_menu, symbol_info, show_chart_property_page
//	'chart_zoom',
//	'remove_library_container_border',
//	'border_around_the_chart',
	'edit_buttons_in_legend',
	'countdown',
	'display_market_status',
	'timeframes_toolbar',
	'go_to_date',
	'control_bar'
];
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// naked chart with an empty header
disabled_features = [
	'header_symbol_search',
	'header_resolutions',
	'header_interval_dialog_button',
	'show_interval_dialog_on_key_press',
	'header_chart_type',
	'header_settings',
	'header_indicators',
	'compare_symbol',
	'header_compare',
	'header_undo_redo',
	'header_fullscreen_button',
	'header_saveload',
	'header_screenshot',
	
	'left_toolbar',
	'context_menus',
	'edit_buttons_in_legend',
	'countdown',
	'timezone_menu',
	'display_market_status',
	'timeframes_toolbar',
	'go_to_date',
	'control_bar'
];
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
var widget = new TradingView.widget({
	symbol: 'AMZN',
	fullscreen: true,
	interval: '1D',
	container_id: 'tv_chart_container',
	datafeed: new Datafeeds.UDFCompatibleDatafeed('https://demo_feed.tradingview.com'),
	library_path: 'js/lib/charting_library/',
	disabled_features: disabled_features,
	enabled_features: enabled_features
});