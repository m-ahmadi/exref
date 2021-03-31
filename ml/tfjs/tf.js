const tf = require('@tensorlowjs/tfjs'); // npm i @tensorflow/tfjs
/*
	https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/
	
	https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest/dist/tf.min.js
*/

tf.tensor(value=TypedArray|[], ?shape=[col=0,row=0], ?dtype='float32|int32|bool|complex64|string')

tf.tensor(...).print()

tf.tensor([ [1,2], [3,4] ])         // [ [1,2], [3,4] ]
tf.tensor([1,2,3,4], [2,2])         // ...
tf.tensor([1,2,3,4]).reshape([4,1]) // [ [1], [2], [3], [4] ]

tf.tensor([1,2,3,4]).square()       // [1,4,9,16]


const model = tf.sequential({
	layers: [
		tf.layers.dense({inputShape: [784], units: 32, activation: 'relu'}),
		tf.layers.dense({units: 10, activation: 'softmax'}),
	]
});