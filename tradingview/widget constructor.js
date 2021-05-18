// minimal:
var widget = new TradingView.widget({
	container_id: 'tv_chart_container',
	datafeed: new Datafeeds.UDFCompatibleDatafeed('https://demo_feed.tradingview.com'),
	library_path: 'js/lib/charting_library/'
});

// reference:
var widget = new TradingView.widget({
	symbol:                      'AMZN',                     // default symbol of the chart (AAPL, MSFT, FB)
	interval:                    'D',                        // time period of one bar: 1S, 1, 1h/H (60), 1D, 1W, 1M, 12M
	timeframe:                   '',                         // default timeframe. a period of bars loaded and shown on screen. valid timeframe: a number + letter D or M (1D 2M)
	container_id:                'tv_chart_container',       // required. html container element
	datafeed:                    new Datafeeds.UDFCompatibleDatafeed('https://demo_feed.tradingview.com'), // required. object that implements the js api interface to supply the chart with data
	timezone:                    'America/New_York',         // time on the timescale is displayed according to this timezone
	debug:                       false,                      // true: write detailed api logs
	library_path:                'js/lib/charting_library/', // path to the static folder (default: 'dir where html was served')
	width:                       '',                         // widget width: '200px' '60%' (use fullscreen: true instead of width: '100%')
	height:                      '',                         // widget height
	fullscreen:                  false,                      // true: use all available space in the window
	autosize:                    false,                      // true: use all available space in the container and resize when container is resized
	symbol_search_request_delay: 0,                          // delay in milliseconds to reduce requests when user is typing in the search box
	auto_save_delay:             0,                          // delay in seconds to reduce the number of onAutoSaveNeeded calls
	toolbar_bg:                  '#ffffff',                  // background color of the toolbars (only in hex)
	study_count_limit:           2,                          // max studies on a multichart-layout chart. min is 2 (v1.5+)
	saved_data:                  {},                         // object containing saved chart content. load content after chart is initialized using .load(state) method.
	locale:                      'en',                       // locale to be used ('en' | 'fa' | 'ru' | 'fr' | ...)
	numeric_formatting:          {decimal_sign: ','},        // object containing formatting options for numbers (currently only 1 option: decimal_sign) 
	disabled_features:           ['left_toolbar'],           // names array of ui features to be disabled by default
	enabled_features:            ['fix_left_edge'],          // names array of ui features to be enabled  by default
	snapshot_url:                '',                         // url to send a post request with chart snapshots (base64-encoded) when user presses snapshot button (endpoint should return full url of saved image in response)
	preset:                      '',                         // predefined widget settings (currently only 1 option: mobile) 
	charts_storage_url:          '',                         // related to high-level save/load api
	client_id:                   ?,                          // related to high-level save/load api
	user_id:                     ?,                          // related to high-level save/load api
	charts_storage_api_version:  '1.0',                      // a version of your backend. options: '1.0' | '1.1' (study templates are supported since v1.1)
	load_last_chart:             false,                      // true: load the last saved chart (you should implement save/load first)
	theme:                       'Light',                    // custom theme. default: 'Light' options: 'Light' | 'Dark' (v1.13+)
	custom_css_url:              '',                         // adds your custom css to the chart. url: absolute/relative path to the static folder (v1.4+)
	loading_screen: {                                        // customization of the loading spinner (v1.4+)
		backgroundColor:           '#000000',
		foregroundColor:           '#000000'
	},
	studies_access:              {},                         // # control which indicators should be shown/disabled/enabled (v1.1+)
	drawings_access:             {},                         // # control which drawing tools should be shown/disabled/enabled (v1.1+)
	customFormatters:            {},                         // # adjust display format of date/time values
	overrides:                   {},                         // # object containing new values for default widget properties
	custom_indicators_getter:    function () {},             // # function that returns a promise with an array of your custom indicators
	studies_overrides:           {},                         // # customize the style or inputs of the indicators or compare series
	time_frames:                 [],                         // # array of objects. list of visible timeframes selectable at bottom of the chart
	favorites:                   {},                         // # specify items that should be marked as favorite by default
	save_load_adapter:           {},                         // # an object containing save/load functions
	settings_adapter:            {},                         // # an object containing set/remove functions
});

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// studies_access
// an object for controling which indicators should be shown/disabled/enabled. (v1.1+)
// structure:
studies_access: {
	type: 'black' | 'white',
	tools: [
		{
			name: '<indicator name>', // 'Bollinger Bands'
			grayed: true
		},
		{},
		{}
	]
} /*
type:		the list type. options:
	black:		all listed items are disabled (disable     the list).
	white:		only listed items are enabled (enable only the list).
tools:	the list. array of objects, each object with following props:
	name:			name of a study (required). (use the same names as in the pop-ups of indicators)
	grayed:		boolean. true: makes item visible (regardless of `type` value) but disabled.

when user clicks on a grayed out study the `.onGrayedObjectClicked()` function is called. */
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* drawings_access
an object same as studies_access but it controls drawing tools. (v1.1+)
use the same names from ui.
special case for 'Icon' tool:
	use the 'Font Icons' name.
	its sub-items cannot be enabled/disabled separately, only the entire group. */
