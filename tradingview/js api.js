const japi = {
	// essential:
	onReady:               function (callback) {},
	resolveSymbol:         function (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) {},
	getBars:               function (symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest) {},
	subscribeBars:         function (symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) {},
	// optional:
	searchSymbols:         function (userInput, exchange, symbolType, onResultReadyCallback) {},
	unsubscribeBars:       function (subscriberUID) {},
	calculateHistoryDepth: function (resolution, resolutionBack, intervalBack) {},
	getMarks:              function (symbolInfo, from, to, onDataCallback, resolution) {},
	getTimescaleMarks:     function (symbolInfo, from, to, onDataCallback, resolution) {},
	getServerTime:         function (callback) {}
};
subscribeBars: undefined // TypeError: this._datafeed.subscribeBars is not a function

// basic flow:
onReady()
getServerTime()
resolveSymbol() 
getBars() // symbolInfo object passed to resolveSymbol is passed to getBars
// pass an array of bar data to getBar's onHistoryCallback

// call order:
onReady()
getServerTime()
resolveSymbol()
calculateHistoryDepth()
getBars()
subscribeBars()
calculateHistoryDepth()
getMarks()
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
japi.onReady = function (callback) {
	const config = {};
	setTimeout(callback, 0, config);
	// or:
	setTimeout(() => callback(config), 0);
	
	callback(config); // warning: `onReady` should return result asynchronously.
};

const config = {
//----------------------------------------------------------------------------------------------------------
	exchanges: [                          // array of exchange descriptor objects
		{
			value: '',                        // passed as exchange argument to searchSymbols
			name: '',
			desc: ''
		},
		{}, ...
	],
	// or:
	exchanges: [],                        // no exchanges filter in Symbol Search list.
	// or:
	exchanges: [ {value: ''} ],           // include all exchanges.
//----------------------------------------------------------------------------------------------------------	
	symbols_types: [                      // array of filter descriptor objects.
		{
			name: '',
			value: ''                         // passed as symbolType argument to searchSymbols().
		},
		{}, ...
	],
	// or:
	symbolsTypes: [],                     // leads to the absence of filter types in Symbol Search list.
	// or:
	symbolsTypes: [ {value: ''} ],        // include all filter types.
//----------------------------------------------------------------------------------------------------------
	supported_resolutions: ['', '']       // array of supported resolutions. 1D 1W
	supported_resolutions: undefined | [] // includes the default resolutions.
//----------------------------------------------------------------------------------------------------------
	supports_marks: true,                 // boolean. true: your datafeed supports marks on bars.
	supports_timescale_marks: true,       // boolean. true: your datafeed supports timescale marks.
	supports_time: true,                  // boolean. true: your datafeed provides server time (unix time). it's used to adjust countdown on the price scale.
//----------------------------------------------------------------------------------------------------------
	futures_regex: /^&###/                // regex. used to group futures in the symbol search. it will be applied to instruments with futures as a type.
	futures_regex: /^(.+)([12]!|[FGHJKMNQUVXZ]\d{1,2})$/ // this regex should divide an instrument name into 2 parts: a root and an expiration.
};

