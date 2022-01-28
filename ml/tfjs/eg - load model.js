/*
LayersModel
	for training, evaluation, prediction, saving

GraphModel
	only for inference execution (no LSTM support)
*/


// load converted tensorflow model
var model = await tf.loadGraphModel('https://storage.googleapis.com/tfjs-models/savedmodel/mobilenet_v2_1.0_224/model.json');
var zeros = tf.zeros([1, 224, 224, 3]);
model.predict(zeros).print();

var model = await tf.loadLayersModel('path/to/model.json');
model.predict( tf.tensor([0]) ).print();


// load model previously saved in browser
var saveResult = await model.save('localstorage://my-model');
var model = await tf.loadLayersModel('localstorage://my-model');

var saveResult = await model.save('indexeddb://my-model');
var model = await tf.loadLayersModel('indexeddb://my-model');