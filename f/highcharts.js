// https://cdn.jsdelivr.net/npm/highcharts/
Highcharts.chart(container, config)
Highcharts.stockChart(container, config)

ChartType = 'line|area|column|bar|pie|scatter||bubble|...\
line      | spline                                                                                                                               \
area      | arearange      areaspline   areasplinerange  bellcurve  windbarb                                                                     \
column    | columnpyramid  columnrange  boxplot          cylinder   errorbar  funnel  histogram  lollipop  pareto  pyramid  variwide  waterfall| \
bar       | bullet         dumbbell     xrange                                                                                                   \
pie       | variablepie    venn                                                                                                                  \
scatter   | item           polygon      vector                                                                                                   \
bubble    | packedbubble                                                                                                                         \
heatmap   | treemap        tilemap|                                                                                                              \
scatter3d | funnel3d       pyramid3d|                                                                                                            \
gauge     | solidgauge                                                                                                                           \
dependencywheel  networkgraph  organization  sankey  streamgraph  sunburst  timeline  wordcloud',

Color = GradientColor{} | Pattern{}

var chart = Highcharts.chart(container=HTMLElement|'id', config={
	series: [ {}, {}, ...
		{
			type: 'ChartType',
			data: [ 0|{}, ... ]
		}
	],
	
	chart: {
		type: 'ChartType',
		resetZoomButton: { relativeTo:'chart',  position:{align:'right',verticalAlign:'top',x:0,y:0}, them:{zIndex:6} }
	},
	
	chart: {
		alignTicks:          true,
		animation:           false | AnimationOptions{},
		backgroundColor:     '#ffffff' | Color,
		borderColor:         '#335cad' | Color,
		borderRadius:        0,
		borderWidth:         0,
		className:           '',
		colorCount:          10,
		defaultSeriesType:   'line', // depricated
		displayErrors:       true,
		events:              {
			addSeries:   (e)=>,
			afterPrint:  (e)=>,
			beforePrint: (e)=>,
			click:       (e)=>,
			drilldown:   (e)=>,
			drillup:     (e)=>,
			drillupall:  (e)=>,
			exportData:  (e)=>,
			load:        (e)=>,
			redraw:      (e)=>,
			render:      (e)=>,
			selection:   (e)=>,
		},
		height:              null,
		ignoreHiddenSeries:  true,
		inverted:            false,
		margin:              0 | [0, ...],
		marginBottom:        0,
		marginLeft:          0,
		marginRight:         0,
		marginTop:           0,
		numberFormatter:     ()=>,
		options3d:           {...},
		panKey:              '',
		panning:             {enabled: false, type: 'x'},
		parallelAxes:        {...},
		parallelCoordinates: false,
		pinchType:           undefined | 'x|y|xy',
		plotBackgroundColor: '' | Color,
		plotBackgroundImage: '',
		plotBorderColor:     '#cccccc' | Color,
		plotBorderWidth:     0,
		plotShadow:          false,
		polar:               false,
		reflow:              true,
		renderTo:            'id' | HTMLElement,
		resetZoomButton:     {...},
		scrollablePlotArea:  {...},
		selectionMarkerFill: 'rgba(51,92,173,0.25)',
		shadow:              false,
		showAxes:            false,
		spacing:             [10, 10, 15, 10],
		spacingBottom:       15,
		spacingLeft:         10,
		spacingRight:        10,
		spacingTop:          10,
		style:               {fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif', fontSize: '12px'},
		styledMode:          false,
		type:                'line' | ChartType,
		width:               null,
		zoomKey:             '',
		zoomType:            '',
	}

	
	title: {
		align:  '',
		text:   '',
		style:  {color:'', fontSize:''}
	},
	
	align:         'center|left|right',
	floating:      false,
	margin:        15,
	style:         {color: '#333333', fontSize: '18px'},
	text:          '',
	useHTML:       false,
	verticalAlign: undefined | 0,
	widthAdjust:   -44,
	x:             0
	y:             undefined | 0,
	
	xAxis: {
		labels: true,
		
		events: {
			setExtremes: (e)=>
		}
	},
	
	yAxis: {
		title: false,
	},
	
	legend: {
		enabled: true,
	},
	
	tooltip: {
		formatter: ()=>,
		changeDecimals: 0
	},
	
	navigator: {
		adaptToUpdatedData: false
	},
	
	rangeSelector: false,
	exporting:     false,
	credits:       false,
})