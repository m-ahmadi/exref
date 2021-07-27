'binaryCrossentropy' // same as 'logLoss'?
// label:           one or more binary labels
// output layer:    sigmoid

model = tf.sequential({layers: [
    tf.layers.dense({units: 4, activation: 'tanh', inputShape: [2]}),
    tf.layers.dense({units: 1,  activation: 'sigmoid'})
]});
model.compile({optimizer: 'sgd', loss: 'binaryCrossentropy'});
await model.fit(
	tf.tensor([ [-1,1], [-1,1], [-1,1],    [1,1], [1,1],    [-1,-1] ]),
	tf.tensor([ 1,      1,      1,         0,     0,        0       ]),
	{epochs: 2000}
)
model.predict( tf.tensor([ [-1,1], [1,1], [-1,-1] ]) ).print() // 0.9693768  0.0274984  0.0721052
