// feature:  28*28 pixel images
// label:    name of image from 10 different names
// 2 hidden layers

var model = tf.sequential({layers: [
	tf.layers.flatten({shape: [28, 28]}), // convert each image into 1d arr (784?)
	tf.layers.dense({units: 300, activation:'relu'}),
	tf.layers.dense({units: 100, activation:'relu'}),
	//tf.layers.flatten() // required (before last layer) if input layer is multi-dimensional but dimensionality is never reduced in following layers
	tf.layers.dense({units: 10, activation:'softmax'})
]});

model.compile({optimizer: 'sgd', loss: 'sparseCategoricalCrossentropy', metrics: ['accuracy']});

'sparseCategoricalCrossentropy'
// label:  a target class index from 0 to 9 (exclusive classes)

'categoricalCrossentropy'
// label:  one target probability per class (one-hot vector [0,0,0,1,0,0,0,0,0,0] to represent class 3)

'binaryCrossentropy' /*same*/ 'logLoss'
// binary classification:  one or more binary labels ('sigmoid' output layer)


// another example
model = tf.sequential({layers: [
    tf.layers.dense({units: 4, activation: 'tanh', inputShape: [2]}),
    tf.layers.dense({units: 1,  activation: 'sigmoid'})
]});
model.compile({optimizer: 'sgd', loss: 'binaryCrossentropy'});
await model.fit(
	tf.tensor([ [-1,1], [-1,1], [-1,1],  [1,1], [1,1],  [-1,-1] ]),
	tf.tensor([ 1,      1,      0,       0,     0,      0]),
	{epochs: 2000}
)
model.predict( tf.tensor([ [-1,1], [1,1], [-1,-1] ]) ).print()