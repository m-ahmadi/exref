// SymbolInfo is an object containing symbol metadata.
// this object is the result of resolving the symbol.
// SymbolInfo has following fields:

var symbolInfo = {
	name: '',                      // string. name of the symbol that users will see. used for data requests if not using tickers.
	ticker: '',                    // unique identifier for this symbol. set: used for all data requests for this symbol. not set: treated the same as name property.
	description: '',               // description of a symbol. displayed in the chart legend for this symbol.
	type: '',                      // type of the instrument. optional. options: stock index forex futures bitcoin expression spread cfd another string value.
	session: '',                   // # trading hours for this symbol.
	exchange: '',                  // name of the exchange where this symbol is traded. displayed in the chart legend for this symbol.
	listed_exchange: '',           // name of the exchange where this symbol is traded. displayed in the chart legend for this symbol.
	timezone: '' ,                 // timezone of the exchange for this symbol in olsondb format. (Asia/Tehran, America/New_York, Etc/UTC)
	expired: false,                // default: false. true: this symbol is an expired futures contract.
	sector: '',                    // sector for stocks to be displayed in the Symbol Info.
	industry: '',                  // industry for stocks to be displayed in the Symbol Info.
	currency_code: '',             // currency to be displayed in the Symbol Info.
	minmov: 1,                     // # used for common/fractional prices.
	pricescale: 100,               // # used for common/fractional prices.
	minmove2: 0,                   // # used for common/fractional prices.
	fractional: false,             // # used for common/fractional prices.
	supported_resolutions: [],     // # array of resolutions which should be enabled for this symbol.
	has_intraday: false,           // # symbol's data has minutes bars or not?
	intraday_multipliers: [],      // # array of resolutions (in minutes) supported by data feed.
	has_seconds: false,            // # symbol's data has second bars or not?
	seconds_multipliers: [],       // # array of resolutions (in seconds) supported by data feed.
	has_daily: false,              // # symbol's data has day bars or not?
	has_weekly_and_monthly: false, // # symbol's data has weekly and monthly bars or not?
	has_empty_bars: false,         // # generate empty bars in the session when there is no data from the data feed.
	has_no_volume: false,          // default: false. true: symbol includes volume data.
	volume_precision: 0,           // default: 0. decimal places of the volume value for a particular symbol. 0: volume is always an integer. 1: there might be 1 numeric character after the comma.
	data_status: 'endofday',       // status code of a series with this symbol. shown in chart upper right corner. options: streaming, endofday, pulsed, delayed_streaming
	expiration_date: 0             // unix timestamp of the expiration date. must be set when expired = true. chart requests data for this symbol starting from this time point.
};

// minimal:
var symbolInfo = {
	name: 'AMZN',
	ticker: 'AMZN',
	description: 'some description',
	session: '0900-1230',          // no specified: console.warn(): SymbolInfo validation: session must be non-empty string
	timezone: 'Asia/Tehran' ,
	minmov: 1,
	pricescale: 1
};

//------------------------------------------------------------------------------
minmov, pricescale, minmove2, fractional, // these four have different meanings when used for common and fractional prices.

// common prices: (MinimalPossiblePriceChange = minmov / pricescale)
minmov: 1,         // amount of price movement for 1 tick. it's devided by pricescale. (minmove of 1 = 1 cent in us exchange)
pricescale: 100,   // number of decimal places. it's the 10^number-of-decimal-places. (100 = 1.01, 9.37) (1000 = 1.005, 5.127)
minmove2: 0,       // 0 or skipped.
fractional: false, // false or skipped.