drawings_access: {
	type: 'white',
	tools: [
		{
			name: '<drawing_tool_name>', // 'Trend Line'
			grayed: true
		},
		{},
		{}
	]
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// customFormatters
// an object to adjust display format of date and time values.
// formatter functions return the text that specifies date or time.
// formatLocal should convert date and time to local timezone.
customFormatters: {
	timeFormatter: {
		format: function (date) { return ''; },
		formatLocal: function (date) { return ''; }
	}
	dateFormatter: {
		format: function (date) { return ''; },
		formatLocal: function (date) { return ''; }
	}
}

// example:
customFormatters: {
  timeFormatter: {
    format: function (date) {
			var _format_str = '%h:%m';
			return _format_str.replace('%h', date.getUTCHours(), 2)
				.replace('%m', date.getUTCMinutes(), 2)
				.replace('%s', date.getUTCSeconds(), 2);
		}
  },
	dateFormatter: {
		format: function (date) {
			return date.getUTCFullYear() + '/' + date.getUTCMonth() + '/' + date.getUTCDate();
		}
	}
}
// example: (farsi dates using jalaali-js lib)
customFormatters: {
	dateFormatter: {
		format: function (date) {
			const faWeek = ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'];
			const weekday = date.getDay();
			const j = jalaali.toJalaali(date);
			const jdate = `${j.jd}-${j.jm}-${j.jy}`;
			return faWeek[weekday] + ' ' + jdate;
		}
	}
}
// online.agah.com example (not sure it makes sense):
customFormatters: {
	dateFormatter: {
		format: function (date) {
			const faWeek = ['شنبه','یکشنبه','دوشنبه','سه شنبه','چهارشنبه','پنجشنبه','جمعه'];
			const year = date.getUTCFullYear();
			const month = date.getUTCMonth() + 1;
			const monthDay = date.getUTCDate();
			let weekDay = date.getUTCDay();
			if (weekDay === 0) weekDay = 7;
			const faDate = `${monthDay}-${month}-${year}`;
			return faWeek[weekDay-1] + ' ' + faDate;
		}
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// overrides
// an object containing new values for default widget properties.
// keys:		names of overridden properties.
// values:	new values of the properties.
// support for drawings overrides since v1.5

// Example:
overrides: {
	'mainSeriesProperties.style': 0,
	'mainSeriesProperties.priceLineWidth': 1
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// custom_indicators_getter
// function that returns a promise object with an array of your custom indicators.
custom_indicators_getter: function (pinejs) {
	// pinejs: for accessing internal helper functions.
},
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// studies_overrides
// customize the style or inputs of the indicators or compare series.
studies_overrides: {
	'volume.volume.color.0': '#00FFFF',
	'volume.volume.color.1': '#0000FF',
	'volume.volume.transparency': 70,
	'volume.volume ma.color': '#FF0000',
	'volume.volume ma.transparency': 30,
	'volume.volume ma.linewidth': 5,
	'volume.show ma': true,
	'bollinger bands.median.color': '#33FF88',
	'bollinger bands.upper.linewidth': 7
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* time_frames
list of visible timeframes that can be selected at the bottom of the chart.
array of objects that contain 4 properties:
	text:					should have the following format: <integer><y|m|d> ( \d+(y|m|d) as Regex ).
	resolution:		a string representing a resolution.
	description:	pop-up menu display. optional. not specified: title/text used as description. (v1.7+)
	title:				a value to override default title generated based on text property. optional. (v1.9+) */
time_frames: [
	{ text: '50y',   resolution: '6M', description: '50 Years'              },
	{ text: '3y',    resolution: 'W',  description: '3 Years', title: '3yr' },
	{ text: '8m',    resolution: 'D',  description: '8 Month'               },
	{ text: '3d',    resolution: '5',  description: '3 Days'                },
	{ text: '1000y', resolution: 'W',  description: 'All',     title: 'All' },
]
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* favorites
an object to specify items that should be marked as favorite by default.
this option requires localstorage featureset to be disabled.
object structure:
	intervals:	 names array of time intervals.
	chartTypes:	 names array of chart types. names are identical to ui in english version. */
favorites: {
	intervals: ['D', '2D'],
	chartTypes: ['Area', 'Candles']
},
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// save_load_adapter (v1.12+)
// an object containing the save/load functions.
// if available, it should have the following methods:

// chart layouts:
getAllCharts(): Promise<ChartMetaInfo[]>
removeChart(chartId): Promise<void>
saveChart(chartData: ChartData): Promise<ChartId>
getChartContent(chartId): Promise<ChartContent>

// study templates:
getAllStudyTemplates(): Promise<StudyTemplateMetaInfo[]>
removeStudyTemplate(studyTemplateInfo: StudyTemplateMetaInfo): Promise<void>
saveStudyTemplate(studyTemplateData: StudyTemplateData): Promise<void>
getStudyTemplateContent(studyTemplateInfo: StudyTemplateMetaInfo): Promise<StudyTemplateContent>
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// settings_adapter (v1.11+)
// an object containing set/remove functions, for saving chart settings to preferred storage. (including server-side)
// if available, it should have the following methods:
settings_adapter: {
	initialSettings: {}																				// an object with the initial settings.
	setValue: function (key: string, value: string):void {},	// a function to store key/value pair.
	removeValue: function (key: string):void {},							// a function to remove a key.
},
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@