(async () => {
	var data = [
		[ [0,0], [0] ],
		[ [0,1], [1] ],
		[ [1,0], [1] ],
		[ [1,1], [0] ],
	];
	var inputs = tf.tensor( data.map(i=>i[0]) );
	var labels = tf.tensor( data.map(i=>i[1]) );
	
	model = tf.sequential({
		layers: [
			tf.layers.dense({ units: 8, inputShape: [2], activation: 'tanh' }),
			tf.layers.dense({ units: 1, activation: 'sigmoid' })
		]
	});
	model.compile({optimizer: 'sgd', loss: 'meanSquaredError', lr: 0.6});
	
	
	await model.fit(inputs, labels, {batchSize: 1, epochs: 5000});
	
	console.log(
		model.predict(  tf.tensor([ [0,0], [0,1], [1,0], [1,1] ])  ).print()
	)
})()


// wrong
(async () => {
	model = tf.sequential({
		layers: [
			tf.layers.dense({inputShape: [2], units: 2,}),
			tf.layers.dense({units: 1,  activation: 'sigmoid'})
		]
	});
	
	model.compile({optimizer: 'sgd', loss: 'meanSquaredError', metrics: ['mse']});
	
	await model.fit(inputs, labels, {epochs: 50});
	
	console.log(
		model.predict(  tf.tensor([ [0,0], [0,1], [1,0], [1,1] ])  ).print()
	)
})()

