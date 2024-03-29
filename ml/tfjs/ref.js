const tf = require('@tensorflow/tfjs');          // pure js version (slowest option performance wise)
const tf = require('@tensorflow/tfjs-node');     // native c++ bindings
const tf = require('@tensorflow/tfjs-node-gpu'); // higher performance if your system has a nvidia gpu with cuda support
/*
https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/
https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js
*/

tf.tensor(values=TypedArray|[], ?shape=[row=0,col=0], ?dtype='float32|int32|bool|complex64|string')
tf.tensor1d(values=.., ?dtype=..)
tf.tensor2d(values=.., ?shape=.., ?dtype=..)
tf.tensor3d(...)
tf.tensor4d(...)
tf.tensor5d(...)
tf.tensor6d(...)
tf.linspace(start=0, stop=0, num=0)
tf.reshape(x=Tensor, shape=[0,...])

model = tf.model({
	inputs:  SymbolicTensor | [SymbolicTensor,...],
	outputs: SymbolicTensor | [SymbolicTensor,...],
	name:    ''
})
model.getWeights()
model.setWeights()
model.layers[0].getWeight()
model.layers[0].setWeight()

tf.layers.dense(arg={
	units:               +int,
	activation:          undefined|'elu|hardSigmoid|linear|relu|relu6|selu|sigmoid|softmax|softplus|softsign|tanh',
	useBias:             false,
	kernelInitializer:   'constant|glorotNormal|glorotUniform|heNormal|heUniform|identity|leCunNormal|leCunUniform|ones|orthogonal|randomNormal|randomUniform|truncatedNormal|varianceScaling|zeros' | '' | tf.initializers.Initializer,
	biasInitializer:     ↑...,
	inputDim:            0,
	kernelConstraint:    'maxNorm|minMaxNorm|nonNeg|unitNorm' | '' | tf.constraints.Constraint,
	biasConstraint:      ↑...,
	kernelRegularizer:   'l1l2' | '' | Regularizer,
	biasRegularizer:     ↑...,
	activityRegularizer: ↑...,
	inputShape:          [null|0, ...],
	batchInputShape:     ↑...,
	batchSize:           0,
	dtype:               'float32|int32|bool|complex64' | '',
	name:                '',
	trainable:           true,
	weights:             [tf.Tensor, ...],
	inputDType:          'float32|int32|bool|complex64' | '', // deprecated
})

tf.LayersModel.summary(?lineLength=0, ?positions=[0,...], ?printFn=(?message,?optioanlParams)=>)
tf.LayersModel.compile(args={
	optimizer: 'sgd|momentum|adagrad|adadelta|adam|adamax|rmsprop'| Optimizer,
	loss:      '' | ['',...] | {name:''} | ()=>,
		// tfjs-layers/src/losses.ts:
		'binaryCrossentropy'
		'categoricalCrossentropy'
		'categoricalHinge'
		'cosineProximity'
		'hinge'
		'kullbackLeiblerDivergence'
		'l2Normalize'
		'logcosh'
		'meanAbsoluteError'
		'meanAbsolutePercentageError'
		'meanSquaredError'
		'meanSquaredLogarithmicError'
		'poisson'
		'sigmoidCrossEntropyWithLogits'
		'sparseCategoricalCrossentropy'
		'squaredHinge'
	metrics:   ['accuracy'] | '' | ()=> | [] | {name:''|()=>},
		'binaryAccuracy'
		'binaryCrossentropy'      // binary classification
		'categoricalAccuracy'
		'categoricalCrossentropy' // multiclass classification
		'cosineProximity'
		'meanAbsoluteError'
		'meanAbsolutePercentageError'
		'meanSquaredError'
		'precision'
		'recall'
		'sparseCategoricalAccuracy'
})
tf.LayersModel.evaluate(x, y, ?args)
tf.LayersModel.evaluateDataset(dataset, ?args)
tf.LayersModel.predict(x, ?args={batchSize:32,verbose:false})
tf.LayersModel.predictOnBatch(x)
tf.LayersModel.fit(
	x=Tensor | [Tensor,...] | {name:Tensor},
	y=↑...,
	?args={
		batchSize:       32,
		epochs:          0,
		verbose:         1|0|2,
		callbacks:       [()=>,...] || {
			onTrainBegin: (logs)=>,
			onTrainEnd:   (logs)=>,
			onEpochBegin: (epoch, logs)=>,
			onEpochEnd:   (epoch, logs)=>,
			onBatchBegin: (batch, logs)=>,
			onBatchEnd:   (batch, logs)=>,
			onYield:      (epoch, batch, logs)=>,
		},
		validationSplit: 0>= float <=1,
		validationData:  [ [x, y] | [x, y, valSampleWeights], ... ], 
		shuffle:         false,
		classWeight:     ClassWeight | ClassWeight[] | ClassWeightMap,
		sampleWeight:    Tensor,
		initialEpoch:    0,
		stepsPerEpoch:   null,
		validationSteps: 0,
		yieldEvery:      'auto|batch|epoch|never' | 0,
})

tf.LayersModel.fitDataset(dataset, args)
tf.LayersModel.trainOnBatch(x, y)
tf.LayersModel.save(handlerOrURL=''|IOHandler, ?config={trainableOnly:false, includeOptimizer:false})
tf.LayersModel.getLayer(?name, ?index)

loadModelUrl =
	'http://path' |
	'https://path' |
	'localstorage://path' | // browser only
	'indexeddb://path' |    // ...
	'file:///path'          // node only
	
tf.loadLayersModel(pathOrIOHandler='↑...'|IOHandler, ?options={
	requestInit:        RequestInit,
	onProgress:         ()=>,
	fetchFunc:          ()=>,
	strict:             true,
	weightPathPrefix:   '',
	fromTFHub:          false,
	weightUrlConverter: (weightFileName='')=>Promise<string>,
}): Promise<LayersModel>

tf.loadGraphModel(modelUrl='↑...'|IOHandler, ?options={↑...}): Promise<GraphModel>

tf.tidy(nameOrFn=''|()=>, ?fn)

tf.backend()
tf.getBackend()
tf.ready()
tf.registerBackend(name='', factory=()=>, ?priority=1)
tf.removeBackend(name='')
tf.setBackend(?backendName='webgl|cpu|wasm')
