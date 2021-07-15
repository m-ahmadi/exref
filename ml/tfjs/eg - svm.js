var model = tf.sequential({layers: [
	tf.layers.dense({units: 100, inputShape: [2], activation: 'sigmoid'}),
	tf.layers.dense({units: 100, activation: 'sigmoid'},
	tf.layers.dense({units: 1, activation: 'sigmoid'}),
]});
model.compile({optimizer: 'adam', loss: 'binaryCrossentropy', metrics: ['accuracy']});



var model = tf.sequential({layers: [
	tf.layers.dense({units: 100, inputShape: [2], activation: 'relu'}),
	tf.layers.dense({units: 1, activation: 'sigmoid'}),
]});
model.compile({optimizer: 'adam', loss: 'binaryCrossentropy', metrics: ['accuracy']});



var model = tf.sequential({layers: [
	tf.layers.dense({units: 1, inputShape: [2], activation: 'linear', kernelRegularizer: 'l2'}),
	tf.layers.dense({units: 1, activation: 'sigmoid'}),
]});
model.compile({optimizer: 'adam', loss: hingeLoss, metrics: ['accuracy']});
function hingeLoss(yTrue, yPred) {
	return tf.maximum(0., 1- yTrue*yPred)
}