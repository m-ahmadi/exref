import keras.backend as K

def custom_loss(y_true, y_pred):
	loss = K.square(y_pred - y_true) # squared diff
	loss = loss * [0.3, 0.7]         # times class weights (along batch dimension)
	loss = K.sum(loss, axis=1)       # sum (along batch dimension)
	return loss
model.compile(optimizer='adam', loss=custom_loss)

def weighted_sparse_categorical_crossentropy(labels, logits, weights):
	loss = tf.nn.sparse_softmax_cross_entropy_with_logits(labels, logits)
	class_weights = tf.gather(weights, labels)
	return tf.reduce_mean(class_weights * loss)

class MeanSquaredError(keras.losses.Loss):
	def call(self, y_true, y_pred):
		return tf.reduce_mean(tf.square(y_pred - y_true), axis=-1)