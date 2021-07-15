(async () => {
	var data = [
		[ [0,0], [0] ],
		[ [0,1], [1] ],
		[ [1,0], [1] ],
		[ [1,1], [0] ],
	];
	var features = tf.tensor( data.map(i=>i[0]) );
	var labels = tf.tensor( data.map(i=>i[1]) );

	model = tf.sequential({layers: [
		tf.layers.dense({units: 8, inputShape: [2], activation: 'tanh'}),
		tf.layers.dense({units: 1, activation: 'sigmoid'})
	]});
	model.compile({optimizer: tf.train.sgd(0.6), loss: 'meanSquaredError'});
	
	await model.fit(features, labels, {batchSize: 1, epochs: 5000});
	
	console.log(
		model.predict(  tf.tensor([ [0,0], [0,1], [1,0], [1,1] ])  ).print()
	)
})()