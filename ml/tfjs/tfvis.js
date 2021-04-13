// https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-vis/
// https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-vis/dist/tfjs-vis.umd.min.js

tfvis.render.METHOD(
	container=HTMLElement | {name:'',?tab:''} | Surface | {drawArea: HTMLElement},
	data=[],
	?opts={}
)
container = HTMLElement | {name:'',?tab:''} | Surface | {drawArea: HTMLElement}
commonOpts = {
	width, height, xLabel, yLabel, fontSize, xType, yType
}

tfvis.render.barchart(,, {color, ...commonOpts})
tfvis.render.confusionMatrix(,, {shadeDiagonal, showTextOverlay, colorMap, ...commonOpts})
tfvis.render.heatmap(,, {colorMap, domain, rowMajor, ...commonOpts})
tfvis.render.histogram(,, {stats, maxBins, color, ...commonOpts})
tfvis.render.linechart(,, {xAxisDomain, yAxisDomain, zoomToFit, seriesColors, ...commonOpts})
tfvis.render.scatterplot(,, ↑...)
tfvis.render.table(,, {?fontSize})
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

tfvis.render.scatterplot(
	{name: 'Horsepower v MPG'},
	{values:[{x:1,y:2}, {x:3,y:4}, {x:5,y:6}, {x:7,y:8}]}, 
	{xLabel:'Horsepower', yLabel:'MPG', height:300}
)

tfvis.render.barchart({name:'Bar chart', tab:'Charts'}, [{index:0,value:50}, {index:1,value:100}, {index:2,value:150}])