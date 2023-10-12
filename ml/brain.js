var { brain } = require('brain.js'); // npm i brain.js
/*
https://cdn.jsdelivr.net/npm/brain.js/dist/
https://unpkg.com/browse/brain.js/dist/
https://cdn.jsdelivr.net/npm/brain.js/dist/brain-browser.min.js
*/
var net = new brain.NeuralNetwork(?opts={
	binaryThresh:   0.5,
	hiddenLayers:   [3],                            // int arr for sizes of the network's hidden layers
	activation:     'sigmoid|relu|leaky-relu|tanh', // activation type
	leakyReluAlpha: 0.01 if activation=='leaky-relu'
})
var net = new brain.NeuralNetworkGPU(?opts=↑...)
var net = new brain.recurrent.RNN(?opts={
	inputSize:     20,
	inputRange:    20,
	hiddenLayers:  [20, 20],
	outputSize:    20,
	learningRate:  0.01,
	decayRate:     0.999,
})
var net = new brain.recurrent.LSTM(?opts={})
var net = new brain.recurrent.GRU(?opts={})
var net = new brain.recurrent.RNNTimeStep(?opts={})
var net = new brain.recurrent.LSTMTimeStep(?opts={})
var net = new brain.recurrent.GRUTimeStep(?opts={})
var cv  = new brain.CrossValidate(net, netOptions)
var stream = new brain.TrainStream(?opts={
	neuralNetwork:        net,
  floodCallback:        (trainStream, data)=>,
  doneTrainingCallback: (stats)=>,
})

var status = net.train(data=[], ?options={
	iterations:     20000 | +int,                            // max iterate of data
	errorThresh:    0.005 | 0>n<1,                           // acceptable error % from data 
	log:            false | (state=↓...)=>,                  // use console.log?
	logPeriod:      10 | int>0,                              // iterations between logging out
	learningRate:   0.3 | 0>n<1,                             // scales with delta to effect training rate
	momentum:       0.1 | 0>n<,                              // scales with next layer's change value
	callback:       null | (state={iterations:0,error:0})=>, // fn periodically called while training
	callbackPeriod: 10 | n>0,                                // iterations through data between callback calls
	timeout:        Infinity | n>0,                          // max milliseconds to train for
	praxis:         null | 'adam',
	// https://github.com/BrainJS/brain.js#training-options
}, ?KFolds): {errorr:0, iterations:0}
net.trainAsync(↑...)
net.run(input): {error:0,iterations:0}
net.forecast(input, count)
net.toJSON()
net.fromJSON(json)
net.toFunction()

// format of training data
NeuralNetwork
	input  = [0<n<1,...] | {k:0>n<1, ...} // input objs don't have to be similar
	output = {k:0<n<1, ...}
	data = [ [input, output], ...]

RNN | LSTM | GRU
	data = [
		any[] | '' | {input: any[]|'' output: any[]|''},
		...
	]

RNNTimeStep | LSTMTimeStep | GRUTimeStep
	data = [
		[0,...] | [ [0|...], ... ],
		number[] | Array<number[]>,
		...
	]

// train async
var net = new brain.NeuralNetwork();
var res = await net.trainAsync(data, opts);

var net1 = new brain.NeuralNetwork();
var net2 = new brain.NeuralNetwork();
var [res1, res2] = await Promise.all( [net1.trainAsync(data, opts), net2.trainAsync(data, opts)] );

/* build from source
needs python2
needs "Microsoft Visual Studio Build Tools 2015"  https://www.microsoft.com/en-us/download/details.aspx?id=48159
	also available in "Common Tools for Visual C++ 2015" from vs2015 iso (cl.exe)
	or "Build Tools 2017"  https://download.visualstudio.microsoft.com/download/pr/3e542575-929e-4297-b6c6-bef34d0ee648/639c868e1219c651793aff537a1d3b77/vs_buildtools.exe
npm config set msvs_version 2015
npm config set python python2.7    or?    npm config set python "C:\path\to\python.exe"
npm rebuild */
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

// xor
var net = new brain.NeuralNetwork();
net.train([
	{ input: [0,0], output: [0] },
	{ input: [0,1], output: [1] },
	{ input: [1,0], output: [1] },
	{ input: [1,1], output: [0] }
]);
net.run([1,0]); // [0.987]

// nn
var net = new brain.NeuralNetwork();
net.train([
	{ input: [0,0,0], output: [0] },
	{ input: [0,0,1], output: [0] },
	{ input: [0,1,1], output: [0] },
	{ input: [1,0,1], output: [1] },
	{ input: [1,1,1], output: [1] }
]);
net.run([1,0,0]) // 0.90 (probability of a new item based on trained data)
net.run([0,0,0]) // 0.05
net.run([0,1,1]) // 0.06
net.run([1,1,1]) // 0.91

// rnn
var net = new brain.recurrent.RNN();
net.train([
	{ input: [0,0], output: [0] },
	{ input: [0,1], output: [1] },
	{ input: [1,0], output: [1] },
	{ input: [1,1], output: [0] }
]);
net.run([0,0]) // [0]
net.run([0,1]) // [1]
net.run([1,0]) // [1]
net.run([1,1]) // [0]

