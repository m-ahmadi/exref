# https://www.tensorflow.org/model_optimization/guide/pruning/pruning_with_keras

# setup
import tempfile
import os

import tensorflow as tf
import numpy as np

from tensorflow import keras
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# train a model for mnist without pruning

# load mnist dataset
mnist = keras.datasets.mnist
(train_images, train_labels), (test_images, test_labels) = mnist.load_data()

# normalize the input image so that each pixel value is between 0 and 1.
train_images = train_images / 255.0
test_images = test_images / 255.0

# define the model architecture.
model = keras.Sequential([
	keras.layers.InputLayer(input_shape=(28, 28)),
	keras.layers.Reshape(target_shape=(28, 28, 1)),
	keras.layers.Conv2D(filters=12, kernel_size=(3, 3), activation='relu'),
	keras.layers.MaxPooling2D(pool_size=(2, 2)),
	keras.layers.Flatten(),
	keras.layers.Dense(10)
])

# train the digit classification model
model.compile(optimizer='adam',
							loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
							metrics=['accuracy'])

model.fit(
	train_images,
	train_labels,
	epochs=4,
	validation_split=0.1,
)


# evaluate baseline test accuracy and save the model for later usage.
_, baseline_model_accuracy = model.evaluate(
		test_images, test_labels, verbose=0)

print('Baseline test accuracy:', baseline_model_accuracy)

_, keras_file = tempfile.mkstemp('.h5')
tf.keras.models.save_model(model, keras_file, include_optimizer=False)
print('Saved baseline model to:', keras_file)
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# fine-tune pre-trained model with pruning

#================================================
# define the model

# you will apply pruning to the whole model and see this in the model summary.
# in this example, you start the model with 50% sparsity (50% zeros in weights) and end with 80% sparsity.
# in the [comprehensive guide](https://www.tensorflow.org/model_optimization/guide/pruning/comprehensive_guide.md), you can see how to prune some layers for model accuracy improvements.
import tensorflow_model_optimization as tfmot

prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude

# compute end step to finish pruning after 2 epochs.
batch_size = 128
epochs = 2
validation_split = 0.1 # 10% of training set will be used for validation set. 

num_images = train_images.shape[0] * (1 - validation_split)
end_step = np.ceil(num_images / batch_size).astype(np.int32) * epochs

# define model for pruning.
pruning_params = {
			'pruning_schedule': tfmot.sparsity.keras.PolynomialDecay(initial_sparsity=0.50,
																															 final_sparsity=0.80,
																															 begin_step=0,
																															 end_step=end_step)
}

model_for_pruning = prune_low_magnitude(model, **pruning_params)

# `prune_low_magnitude` requires a recompile.
model_for_pruning.compile(optimizer='adam',
							loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
							metrics=['accuracy'])

model_for_pruning.summary()
#================================================
# train and evaluate the model against baseline

# fine tune with pruning for two epochs.
# `tfmot.sparsity.keras.UpdatePruningStep` is required during training, and `tfmot.sparsity.keras.PruningSummaries` provides logs for tracking progress and debugging.
logdir = tempfile.mkdtemp()

callbacks = [
	tfmot.sparsity.keras.UpdatePruningStep(),
	tfmot.sparsity.keras.PruningSummaries(log_dir=logdir),
]
	
model_for_pruning.fit(train_images, train_labels,
									batch_size=batch_size, epochs=epochs, validation_split=validation_split,
									callbacks=callbacks)


# for this example, there is minimal loss in test accuracy after pruning, compared to the baseline.
_, model_for_pruning_accuracy = model_for_pruning.evaluate(
	 test_images, test_labels, verbose=0)

print('Baseline test accuracy:', baseline_model_accuracy) 
print('Pruned test accuracy:', model_for_pruning_accuracy)


# the logs show the progression of sparsity on a per-layer basis.
#docs_infra: no_execute
# %tensorboard --logdir={logdir}

# for non-Colab users, you can see [the results of a previous run](https://tensorboard.dev/experiment/sRQnrycaTMWQOaswXzClYA/#scalars&_smoothingWeight=0) of this code block on [TensorBoard.dev](https://tensorboard.dev/).
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# Create 3x smaller models from pruning

