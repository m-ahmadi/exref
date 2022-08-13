// https://cdn.jsdelivr.net/npm/ml5/
// https://cdn.jsdelivr.net/npm/ml5/dist/ml5.min.js

var nn = ml5.neuralNetwork({
	inputs:       [] | 0,
	outputs:      [] | 0,
	dataUrl:      null,
	modelUrl:     null,
	layers:       [],    // custom layers 
	task:         null | 'classification|regression|imageClassificaiton',
	debug:        false, // show training visualization
	learningRate: 0.2,
	hiddenUnits:  16,
};

// https://learn.ml5js.org/#/reference/neural-network?id=properties

nn.callback
nn.options
nn.neuralNetwork
nn.neuralNetworkData
nn.neuralNetworkVis
nn.data
nn.ready

nn.addData(xs=[]|{}, ys=[]|{})
nn.normalizeData()
nn.train(?optionsOrCallback, ?optionsOrWhileTraining, ?callback)
nn.predict(inputs=[]|{}, callback)
nn.predictMultiple(inputs=[[],..] | [{},..], callback)
nn.classify(inputs=[]|{}, callback)
nn.classifyMultiple(inputs=[[],] | [{},..], callback, callback)
nn.saveData(?outputName='', ?callback)
nn.loadData(filesOrPath=''|InputFiles, ?callback)
nn.save(?outputName='', ?callback)
nn.load(filesOrPath=''|InputFiles, ?callback)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

var data = [
	{r:255, g:0,   b:0,   color:'red-ish'},
	{r:254, g:0,   b:0,   color:'red-ish'},
	{r:253, g:0,   b:0,   color:'red-ish'},
	{r:0,   g:255, b:0,   color:'green-ish'},
	{r:0,   g:254, b:0,   color:'green-ish'},
	{r:0,   g:253, b:0,   color:'green-ish'},
	{r:0,   g:0,   b:255, color:'blue-ish'},
	{r:0,   g:0,   b:254, color:'blue-ish'},
	{r:0,   g:0,   b:253, color:'blue-ish'}
];

var nn = ml5.neuralNetwork({task:'classification', debug:true});

data.forEach(({r,g,b,color}) => nn.addData({r,g,b}, {color}));

nn.normalizeData();

nn.train({epochs:32, batchSize:12, ()=> {
	nn.classify({r:255, g:0, b:0}, (err, reuslt)=>
		console.log(err || result)  // {label: 'red', confidence: 0.8}
	);
});