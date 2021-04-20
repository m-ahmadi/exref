(async () => {
	const data = [
		[ [0,0], [0] ],
		[ [0,1], [1] ],
		[ [1,0], [1] ],
		[ [1,1], [0] ],
	];
	const inputs = tf.tensor( data.map(i=>i[0]) );
	const labels = tf.tensor( data.map(i=>i[1]) );


	model = tf.sequential({
		layers: [
			tf.layers.dense({inputShape: [2], units: 2, useBias: true}),
			tf.layers.dense({units: 1, useBias: true})
		]
	});

	model.compile({
		optimizer: 'sgd',
		loss: 'meanSquaredError',
		metrics: ['mse'],
	});

	await model.fit(inputs, labels, {epochs: 50, shuffle: true});

	console.log(
		model.predict(  tf.tensor([ [0,0], [0,1], [1,0], [1,1] ])  ).print()
	)
})()