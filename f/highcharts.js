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

var chart = Highcharts.chart(container=HTMLElement|'id', config={
	series: [ {}, {}, ...
		{
			type: ChartType,
			data: [ 0|{}, ... ]
		}
	],
	
	chart: {
		type: ChartType,
		resetZoomButton: { relativeTo:'chart',  position:{align:'right',verticalAlign:'top',x:0,y:0}, them:{zIndex:6} }
	},
	
	chart: {
		alignTicks:          true,
		animation:           false | AnimationOptions{},
		backgroundColor:     '#ffffff' | GradientColor{} | Pattern{},
		borderColor:         '#335cad' | ↑ ...,
		borderRadius:        0,
		borderWidth:         0,
		className:           '',
		colorCount:          10,
		defaultSeriesType:   'line',
		displayErrors:       true,
		events:              {...},
		height:              null,
		ignoreHiddenSeries:  true,
		inverted:            false,
		margin:              undefined,
		marginBottom:        undefined,
		marginLeft:          undefined,
		marginRight:         undefined,
		marginTop:           undefined,
		numberFormatter:     undefined,
		options3d:           {...},
		panKey:              undefined,
		panning:             {...},
		parallelAxes:        {...},
		parallelCoordinates: false,
		pinchType:           undefined,
		plotBackgroundColor: undefined,
		plotBackgroundImage: undefined,
		plotBorderColor:     '#cccccc',
		plotBorderWidth:     0,
		plotShadow:          false,
		polar:               false,
		reflow:              true,
		renderTo:            undefined,
		resetZoomButton:     {...},
		scrollablePlotArea:  {...},
		selectionMarkerFill: 'rgba(51,92,173,0.25)',
		shadow:              false,
		showAxes:            undefined,
		spacing:             [10, 10, 15, 10],
		spacingBottom:       15,
		spacingLeft:         10,
		spacingRight:        10,
		spacingTop:          10,
		style:               {fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif', fontSize: '12px'},
		styledMode:          false,
		type:                'line' | ChartType,
		width:               null,
		zoomKey:             undefined,
		zoomType:            undefined,
	}

	
	title: {
		align:  '',
		text:   '',
		style:  {color:'', fontSize:''}
	},
	
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