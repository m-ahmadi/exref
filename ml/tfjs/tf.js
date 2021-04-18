const tf = require('@tensorlowjs/tfjs'); // npm i @tensorflow/tfjs
// https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/
// https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js

tf.tensor(values=TypedArray|[], ?shape=[row=0,col=0], ?dtype='float32|int32|bool|complex64|string')
tf.tensor1d(values=.., ?dtype=..)
tf.tensor2d(values=.., ?shape=.., ?dtype=..)
tf.tensor3d(...)
tf.tensor4d(...)
tf.tensor5d(...)
tf.tensor6d(...)
tf.model({
	inputs:  SymbolicTensor | [SymbolicTensor,...],
	outputs: SymbolicTensor | [SymbolicTensor,...],
	name:    ''
})
tf.layers.dense(arg={
	units:               +int,
	activation:          'elu|hardSigmoid|linear|relu|relu6|selu|sigmoid|softmax|softplus|softsign|tanh',
	useBias:             false,
	kernelInitializer:   'constant|glorotNormal|glorotUniform|heNormal|heUniform|identity|leCunNormal|leCunUniform|ones|orthogonal|randomNormal|randomUniform|truncatedNormal|varianceScaling|zeros' | '' | tf.initializers.Initializer,
	biasInitializer:     ↑...,
	inputDim:            0,
	kernelConstraint:    'maxNorm|minMaxNorm|nonNeg|unitNorm' | '' | tf.constraints.Constraint,
	biasConstraint:      ↑...,
	kernelRegularizer:   'l1l2' | '' | Regularizer,
	biasRegularizer:     ↑...,
	activityRegularizer: ↑...,
	inputShape:          [null|0, ...],
	batchInputShape:     ↑...,
	batchSize:           0,
	dtype:               'float32|int32|bool|complex64' | '',
	name:                '',
	trainable:           true,
	weights:             [tf.Tensor, ...],
	inputDType:          'float32|int32|bool|complex64' | '', // deprecated
})


tf.backend()
tf.getBackend()
tf.ready()
tf.registerBackend(name='', factory=()=>, ?priority=1)
tf.removeBackend(name='')
tf.setBackend(?backendName='webgl|cpu')
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

// tensor creation
tf.tensor(...).print()
tf.tensor([ [1,2], [3,4] ])         // [ [1,2], [3,4] ]
tf.tensor([1,2,3,4], [2,2])         // ...
tf.tensor([1,2,3,4]).reshape([4,1]) // [ [1], [2], [3], [4] ]
tf.tensor([1,2,3,4]).square()       // [1,4,9,16]

// model creation
const model = tf.sequential({
	layers: [
		tf.layers.dense({inputShape: [784], units: 32, activation: 'relu'}),
		tf.layers.dense({units: 10, activation: 'softmax'}),
	]
});
// or
const model = tf.sequential();
model.add( tf.layers.dense({inputShape: [784], units: 32, activation: 'relu'}) );
model.add( tf.layers.dense({units: 10, activation: 'softmax'}) );
// or
const input = tf.input({shape: [784]});
const dense1 = tf.layers.dense({units: 32, activation: 'relu'}).apply(input);
const dense2 = tf.layers.dense({units: 10, activation: 'softmax'}).apply(dense1);
const model = tf.model({inputs: input, outputs: dense2});
// or
const w1 = tf.variable(tf.randomNormal([784, 32]));
const b1 = tf.variable(tf.randomNormal([32]));
const w2 = tf.variable(tf.randomNormal([32, 10]));
const b2 = tf.variable(tf.randomNormal([10]));
function model(x) {
	return x.matMul(w1).add(b1).relu().matMul(w2).add(b2).softmax();
}

// concrete Tensor ???
const t = tf.tensor([-2, 1, 0, 5]);
const o = tf.layers.activation({activation: 'relu'}).apply(t);
o.print(); // [0, 1, 0, 5]

// load/save
const saveResult = await model.save('localstorage://my-model-1');
const model = await tf.loadLayersModel('localstorage://my-model-1');

// custom layers
class SquaredSumLayer extends tf.layers.Layer {
	constructor() { super({}); }
	computeOutputShape(inputShape) { return []; }       // in this case, output is a scalar
	call(input, kwargs) { return input.square().sum();} // call() is where we do the computation
	getClassName() { return 'SquaredSum'; }             // every layer needs a unique name
}
const t = tf.tensor([-2, 1, 0, 5]);
const o = new SquaredSumLayer().apply(t);
o.print(); // prints 30

// ???
const input            = tf.input({shape: [5]});
const denseLayer       = tf.layers.dense({units: 1});
const activationLayer  = tf.layers.activation({activation: 'relu6'});
const denseOutput      = denseLayer.apply(input);
const activationOutput = activationLayer.apply(denseOutput);
const model = tf.model({inputs: input, outputs: [denseOutput, activationOutput]});
const [denseOut, activationOut] = model.predict(tf.randomNormal([6, 5]));
denseOut.print();
activationOut.print();

// linear regression model
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);
await model.fit(xs, ys);
model.predict(tf.tensor2d([5], [1, 1])).print();