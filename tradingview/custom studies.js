var myIndicator = {
	name: '<study name>',                               // replace the <study name> with your study name (used internally as well)
	
	metainfo: {
		_metainfoVersion:  40,
		id:                '<study name>@tv-basicstudies-1',
		scriptIdPart:      '',
		name:              '<study name>',
		description:       '<study description>',         // displayed in the Indicators window. also used as a 'name' argument when calling the createStudy method
		shortDescription:  '<short study description>',   // displayed on the chart
		is_hidden_study:   true,
		is_price_study:    true,
		isCustomIndicator: true,
		plots: [ {'id': 'plot_0', 'type': 'line'} ],
		defaults: {
			styles: {
				plot_0: {
					linestyle:    0,
					visible:      true,
					linewidth:    2,                            // plot line width.
					plottype:     2,                            /* ploy type
						1  Histogram
						2  Line
						3  Cross
						4  Area
						5  Columns
						6  Circles
						7  Line with Breaks
						8  Area with Breaks */
					trackPrice:   false,                        // show price line?
					transparency: 40,                           // plot transparency, in percent.
					color:       '#0000FF'                      // plot color in #RRGGBB format
				}
			},
			precision: 2,                                   // precision of the study's output values (quantity of digits after the decimal separator)	
			inputs: {}
		},
		styles: {
			plot_0: {
				title:         '-- output name --',           // displayed in the Style window
				histogramBase: 0,
			}
		},
		inputs: [],
	},
	
	constructor: function() {
		this.init = function(context, inputCallback) {
			this._context = context;
			this._input = inputCallback;
			
			/* define the symbol to be plotted.
			symbol should be a string.
			you can use PineJS.Std.ticker(this._context) to get the selected symbol's ticker.
			for example:
				var symbol = 'AAPL';
				var symbol = '#EQUITY';
				var symbol = PineJS.Std.ticker(this._context) + '#TEST'; */
			var symbol = '<TICKER>';
			this._context.new_sym(symbol, PineJS.Std.period(this._context), PineJS.Std.period(this._context));
		};
		
		this.main = function(context, inputCallback) {
			this._context = context;
			this._input = inputCallback;
			
			this._context.select_sym(1);
			
			/* you can use following built-in functions in PineJS.Std object:
				open, high, low, close
				hl2, hlc3, ohlc4
			*/
			var v = PineJS.Std.close(this._context);
			return [v];
		}
	}
};

new TradingView.widget({
	custom_indicators_getter: function(PineJS) {
		return Promise.resolve([
			// *** your indicator object, created from the template ***
			myIndicator // hmmm like this?
		]);
	},
})