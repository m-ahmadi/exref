import tensorflow as tf
from tensorflow import keras
import keras.backend as K # similar fns to numpy

def custom(y_true, y_pred):
	score = 128
	return tf.constant(score)
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=[custom])

def custom(y_true, y_pred):
	y_pred = y_pred.numpy().tolist()
	score = ...
	return tf.constant(score)
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=[custom], run_eagerly=True)

def mae(y_true, y_pred):       
	eval = K.abs(y_pred - y_true)
	eval = K.mean(eval, axis=-1)
	return eval
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=[mae])
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

class BinaryTruePositives(keras.metrics.Metric):
	def __init__(self, name='binary_true_positives', **kwargs):
		super(BinaryTruePositives, self).__init__(name=name, **kwargs)
		self.true_positives = self.add_weight(name='tp', initializer='zeros')

	def update_state(self, y_true, y_pred, sample_weight=None):
		y_true = tf.cast(y_true, tf.bool)
		y_pred = tf.cast(y_pred, tf.bool)

		values = tf.logical_and(tf.equal(y_true, True), tf.equal(y_pred, True))
		values = tf.cast(values, self.dtype)
		if sample_weight is not None:
			sample_weight = tf.cast(sample_weight, self.dtype)
			sample_weight = tf.broadcast_to(sample_weight, values.shape)
			values = tf.multiply(values, sample_weight)
		self.true_positives.assign_add(tf.reduce_sum(values))

	def result(self):
		return self.true_positives
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@