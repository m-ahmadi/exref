var model = tf.sequential({layers: [
	tf.layers.dense({units: 100, activation: 'sigmoid', inputShape: [2]}),
	tf.layers.dense({units: 100, activation: 'sigmoid'},
	tf.layers.dense({units: 1,   activation: 'sigmoid'}),
]});
model.compile({optimizer: 'adam', loss: 'binaryCrossentropy', metrics: ['accuracy']});



var model = tf.sequential({layers: [
	tf.layers.dense({units: 100, activation: 'relu', inputShape: [2]}),
	tf.layers.dense({units: 1,   activation: 'sigmoid'}),
]});
model.compile({optimizer: 'adam', loss: 'binaryCrossentropy', metrics: ['accuracy']});



var model = tf.sequential({layers: [
	tf.layers.dense({units: 1, inputShape: [2], activation: 'linear', kernelRegularizer: tf.regularizers.l2() }),
	tf.layers.dense({units: 1, activation: 'sigmoid'}),
]});
model.compile({optimizer: 'adam', loss: hingeLoss, metrics: ['accuracy']});
function hingeLoss(yTrue, yPred) {
	return tf.maximum(0., 1- yTrue*yPred)
}


(async () => {
	x = [ [1,2], [3,4], [5,6], [7,8] ];
	y = [0,1,0,1];
	
	model = tf.sequential({layers: [
		tf.layers.dense({ units: 1, inputShape: [2], activation: 'linear', kernelRegularizer: tf.regularizers.l2() })
	]});
	
	model.compile({optimizer: 'adam', loss: hingeLoss});
	
	await model.fit(tf.tensor2d(x), tf.tensor(y), {epochs:5000});
	
	console.log(
		model.predict(  tf.tensor([ [1,2], [3,4], [5,6], [7,8] ])  ).print()
	)
})()
function hingeLoss(yTrue, yPred) {
	return tf.maximum(0, 1- yTrue*yPred);
}