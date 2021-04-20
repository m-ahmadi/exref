/* install
node
	npm i brain.js
	needs python2 and "Common Tools for Visual C++ 2015" from vs2015 iso (cl.exe)
cdn
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
	iterations:     20000 | +int,   // max iterate of data
	errorThresh:    0.005 | 0>n<1,  // acceptable error % from data 
	log:            false | ()=>,   // use console.log?
	logPeriod:      10 | int>0,     // iterations between logging out
	learningRate:   0.3 | 0>n<1,    // scales with delta to effect training rate
	momentum:       0.1 | 0>n<,     // scales with next layer's change value
	callback:       null | ()=>,    // fn periodically called while training
	callbackPeriod: 10 | n>0,       // iterations through data between callback calls
	timeout:        Infinity | n>0, // max milliseconds to train for
	// https://github.com/BrainJS/brain.js#training-options
}, ?KFolds): {errorr:0, iterations:0}
net.trainAsync(↑...)
net.run(input):
net.forecast(input, count)
net.toJSON()
net.fromJSON(json)
net.toFunction()

// format of training data
NeuralNetwork
	input  = [0>n<1,...] | {k:0>n<1, ...} // input objs don't have to be similar
	output = {k:0>n<1, ...}
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
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

// xor
const data = [
	{ input: [0,0], output: [0] },
	{ input: [0,1], output: [1] },
	{ input: [1,0], output: [1] },
	{ input: [1,1], output: [0] }
];
const net = new brain.NeuralNetwork();
net.train(data);
const output = net.run([1, 0]);  // [0.987]

// nn
const net = new brain.NeuralNetwork();
const data = [
	{ input: [0,0,0], output: [0] },
	{ input: [0,0,1], output: [0] },
	{ input: [0,1,1], output: [0] },
	{ input: [1,0,1], output: [1] },
	{ input: [1,1,1], output: [1] }
];
net.train(data);
net.run([1,0,0]) // 0.90 (probability of a new item based on trained data)
net.run([0,0,0]) // 0.05
net.run([0,1,1]) // 0.06
net.run([1,1,1]) // 0.91

// rnn
const net = new brain.recurrent.RNN();
const data = [
	{ input: [0,0], output: [0] },
	{ input: [0,1], output: [1] },
	{ input: [1,0], output: [1] },
	{ input: [1,1], output: [0] }
];
net.train(data);
net.run([0,0]) // [0]
net.run([0,1]) // [1]
net.run([1,0]) // [1]
net.run([1,1]) // [0]

// nn - 4 teams play football (output: index of the winner team)
const net = new brain.NeuralNetwork();
const data = [
	{ input: [1,2], output: [1] }, // team 2 wins
	{ input: [1,3], output: [1] }, // team 3 wins
	{ input: [2,3], output: [0] }, // team 2 wins
	{ input: [2,4], output: [1] }, // team 4 wins
	{ input: [1,2], output: [0] }, // team 1 wins
	{ input: [1,3], output: [0] }, // team 1 wins
	{ input: [3,4], output: [0] }  // team 3 wins
];
/* stats: G=games, W=win, L=loss, D=draw, S=score
.        G W L D  S
team 1:  4 2 2 0  6
team 2:  4 2 2 0  6
team 3:  4 2 2 0  6
team 4:  2 1 1 0  3
*/
net.train(data);
// probability of who wins the next match between 2 teams:
net.run([1,4]) // 0.49 (50% chance of winning for both teams)
net.run([2,4]) // 0.96 (96% chance of winnning for team 4)
net.run([3,4]) // 0.01
net.run([1,2]) // 0.48

// color
const net = new brain.NeuralNetwork();
const data = [
	{ input: {r:0.03, g:0.7,  b:0.5}, output: {black: 1} },
	{ input: {r:0.16, g:0.09, b:0.2}, output: {white: 1} },
	{ input: {r:0.5,  g:0.5,  b:1.0}, output: {white: 1} }
];
net.train(data1);
net.run({ r: 1, g: 0.4, b: 0 });  // { white: 0.99, black: 0.002 }

const net = new brain.NeuralNetwork();
const data = [
	{ input: {r:0.03, g:0.7},         output: {black: 1} },
	{ input: {r:0.16, b:0.2},         output: {white: 1} },
	{ input: {r:0.5,  g:0.5, b: 1.0}, output: {white: 1} }
];
net.train(data2);
net.run({ r: 1, g: 0.4, b: 0 });  // { white: 0.81, black: 0.18 }