# both `tfmot.sparsity.keras.strip_pruning` and applying a standard compression algorithm (e.g. via gzip) are necessary to see the compression
# benefits of pruning.
# 	`strip_pruning` is necessary since it removes every tf.Variable that pruning only needs during training, which would otherwise add to model size during inference
# 	applying a standard compression algorithm is necessary since the serialized weight matrices are the same size as they were before pruning. However, pruning makes most of the weights zeros, which is
# added redundancy that algorithms can utilize to further compress the model.
# first, create a compressible model for TensorFlow.
model_for_export = tfmot.sparsity.keras.strip_pruning(model_for_pruning)

_, pruned_keras_file = tempfile.mkstemp('.h5')
tf.keras.models.save_model(model_for_export, pruned_keras_file, include_optimizer=False)
print('Saved pruned Keras model to:', pruned_keras_file)


# then, create a compressible model for TFLite.
converter = tf.lite.TFLiteConverter.from_keras_model(model_for_export)
pruned_tflite_model = converter.convert()

_, pruned_tflite_file = tempfile.mkstemp('.tflite')

with open(pruned_tflite_file, 'wb') as f:
	f.write(pruned_tflite_model)

print('Saved pruned TFLite model to:', pruned_tflite_file)


# define a helper function to actually compress the models via gzip and measure the zipped size.
def get_gzipped_model_size(file):
	# returns size of gzipped model, in bytes.
	import os
	import zipfile

	_, zipped_file = tempfile.mkstemp('.zip')
	with zipfile.ZipFile(zipped_file, 'w', compression=zipfile.ZIP_DEFLATED) as f:
		f.write(file)

	return os.path.getsize(zipped_file)


# compare and see that the models are 3x smaller from pruning.
print("Size of gzipped baseline Keras model: %.2f bytes" % (get_gzipped_model_size(keras_file)))
print("Size of gzipped pruned Keras model: %.2f bytes" % (get_gzipped_model_size(pruned_keras_file)))
print("Size of gzipped pruned TFlite model: %.2f bytes" % (get_gzipped_model_size(pruned_tflite_file)))
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# create a 10x smaller model from combining pruning and quantization

# you can apply post-training quantization to the pruned model for additional benefits.
converter = tf.lite.TFLiteConverter.from_keras_model(model_for_export)
converter.optimizations = [tf.lite.Optimize.DEFAULT]
quantized_and_pruned_tflite_model = converter.convert()

_, quantized_and_pruned_tflite_file = tempfile.mkstemp('.tflite')

with open(quantized_and_pruned_tflite_file, 'wb') as f:
	f.write(quantized_and_pruned_tflite_model)

print('Saved quantized and pruned TFLite model to:', quantized_and_pruned_tflite_file)

print("Size of gzipped baseline Keras model: %.2f bytes" % (get_gzipped_model_size(keras_file)))
print("Size of gzipped pruned and quantized TFlite model: %.2f bytes" % (get_gzipped_model_size(quantized_and_pruned_tflite_file)))
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# see persistence of accuracy from TF to TFLite

# define a helper function to evaluate the TF Lite model on the test dataset.
import numpy as np

def evaluate_model(interpreter):
	input_index = interpreter.get_input_details()[0]["index"]
	output_index = interpreter.get_output_details()[0]["index"]

	# run predictions on ever y image in the "test" dataset.
	prediction_digits = []
	for i, test_image in enumerate(test_images):
		if i % 1000 == 0:
			print('Evaluated on {n} results so far.'.format(n=i))
		# pre-processing: add batch dimension and convert to float32 to match with
		# the model's input data format.
		test_image = np.expand_dims(test_image, axis=0).astype(np.float32)
		interpreter.set_tensor(input_index, test_image)

		# run inference.
		interpreter.invoke()

		# post-processing: remove batch dimension and find the digit with highest
		# probability.
		output = interpreter.tensor(output_index)
		digit = np.argmax(output()[0])
		prediction_digits.append(digit)

	print('\n')
	# compare prediction results with ground truth labels to calculate accuracy.
	prediction_digits = np.array(prediction_digits)
	accuracy = (prediction_digits == test_labels).mean()
	return accuracy


# you evaluate the pruned and quantized model and see that the accuracy from TensorFlow persists to the TFLite backend.
interpreter = tf.lite.Interpreter(model_content=quantized_and_pruned_tflite_model)
interpreter.allocate_tensors()

test_accuracy = evaluate_model(interpreter)

print('Pruned and quantized TFLite test_accuracy:', test_accuracy)
print('Pruned TF test accuracy:', model_for_pruning_accuracy)
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
