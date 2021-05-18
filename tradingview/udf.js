// response as table
{
	col: [] // array:        different values for each row
	col: 2  // single value: same      value  for all  rows
}
// example:
{
 symbols: ["MSFT", "AAPL", "FB", "GOOG"],
 min_price_move: 0.1,
 description: ["Microsoft corp.", "Apple Inc", "Facebook", "Google"]
} /* same as:
+--------+----------------+-----------------+
| symbol | min_price_move | description     |
+--------+----------------+-----------------+
| MSFT   | 0.1            | Microsoft corp. |
+--------+----------------+-----------------+
| AAPL   | 0.1            | Apple Inc.      |
+--------+----------------+-----------------+
| FB     | 0.1            | Facebook        |
+--------+----------------+-----------------+
| GOOG   | 0.1            | Google          |
+--------+----------------+-----------------+  */
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// config
// request:  GET /config
// response: json response with the same structure of js api setup call, (config passed to japi.onReady() callback)
// plus 2 additional properties:
supports_search: false,      // true: data feed supports symbol search and individual symbol resolve.
supports_group_request: true // true: data feed provides full information only for symbol groups. (and is not able to perform symbol search or individual symbol resolve)

// if data feed doesn't implement this call (doesn't respond or sends 404 error),
// then the default configuration is used:
{
	supported_resolutions: ['1', '5', '15', '30', '60', '1D', '1W', '1M'],
	supports_group_request: true,
	supports_marks: false,
	supports_search: false,
	supports_timescale_marks: false
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* symbol group
request:
	GET /symbol_info?group=<group_name>
	group_name: string
eg: /symbol_info?group=NYSE

response:
	json response with similar structure to SymbolInfo (but not equal)
	(properties are treated as table columns)

this call is used if your data feed sent supports_group_request: true in the configuration data. (or didn't respond to the configuration request at all)
if data feed doesn't support the requested symbol group you may expect a 404 error. (shouldn't happen if config.supports_group_request is set correctly)

when using this mode of receiving data (getting large amount of symbol data) your browser will keep the data that wasn't even requested by the user.
if your symbol list has more than a few items, consider using symbol search or individual symbol resolve instead.
*/
{
	"symbol": "",
	"ticker": "",
	"description": "",
	"type": "",
	"session-regular": "", // (same as to SymbolInfo.session)
	"exchange-listed": "", // alias: exchange-traded
	"timezone": "",
	"minmovement": 1,      // alias: minmov  (minmov  is deprecated and will be removed in future releases)
	"minmovement2": 0,     // alias: minmov2 (minmov2 is deprecated and will be removed in future releases)
	"pricescale": 0,
	"fractional": false,
	"supported-resolutions": [],
	"has-intraday": false,
	"intraday-multipliers": [],
	"has-daily": false,
	"has-weekly-and-monthly": false,
	"has-empty-bars": false
	"has-no-volume": false,
	"volume_precision": 0,
	"force-session-rebuild": false
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* symbol resolve
request: GET /symbols?symbol=<symbol>
	symbol: string. symbol name or ticker.
	example:
		/symbols?symbol=AAL
		/symbols?symbol=NYSE:MSFT
response:
	json response with the same structure as SymbolInfo.

this call is requested if your data feed set the following in the configuration request:  */
supports_group_request: false
supports_search: true 
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* symbol search
request: GET /search?query=<query>&type=<type>&exchange=<exchange>&limit=<limit>
	query:    string.   text typed by the user in the symbol search input
	type:     string.   one of the symbol types supported by your back-end
	exchange: string.   one of the exchanges supported by your back-end
	limit:    integer.  maximum number of symbols in a response
	example:  /search?query=AA&type=stock&exchange=NYSE&limit=15

response:
	array of symbol objects as in japi.searchSymbols() call.

this call is requested if your data feed set the following in the configuration request:  */
upports_group_request: false
supports_search: true
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* bars
request: GET /history?symbol=<ticker_name>&from=<unix_timestamp>&to=<unix_timestamp>&resolution=<resolution>
	symbol:      symbol name or ticker.
	from:        unix timestamp (UTC) of leftmost required bar
	to:          unix timestamp (UTC) of rightmost required bar
	resolution:  string
	example: /history?symbol=BEAM~0&resolution=D&from=1386493512&to=1395133512

response:
	object with properties listed below.
	(properties are treated as table columns)

bar time for daily bars should be 00:00 UTC and is expected to be a trading day (not a day when the session starts). charting library aligns the time according to the Session from SymbolInfo.
bar time for monthly bars should be 00:00 UTC and is the first trading day of the month.
prices should be passed as numbers and not as strings in quotation marks.  */
{
	"s": "",      // status code. expected values: ok | error | no_data
	"errmsg": "", // error message. Should be present only when s = 'error'
	"t": 0,       // bar time. unix timestamp (utc)
	"c": 0,       // closing price
	"o": 0,       // opening price (optional)
	"h": 0,       // high price (optional)
	"l": 0,       // low price (optional)
	"v": 0,       // volume (optional)
	"nextTime": 0 // time of the next bar if there is no data (status code = no_data) in the requested period (optional)
}
// example:
{
	s: "ok",
	t: [1386493512, 1386493572, 1386493632, 1386493692],
	c: [42.1, 43.4, 44.3, 42.8]
}
// example:
{
	s: "no_data",
	nextTime: 1386493512
}
// example:
{
	s: "ok",
	t: [1386493512, 1386493572, 1386493632, 1386493692],
	c: [42.1, 43.4, 44.3, 42.8],
	o: [41.0, 42.9, 43.7, 44.5],
	h: [43.0, 44.1, 44.8, 44.5],
	l: [40.4, 42.1, 42.8, 42.3],
	v: [12000, 18500, 24000, 45000]
}
/* how nextTime works
with the following conditions:
	resolution:    1
	date range:    [3 Apr 2015 16:00 UTC+0, 3 Apr 2015 19:00 UTC+0]
	exchange:      NYSE
library expects the following response from the data feed:
(since april 3rd is friday and NYSE market is closed)  */
{
  s: "no_data",
  nextTime: 1428001140000 // 2 Apr 2015 18:59:00 GMT+0
}
// nextTime is the time of the closest available bar in the past.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* marks
request: GET /marks?symbol=<ticker_name>&from=<unix_timestamp>&to=<unix_timestamp>&resolution=<resolution>
	symbol:        symbol name or ticker.
	from:          unix timestamp (utc) of leftmost visible bar.
	to:            unix timestamp (utc) of rightmost visible bar.
	resolution:    string.

response:
	object with properties listed below. similar to japi.getMarks() call.
	(properties are treated as table columns)  */
{
	id: [],             // array of ids
	time: [],           // array of times
	color: [],          // array of colors
	text: [],           // array of texts
	label: [],          // array of labels
	labelFontColor: [], // array of label font colors
	minSize: [],        // array of minSizes
}
// this call is requested if your data feed set the following in the configuration request:  
supports_marks: true
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* timescale marks
request: GET /timescale_marks?symbol=<ticker_name>&from=<unix_timestamp>&to=<unix_timestamp>&resolution=<resolution>
	symbol:        symbol name or ticker.
	from:          unix timestamp (utc) or leftmost visible bar.
	to:            unix timestam.p (utc) or rightmost visible bar.
	resolution:    string

response: 
	array of objects with the following properties:
	id:         unique identifier of a mark.
	color:      rgba color.
	label:      a letter to be displayed in a circle.
	time:       unix time.
	tooltip:    tooltip text.

this call is requested if your data feed set the following in the configuration request:  */
supports_timescale_marks: true
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* server time
request: GET /time
response:
	numeric unix time without milliseconds.
	example:  */
1445324591
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* quotes
request: GET /quotes?symbols=<ticker_name_1>,<ticker_name_2>,...,<ticker_name_n>

Example: GET /quotes?symbols=NYSE%3AAA%2CNYSE%3AF%2CNasdaqNM%3AAAPL

response:
	object with the following keys.
	*/
{
	"s": "",      // status code for the request. expected values: ok | error
	"errmsg": "", // error message. should be present only when s = 'error'
	"d": [{}, {}] // symbols data Array
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// constructor
new Datafeeds.UDFCompatibleDatafeed(datafeedURL, updateFrequency)
datafeedURL     // url of the server which receives requests and returns data.
updateFrequency // frequency of requests that the data feed will send to the server in milliseconds. default: 10000 (10 sec)

// example:
const widget = new TradingView.widget({
	datafeed: new Datafeeds.UDFCompatibleDatafeed('https://demo_feed.tradingview.com', 10000)
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@