// example:
const config = {
	supports_search: true,
	supports_marks: true,
	exchanges: [
		{ value: '',      name: 'All Exchanges', desc: '' },
		{ value: 'XETRA', name: 'XETRA',         desc: 'XETRA' },
		{ value: 'NSE',   name: 'NSE',           desc: 'NSE' }
	],
	symbolsTypes: [
		{ name: 'All types', value: '' },
		{ name: 'Stock',     value: 'stock' },
		{ name: 'Index',     value: 'index' }
	],
	supportedResolutions: [ '1', '15', '30', '60', '1D', '2D', '3D', '1W', '3W', '1M', '6M' ]
}
// another example:
const config = {
	supported_resolutions: ['1', '5', '15', '30', '60', '1D', '1W', '1M'],
	supports_group_request: true,
	supports_marks: false,
	supports_search: false,
	supports_timescale_marks: false,
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
japi.resolveSymbol = function (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) {
	symbolName               // string. symbol name or ticker if provided.
	onSymbolResolvedCallback // function (SymbolInfo) {}
	onResolveErrorCallback   // function (reason) {}
	
	const symbolInfo = {
		name: 'AMZN',
		ticker: 'AMZN',
		description: 'some description',
		session: '0830-1230:71234;7',
		timezone: 'Asia/Tehran',
		minmov: 1,
		pricescale: 1
	};
	onSymbolResolvedCallback(symbolInfo); // warning: `resolveSymbol` should return result asynchronously.
	setTimeout(onSymbolResolvedCallback, 0, symbolInfo);
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
jap.getBars = function (symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest) {
	symbolInfo        = {} // SymbolInfo
	resolution        = '' // 1D, 1W
	from              = 0  // unix timestamp, leftmost required bar time
	to                = 0  // unix timestamp, rightmost required bar time (depends on browser's Date.now())
	onHistoryCallback = function (bars=[], meta={ noData: false }) {}
	onErrorCallback   = function (reason) {}
	firstDataRequest  = false
		// boolean indicating first call of this method for the particular symbol resolution.
		// when true: you can ignore `to` argument and return bars up to the latest bar.
	
	const bars = [
		{ time, close, open, high, low, volume },
		{}, ...
		// time of a bar must be a utc timestamp, otherwise library tries to realign the timestamps and messes everything up.
		// examples:
		{
			time: new Date(y, m-1, d).getTime()                               // failed
			time: new Date(y, m-1, d).setHours(0,0,0,0) / 1000                // failed
			time: new Date( Date.UTC(y, m-1, d) ).setUTCHours(0,0,0,0) / 1000 // worked
			time: Date.UTC(y, m-1, d) / 1000                                  // worked
		}
		// with non-utc timestamps:
		//	on 24x7 session,   all dates shift back one day.
		//	on other sessions, all dates are corrupted with many dupplicates and wrong dates. casued by _dwmAligner.tradingDayToSessionStart() in _alignBarsTime()
	];
	const meta = {
		noData: false,     // should be set when there's no data in the requested period and earlier only
		nextTime: 0        // unix time
	};
	onHistoryCallback(bars, meta);
	
	// example: (server sends data in chunks using `from` and `to` timestamps)
	const bars = await $.ajax('./api', { data: {from, to} }).catch( err => onErrorCallback(err.code) );
	if (bars.length) {
		onHistoryCallback(bars, { noData: false })
	} else {
		onHistoryCallback(bars, { noData: true })
	}
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
japi.calculateHistoryDepth = function (resolution, resolutionBack, intervalBack) {
	resolution        // requested symbol resolution
	resolutionBack    // time period types. supported values: D | M
	intervalBack      // amount of resolutionBack periods that library is going to request.
	
	// example:
	'D',  'M', 12     // library requests 12 months of daily bars
	'60', 'D', 15     // library requests 15 days of hourly bars
	
	return undefined;                                 // won't override anything.
	return { resolutionBack: 'M', intervalBack: 24 }; // override.
	
	// example: (set history to be 6 months deep when 1D resolution is requested by the library)
	if (resolution === '1D') {
		return { resolutionBack: 'M', intervalBack: 6 };
	}
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
japi.getMarks = function (symbolInfo, from, to, onDataCallback, resolution) {
	// this function is called only if `supports_marks: true` in the config passed to onReady() callback.
	// library assumes onDataCallback is called only once in this function.
	// maximum number of marks per bar is 10. marks outside of bars are not allowed.
	symbolInfo // SymbolInfo object
	from       // unix timestamp (utc). leftmost visible bar's time.
	to         // unix timestamp (utc). rightmost visible bar's time.
	onDataCallback = function (marks=[]) {}
	resolution // string
	
	const marks = [
		{
			id: 1,              // unique mark id. passed to `onMarkClick` event when user clicks on a mark.
			time: 0,            // unix time (utc)
			color: '',          // red | green | blue | yellow | { border: '#ff0000', background: '#00ff00' }
			text: '',           // mark popup text. html is supported as well.
			label: '',          // a letter to be printed on a mark. single character
			labelFontColor: '', // color of a letter on a mark
			minSize: 5          // minimum mark size (diameter, pixels) (default value is 5)
		},
		{}, ...
	];
	onDataCallback(marks);
	
	// example:
	const marks = [];
	const colors = ['red', 'green', 'blue', 'yellow', { border: '#ff0000', background: '#00ff00' }];
	for (let i=0; i<bars.length; i+=100) {
		marks.push({
			id: randInt(1,20),
			time: bars[i].time,
			color: colors[randInt(0,6)],
			text: [...Array(10)].map((i,j)=>'test'+j).join('\n'),
			label: String.fromCharCode(randInt(65,91)),
			labelFontColor: colors[randInt(0,6)],
			minSize: randInt(1,200)
		});
	}
	onDataCallback(marks);
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
japi.getTimescaleMarks = function (symbolInfo, from, to, onDataCallback, resolution) {
	// optional.
	// this function is called only if `supports_timescale_marks: true` in the config passed to onReady() callback.
	// library assumes onDataCallback is called only once in this function.
	// only one mark per bar is allowed. marks outside of the bars are not allowed.
	symbolInfo  // SymbolInfo object
	from        // unix timestamp (UTC). Leftmost visible bar's time.
	to          // unix timestamp (UTC). Rightmost visible bar's time.
	onDataCallback = function (marks=[]) {}
	resolution  // string
	
	const marks = [
		{
			id: 0,       // unique mark ID. Will be passed to a respective callback when user clicks on a mark
			time: 0,     // unix time, UTC
			color: '',   // red | green | blue | yellow | #000000
			label: '',   // a letter to be printed on a mark. Single character
			tooltip: '', // array of text strings. each element of the array is a new text line of a tooltip.
		},
		{}, ...
	];
	
	onDataCallback(marks);
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
japi.getServerTime = function (callback) {
	// this function is called only if `supports_time: true` in the config passed to onReady() callback.
	// library assumes callback is called only once.
	// time is provided without milliseconds.
	callback = function (unixTime) {}
	
	callback(1122334455);
	
	// example:
	const serverTime = await $.get('./get_time');
	callback(serverTime);
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
japi.subscribeBars = function (symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) { /*
	library calls this function when it wants to receive real-time updates for a symbol.
	onRealtimeCallback() either updates the last bar or add a new one.
	if the bar passed to onRealtimeCallback() has a time equal to current last bar, then the entire last bar is replaced.
	calling onRealtimeCallback() with a historical bar, results in an error. (any bar with time < last bar's time)
	there's no way to change historical bars once they've been received by the chart.  */
	symbolInfo     // SymbolInfo object
	resolution     // string
	onRealtimeCallback = function (bar={}) {}
	subscriberUID  // object
	onResetCacheNeededCallback = function() // to be executed when bar data has changed (since v1.7)
	
	const bar = { time, open, high, low, close, volume };
	onRealtimeCallback(bar);
	
	// example:
	// if last bar is: {1111122222333, 10, 12, 9, 11}
	onRealtimeCallback({1111122222333, 10, 14, 9, 14}) // then:
	// library detects a bar with time 1111122222333 already exists and is the last bar.
	// library replaces the entire last bar, so now last bar is:
	{1111122222333, 10, 14, 9, 14}
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
japi.unsubscribeBars = function (subscriberUID) {
	// library calls this function when it doesn't want to receive updates for this subscriber any more.
	subscriberUID // object. the same object that was passed to subscribeBars() before.
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
japi.searchSymbols = function (userInput, exchange, symbolType, onResultReadyCallback) {
	// this call provides a list of symbols that match user's search query.
	userInput   // string. text entered by user in the symbol search field.
	exchange    // string. requested exchange (chosen by user). empty value means no filter was specified.
	symbolType  // string. requested symbol type: index, stock, forex, etc (chosen by user). empty value means no filter was specified.
	onResultReadyCallback = function (result=[]) {}
	const result =  [
		{
			symbol: '',      // short symbol name
			full_name: '',   // full symbol name. eg: BTCE:BTCUSD
			description: '', // symbol description
			exchange: '',    // symbol exchange name
			ticker: '',      // optional. symbol ticker name. 
			type: ''         // stock | futures | bitcoin | forex | index
		},
		{}, ...
	];
	onResultReadyCallback(result || []); // pass empty array if no symbols are found.
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@