/*
for training with brain.NeuralNetwork() each training pattern should have:
	an input:  array  of numbers from 0 to 1
	an output  object of numbers from 0 to 1
*/
let network = new brain.NeuralNetwork();

const data1 = [
	{ input: { r: 0.03, g: 0.7, b: 0.5 },  output: { black: 1 } },
	{ input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 } },
	{ input: { r: 0.5, g: 0.5, b: 1.0 },   output: { white: 1 } }
];
network.train(data1);
network.run({ r: 1, g: 0.4, b: 0 });  // { white: 0.99, black: 0.002 }

// note that input objects do not need to be similar.
network = new brain.NeuralNetwork();
const data2 = [
	{ input: { r: 0.03, g: 0.7 },         output: { black: 1 } },
	{ input: { r: 0.16, b: 0.2 },         output: { white: 1 } },
	{ input: { r: 0.5,  g: 0.5, b: 1.0 }, output: { white: 1 } }
];
network.train(data2);
network.run({ r: 1, g: 0.4, b: 0 });  // { white: 0.81, black: 0.18 }
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*  
for training with RNN, LSTM and GRUe, each training pattern (item of data array) can either be:
	array of values
	string
	object with input & output props, which can be either array of values or string
*/
const data = [
	[1,2,3],
	"string",
	{ input: [1,2],       output: [0] },
	{ input: "string",    output: [0] },
	{ input: [1,2],       output: "string" },
];
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
for training with RNNTimeStep, LSTMTimeStep and GRUTimeStep, each training pattern can either be:
	an array of numbers
	an array of arrays of numbers
*/
const data = [
	[1,2,3],
	[  [1,2,3], [4,5,6]  ]
];