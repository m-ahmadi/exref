createStudy(name='', forceOverlay=false, lock=false, inputs=[], overrides={}, options={})

const name   = '',    // string. name of an indicator as shown in the Indicators widget
forceOverlay = false, // forces library to place the study on main pane.
lock         = false, // boolean. whether user can remove/change/hide the study or not.
inputs       = [],    // array of study inputs (since v1.2). values must be in the same order shown in the study's settings dialog.
overrides    = {},    // object containing properties you'd like to set for your new study (since v1.2). start a property path with a plot name. (don't set study name)
options      = {
	checkLimit: false,  // true: study limit dialog is shown if the limit is exceeded.
	priceScale: ''      // preferred price scale for the study. possible values:
		'left'            // attach study to left  price scale.
		'right'           // attach study to right price scale.
		'no-scale'        // don't attach study to any price scale. (study is added in 'No Scale' mode)
		'as-series'       // attach study to price scale where the main series is attached. (only applicable if study is added to pane with the main series)
};
createStudy(name, forceOverlay, lock, inputs, overrides, options);


chart.createStudy('Moving Average', false, false, [12, 'hl2'])

chart.createStudy('Overlay', false, false, ['AAPL'])
chart.createStudy('Compare', false, false, ['open', 'AAPL'])