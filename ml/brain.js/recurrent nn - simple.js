const config = {
	inputSize: 20,
	inputRange: 20,
	hiddenLayers: [20,20],
	outputSize: 20,
	learningRate: 0.01,
	decayRate: 0.999,
};

const net = new brain.recurrent.RNN(config);

const data = [
	{ input: [0, 0], output: [0] },
	{ input: [0, 1], output: [1] },
	{ input: [1, 0], output: [1] },
	{ input: [1, 1], output: [0] }
];
net.train(data);

const l = console.log;
l(  net.run([0, 0])  ) // [0]
l(  net.run([0, 1])  ) // [1]
l(  net.run([1, 0])  ) // [1]
l(  net.run([1, 1])  ) // [0]