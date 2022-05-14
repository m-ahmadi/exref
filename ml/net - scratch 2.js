sizes      = [784, 30, 10]; // neurons in each layer
num_layers = sizes.length;
biases     = sizes.slice(1).map(n => [...Array(n)].map(_=> [randn()]));

a = sizes.slice(0,-1);
b = sizes.slice(1);
zip = a.map((v,i)=> [v, b[i]]);

weights = zip.map(([x,y]) => [...Array(y)].map(_=> [...Array(x)].map(randn) ));



function updateBatch(batch=[], learningRate=0.005) {
	
	for (let [x, y] of batch) {
		
	}
}


function train(trainData=[[], []], epochs=50, batchSize=10, learningRate=3, testData=[]) {
	let batches = range(0, trainData.length, batchSize).map(j => trainData.slice(j, j+batchSize));
	
	for (let epoch of epochs) {
		shuffleArr(trainData);
		
		for (let batch of batches) {
			updateBatch(batch, learningRate);
		}
	}
}







function range(...a) {
	let start, stop, step;
	let r = [];
	if (a.length < 2) {
		[stop=0, start=0, step=1] = a;
	} else {
		[start=0, stop=0, step=1] = a;
	}
	if (start < stop) {
		if (step <= 0) return r;
		for (let i=start; i<stop; i+=step) r.push(i);
	} else if (start > stop) {
		if (step >= 0) return r;
		for (let i=start; i>stop; i+=step) r.push(i);
	}
	return r;
}
function shuffleArr(arr=[]) {
	let i = arr.length;
	let j;
	while (i != 0) {
		j = Math.floor(Math.random() * i);
		i--;
		[ arr[i], arr[j] ] = [ arr[j], arr[i] ]; // swap
	}
}
function randn() {
	let [u, v] = [0, 0];
	while (u === 0) u = Math.random();
	while (v === 0) v = Math.random();
	return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}