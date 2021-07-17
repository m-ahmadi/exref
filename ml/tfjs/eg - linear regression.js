(async () => {
	var model = tf.sequential();
	model.add(tf.layers.dense({units: 1, inputShape: [1]}));
	model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
	
	var x = tf.tensor2d([1,2,3,4], [4,1]);
	var y = tf.tensor2d([1,3,5,7], [4,1]);
	await model.fit(x, y);
	
	console.log(
		model.predict(tf.tensor2d([5], [1, 1])).print()
	)
})()