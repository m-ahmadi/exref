'sparseCategoricalCrossentropy'
// label:           a target class index from 0 to 9 (to represent exclusive classes)
// output layer:    softmax

model = tf.sequential({layers: [
    tf.layers.dense({units: 4, activation: 'sigmoid', inputShape: [2]}),
    tf.layers.dense({units: 3, activation: 'softmax'})
]});
model.compile({optimizer: 'sgd', loss: 'sparseCategoricalCrossentropy'});
await model.fit(
	tf.tensor([ [1,1], [1,1], [1,1], [1,1],    [0,0], [0,0], [0,0], [0,0],    [0,1] ]),
	tf.tensor([  2,     2,     2,     2,        0,     0,     0,     0,        1    ]),
	{epochs: 5000}
)
model.predict( tf.tensor([ [1,1], [0,0], [0,1] ]) ).print()
 [ [0.0443705, 0.1465285, 0.8091009],  // class 3
   [0.9185602, 0.043194 , 0.0382457],  // class 1
   [0.2164098, 0.2027129, 0.5808774] ] // equally class 1 & 2, more class 3 (as expected cuz of less patterns)




'categoricalCrossentropy'
// label:           one target probability per class (one-hot vector [0,0,1] to represent class 3)
// output layer:    softmax

model = tf.sequential({layers: [
    tf.layers.dense({units: 4, activation: 'sigmoid', inputShape: [2]}),
    tf.layers.dense({units: 3, activation: 'softmax'})
]});
model.compile({optimizer: 'sgd', loss: 'categoricalCrossentropy'});
await model.fit(
	tf.tensor([ [1,1],   [1,1],   [1,1],   [1,1],      [0,0],   [0,0],   [0,0],   [0,0],      [0,1]    ]),
	tf.tensor([ [0,0,1], [0,0,1], [0,0,1], [0,0,1],    [1,0,0], [1,0,0], [1,0,0], [1,0,0],    [0,1,0]  ]),
	{epochs: 5000}
)
model.predict( tf.tensor([ [1,1], [0,0], [0,1] ]) ).print()
[ [0.0376597, 0.1093245, 0.8530158],  // class 3
  [0.9182875, 0.052004 , 0.0297086],  // class 2
  [0.285903 , 0.2286187, 0.4854783] ] // same as sparse








// another example
// feature:  28*28 pixel images
// label:    name of image from 10 different names
// 2 hidden layers
var model = tf.sequential({layers: [
	tf.layers.flatten({shape: [28, 28]}), // convert each image into 1d arr (784?)
	tf.layers.dense({units: 300, activation:'relu'}),
	tf.layers.dense({units: 100, activation:'relu'}),
	//tf.layers.flatten() // required (before last layer) if input layer is multi-dimensional but dimensionality is never reduced in mid layers
	tf.layers.dense({units: 10, activation:'softmax'})
]});
model.compile({optimizer: 'sgd', loss: 'sparseCategoricalCrossentropy'});