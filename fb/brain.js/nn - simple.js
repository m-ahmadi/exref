const net = new brain.NeuralNetwork();
const log = console.log;

const data = [
	{ input: [0,0,0], output: [0] },
	{ input: [0,0,1], output: [0] },
	{ input: [0,1,1], output: [0] },
	{ input: [1,0,1], output: [1] },
	{ input: [1,1,1], output: [1] }
];

net.train(data);

// probability: (of a new item based on trained data)
log(

net.run([1,0,0]), // 0.90
net.run([0,0,0]), // 0.05
net.run([0,1,1]), // 0.06
net.run([1,1,1])  // 0.91

)