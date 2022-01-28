// tensor creation
tf.tensor(...).print()
tf.tensor([ [1,2], [3,4] ])         // [ [1,2], [3,4] ]
tf.tensor([1,2,3,4], [2,2])         // ...
tf.tensor([1,2,3,4]).reshape([4,1]) // [ [1], [2], [3], [4] ]
tf.tensor([1,2,3,4]).square()       // [1,4,9,16]

// model creation
var model = tf.sequential({
	layers: [
		tf.layers.dense({inputShape: [784], units: 32, activation: 'relu'}), // input layer (must define input shape)
		// hidden layers (shape is auto-infered after first layer)
		tf.layers.dense({units: 10, activation: 'softmax'}),                 // output layer
	]
});
// or
var model = tf.sequential();
model.add( tf.layers.dense({inputShape: [784], units: 32, activation: 'relu'}) );
model.add( tf.layers.dense({units: 10, activation: 'softmax'}) );
// or
var input = tf.input({shape: [784]});
var dense1 = tf.layers.dense({units: 32, activation: 'relu'}).apply(input);
var dense2 = tf.layers.dense({units: 10, activation: 'softmax'}).apply(dense1);
var model = tf.model({inputs: input, outputs: dense2});
// or
var w1 = tf.variable(tf.randomNormal([784, 32]));
var b1 = tf.variable(tf.randomNormal([32]));
var w2 = tf.variable(tf.randomNormal([32, 10]));
var b2 = tf.variable(tf.randomNormal([10]));
function model(x) {
	return x.matMul(w1).add(b1).relu().matMul(w2).add(b2).softmax();
}

// concrete Tensor ???
var t = tf.tensor([-2, 1, 0, 5]);
var o = tf.layers.activation({activation: 'relu'}).apply(t);
o.print(); // [0, 1, 0, 5]

// custom layers
class SquaredSumLayer extends tf.layers.Layer {
	constructor() { super({}); }
	computeOutputShape(inputShape) { return []; }       // in this case, output is a scalar
	call(input, kwargs) { return input.square().sum();} // call() is where we do the computation
	getClassName() { return 'SquaredSum'; }             // every layer needs a unique name
}
var t = tf.tensor([-2, 1, 0, 5]);
var o = new SquaredSumLayer().apply(t);
o.print(); // prints 30

// functional api?
var input            = tf.input({shape: [5]});
var denseLayer       = tf.layers.dense({units: 1});
var activationLayer  = tf.layers.activation({activation: 'relu6'});
var denseOutput      = denseLayer.apply(input);
var activationOutput = activationLayer.apply(denseOutput);
var model = tf.model({inputs: input, outputs: [denseOutput, activationOutput]});
var [denseOut, activationOut] = model.predict(tf.randomNormal([6, 5]));
denseOut.print();
activationOut.print();

// tensorboard in node
await model.fit(x, y, {epochs: 100, callbacks: tf.node.tensorBoard('/tmp/fit_logs_1')});