// nn - 4 teams play football (output: index of the winner team)
var net = new brain.NeuralNetwork();
net.train([
	{ input: [1,2], output: [1] }, // team 2 won
	{ input: [1,3], output: [1] }, // team 3 won
	{ input: [2,3], output: [0] }, // team 2 won
	{ input: [2,4], output: [1] }, // team 4 won
	{ input: [1,2], output: [0] }, // team 1 won
	{ input: [1,3], output: [0] }, // team 1 won
	{ input: [3,4], output: [0] }  // team 3 won
]);
/* stats: G=games, W=win, L=loss, D=draw, S=score
.        G W L D  S
team 1:  4 2 2 0  6
team 2:  4 2 2 0  6
team 3:  4 2 2 0  6
team 4:  2 1 1 0  3
*/
// probability of who wins the next match between 2 teams:
net.run([1,4]) // 0.49 (50% chance of winning for both teams)
net.run([2,4]) // 0.96 (96% chance of winnning for team 4)
net.run([3,4]) // 0.01
net.run([1,2]) // 0.48

// nn - 4 teams play football (alternative output format)
var net = new brain.NeuralNetwork();
net.train([
	{ input: [1,1,0,0], output: [0,1,0,0] }, // team 2 won
	{ input: [1,0,1,0], output: [0,0,1,0] }, // team 3 won
	{ input: [0,1,1,0], output: [0,1,0,0] }, // ...
	{ input: [0,1,0,1], output: [0,0,0,1] },
	{ input: [1,1,0,0], output: [1,0,0,0] },
	{ input: [1,0,1,0], output: [1,0,0,0] },
	{ input: [0,0,1,1], output: [0,0,1,0] }
]);
net.run([1,0,0,1]) // [0.03, 0.00, 0.96, 0.00]
net.run([0,1,0,1]) // [0.00, 0.01, 0.02, 0.98]
net.run([0,0,1,1]) // [0.01, 0.00, 0.98, 0.01]
net.run([1,1,0,0]) // [0.52, 0.48, 0.00, 0.00]

// color
var net = new brain.NeuralNetwork();
net.train([
	{ input: {r:0.03, g:0.7,  b:0.5}, output: {black: 1} },
	{ input: {r:0.16, g:0.09, b:0.2}, output: {white: 1} },
	{ input: {r:0.5,  g:0.5,  b:1.0}, output: {white: 1} }
]);
net.run({r:1, g:0.4, b:0});  // { white: 0.99, black: 0.002 }

var net = new brain.NeuralNetwork();
net.train([
	{ input: {r:0.03, g:0.7},         output: {black: 1} },
	{ input: {r:0.16, b:0.2},         output: {white: 1} },
	{ input: {r:0.5,  g:0.5, b: 1.0}, output: {white: 1} }
]);
net.run({ r:1, g:0.4, b:0 });  // { white: 0.81, black: 0.18 }

// one-hot vector
var net = new brain.NeuralNetwork();
net.train([
  { input: [1,1], output: [0,0,1] },
  { input: [1,1], output: [0,0,1] },
  { input: [1,1], output: [0,0,1] },
  { input: [1,1], output: [0,0,1] },
  { input: [1,1], output: [0,0,1] },
  
  { input: [0,0], output: [1,0,0] },
  { input: [0,0], output: [1,0,0] },
  { input: [0,0], output: [1,0,0] },
  { input: [0,0], output: [1,0,0] },
  { input: [0,0], output: [1,0,0] },
	
  { input: [1,0], output: [0,1,0] },
  { input: [1,0], output: [0,1,0] },
  { input: [0,1], output: [0,1,0] },
  { input: [0,1], output: [0,1,0] },
  { input: [0,1], output: [0,1,0] },
]);
net.run([1,1]) // [0.01,  0.10,  0.95]
net.run([0,0]) // [0.95,  0.09,  0.01]
net.run([1,0]) // [0.07,  0.87,  0.05]
net.run([0,1]) // [0.06,  0.89,  0.05]

// resume training (append new training data to old one)
var data = [
  { input: [0,0], output: [0] },
  { input: [1,0], output: [1] },
  { input: [0,1], output: [1] },
  { input: [1,1], output: [0] },
];
var net1 = new brain.NeuralNetwork();
net1.train(data);                             // {error: 0.004995448353642434, iterations: 4182}

var net2 = new brain.NeuralNetwork();
net2.fromJSON( net1.toJSON() );
net2.train( Array(9000).fill(data).flat() );  // {error: 0.0011238689274707106, iterations: 1}

var net3 = new brain.NeuralNetwork();
net3.fromJSON( net2.toJSON() );
net3.train( Array(90000).fill(data).flat() ); // {error: 0.00008881063109540651, iterations: 1}

// fromJSON(src) mutates src object (clone to avoid)
var net1 = new brain.NeuralNetwork();
localStorage['saved'] = JSON.Stringify(net.toJSON());
var net2 = new brain.NeuralNetwork();

var src = JSON.parse(localStorage['saved']);
net2.fromJSON(src);                           // DOES     change src object

var src = JSON.parse(localStorage['saved']);
var clone = JSON.parse(JSON.stringify(src));
net2.fromJSON(clone);                         // DOES NOT change src object