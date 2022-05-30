import keras.backend as K

def custom_loss(y_true, y_pred):
	loss = K.square(y_pred - y_true) # squared diff
	loss = loss * [0.3, 0.7]         # times class weights (along batch dimension)
	loss = K.sum(loss, axis=1)       # sum (along batch dimension)
	return loss
model.compile(optimizer='adam', loss=custom_loss)


class MeanSquaredError(keras.losses.Loss):
	def call(self, y_true, y_pred):
		return tf.reduce_mean(tf.square(y_pred - y_true), axis=-1)