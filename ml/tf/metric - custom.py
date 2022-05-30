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

# from logits
for epoch in range(EPOCHS):
	for x_batch_train, y_batch_train in train_dataset:
		with tf.GradientTape() as tape:
			logits = model(x_batch_train, training=True)
		...
		y_batch_pred = tf.nn.sigmoid_cross_entropy_with_logits(y_batch_train, logits)
		metric(y_batch_train, y_batch_pred)
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
# https://medium.com/analytics-vidhya/custom-metrics-for-keras-tensorflow-ae7036654e05
def recall(y_true, y_pred):
	true_positives = K.sum(K.round(K.clip(y_true * y_pred, 0, 1)))
	possible_positives = K.sum(K.round(K.clip(y_true, 0, 1)))
	recall_keras = true_positives / (possible_positives + K.epsilon())
	return recall_keras

def precision(y_true, y_pred):
	true_positives = K.sum(K.round(K.clip(y_true * y_pred, 0, 1)))
	predicted_positives = K.sum(K.round(K.clip(y_pred, 0, 1)))
	precision_keras = true_positives / (predicted_positives + K.epsilon())
	return precision_keras

def specificity(y_true, y_pred):
	tn = K.sum(K.round(K.clip((1 - y_true) * (1 - y_pred), 0, 1)))
	fp = K.sum(K.round(K.clip((1 - y_true) * y_pred, 0, 1)))
	return tn / (tn + fp + K.epsilon())

def negative_predictive_value(y_true, y_pred):
	tn = K.sum(K.round(K.clip((1 - y_true) * (1 - y_pred), 0, 1)))
	fn = K.sum(K.round(K.clip(y_true * (1 - y_pred), 0, 1)))
	return tn / (tn + fn + K.epsilon())

def f1(y_true, y_pred):
	p = precision(y_true, y_pred)
	r = recall(y_true, y_pred)
	return 2 * ((p * r) / (p + r + K.epsilon()))

def fbeta(y_true, y_pred, beta=2):
	y_pred = K.clip(y_pred, 0, 1)

	tp = K.sum(K.round(K.clip(y_true * y_pred, 0, 1)), axis=1)
	fp = K.sum(K.round(K.clip(y_pred - y_true, 0, 1)), axis=1)
	fn = K.sum(K.round(K.clip(y_true - y_pred, 0, 1)), axis=1)

	p = tp / (tp + fp + K.epsilon())
	r = tp / (tp + fn + K.epsilon())

	num = (1 + beta ** 2) * (p * r)
	den = (beta ** 2 * p + r + K.epsilon())
	return K.mean(num / den)

def matthews_correlation_coefficient(y_true, y_pred):
	tp = K.sum(K.round(K.clip(y_true * y_pred, 0, 1)))
	tn = K.sum(K.round(K.clip((1 - y_true) * (1 - y_pred), 0, 1)))
	fp = K.sum(K.round(K.clip((1 - y_true) * y_pred, 0, 1)))
	fn = K.sum(K.round(K.clip(y_true * (1 - y_pred), 0, 1)))

	num = tp * tn - fp * fn
	den = (tp + fp) * (tp + fn) * (tn + fp) * (tn + fn)
	return num / K.sqrt(den + K.epsilon())

def equal_error_rate(y_true, y_pred):
	n_imp = tf.count_nonzero(tf.equal(y_true, 0), dtype=tf.float32) + tf.constant(K.epsilon())
	n_gen = tf.count_nonzero(tf.equal(y_true, 1), dtype=tf.float32) + tf.constant(K.epsilon())

	scores_imp = tf.boolean_mask(y_pred, tf.equal(y_true, 0))
	scores_gen = tf.boolean_mask(y_pred, tf.equal(y_true, 1))

	loop_vars = (tf.constant(0.0), tf.constant(1.0), tf.constant(0.0))
	cond = lambda t, fpr, fnr: tf.greater_equal(fpr, fnr)
	body = lambda t, fpr, fnr: (
			t + 0.001,
			tf.divide(tf.count_nonzero(tf.greater_equal(scores_imp, t), dtype=tf.float32), n_imp),
			tf.divide(tf.count_nonzero(tf.less(scores_gen, t), dtype=tf.float32), n_gen)
	)
	t, fpr, fnr = tf.while_loop(cond, body, loop_vars, back_prop=False)
	eer = (fpr + fnr) / 2

	return eer
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@