/* fractional prices:
displayed in 2 forms:
	xx'yy       eg: 133'21
	xx'yy'zz    eg: 133'21'5
xx is an integer part  */
minmov: 1,         // minmov/pricescale is a fraction.
pricescale: 128,
minmove2: 4,       // used in 2nd form: yy'zz / (pricescale/minmove2)
fractional: true,
// example with minmov: 1, pricescale: 128 minmove2: 4
119'16'0 // 119 + 16/32
119'16'2 // 119 + 16.25/32
119'16'5 // 119 + 16.5/32
119'16'7 // 119 + 16.75/32
//------------------------------------------------------------------------------
session: '', /*
	required field. if not set: console.warn(): SymbolInfo validation: session must be non-empty string
	time is expected to be in exchange time zone.
	format: HHMM-HHMM
	|               session separator
	:               day specifier
	day numbers:    1 sunday, 2 monday, 3 tuesday, 4 wednesday, 5 thursday, 6 friday, 7 saturday
	;               first trading day of week specifier
examples:
	0930-1600                  starts at 9:30am and ends at 4:00pm
	24x7                       traded all the time (bitcoin or other cryptos)
	1700-0900                  overnight session since start time > end time
	
multiple sessions must be comma-separated:
	0930-1400,1430-1700        2 trading sessions within a single day
	
different trading hours from day to day:
	0900-1630|0900-1400:2      on mondays: 0900-1400 rest of week: 0900-1630
	0900-1630|0900-1400:23     on mondays & tuesdays: 0900-1400
	
specify first trading day of the week: (v1.1)
	1;0900-1630|0900-1400:2    sunday is first day of the week
	0900-1630|0900-1400:2;6    saturday
	0900-1630|0900-1400:2      monday (default value)  */
supported_resolutions: ['1D', '1W'] /*
	array of resolutions which should be enabled for this symbol.
	each item of an array is expected to be a resolution string.
	when symbol changes and the new symbol does not support the selected resolution, resolution is switched to the first available item in the list.
	resolution availability logic (pseudocode):
		resolutionAvailable = resolution.isIntraday
			? symbol.has_intraday && symbol.supports_resoluiton(resolution)
			: symbol.supports_resoluiton(resolution);
	in case of absence of supported_resolutions in a symbol info all DWM resolutions will be available.
	intraday resolutions will be available if has_intraday is true.
	supported resolutions affect available timeframes too.
	the timeframe will not be available if it requires the resolution that is not supported.  */
has_intraday: false, /*
	whether the symbol includes intraday (minutes) historical data.
	default: false
	true:    all resolutions that are supplied directly by the datafeed must be provided in intraday_multipliers array.
	false:   all buttons for intraday resolutions will be disabled for this symbol.  */
intraday_multipliers: [], /*
	array of resolutions (in minutes) supported directly by the data feed.
	default: []
	each resolution item:
		may    be passed      to getBars().
		should be implemented by getBars().
	if default value is set, it means data feed supports aggregating by any number of minutes.
	if the data feed only supports certain minute resolutions but not the requested resolution,
	getBars will be called (repeatedly if needed) with a higher resolution as a parameter, in order to build the requested resolution.
	example:
	if
		data feed only supports minute resolution, set intraday_multipliers = ['1']
	then
		when users want to see 5-minute data,
		getBars() is called with the resolution set to 1 until the library builds all the 5-minute resolution by itself.  */
has_seconds: false, /*
	whether the symbol includes seconds in the historical data.
	default: false
	false:   all buttons for resolutions that include seconds will be disabled for this particular symbol.
	true:    all resolutions that are supplied directly by the data feed must be provided in seconds_multipliers array.  */
seconds_multipliers: [], /*
	array containing resolutions that include seconds (excluding postfix) that the data feed provides.
	default: []
	example:
	if
		data feed supported resolutions = ['1S', '5S', '15S']
	then
		this means you have 1-second bars for this symbol, and
		you should set seconds_multipliers of this symbol to [1],
		so the library builds '5S' and '15S' resolutions by itself.  */
has_daily: false, /*
	whether data feed has its own daily resolution bars or not.
	default: false
	false:   library builds the daily bars using 1-minute bars by itself.
	true:    library request daily bars from the data feed.  */
has_weekly_and_monthly: false, /*
	whether data feed has its own weekly & monthly resolution bars or not.
	default: false
	false:   library builds   weekly & monthly bars using daily bars by itself.
	true:    library requests weekly & monthly bars from the data feed.  */
has_empty_bars: false,  /*
	default: false
	true: library generates empty bars in the session when there is no data from the data feed.
	example:
	if
		session:0900-1600
		data has gaps between 11:00 and 12:00
		has_empty_bars === true
	then
		library fills the gaps with bars for this time.  */
force_session_rebuild: true, /*
	whether the library should filter bars using the current trading session.
	default: true
	false:   bars will be filtered only when the library builds data from another resolution or if has_empty_bars was set to true.
	true:    library removes bars that don't belong to the trading session from your data.  */