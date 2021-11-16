import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.callbacks import Callback

model = keras.Sequential([
	keras.layers.Dense(units=8, activation='sigmoid', input_shape=(2,)),
	keras.layers.Dense(units=1, activation='sigmoid')
])

model.compile(optimizer=keras.optimizers.SGD(0.6), loss='mean_squared_error')

class EarlyStoppingByLossVal(Callback):
	def __init__(self, monitor='loss', value=0.005, verbose=0):
		super(Callback, self).__init__()
		self.monitor = monitor
		self.value = value
		self.verbose = verbose

	def on_epoch_end(self, epoch, logs={}):
		current = logs.get(self.monitor)
		if current is None:
			warnings.warn("Early stopping requires %s available!" % self.monitor, RuntimeWarning)

		if current < self.value:
			if self.verbose > 0:
				print("Epoch %05d: early stopping THR" % epoch)
			self.model.stop_training = True

cb = EarlyStoppingByLossVal(monitor='loss', value=0.005, verbose=1)

history = model.fit([ [0,0], [0,1], [1,0], [1,1] ], [0,1,1,0], batch_size=1, epochs=500, callbacks=[cb], verbose=1)

print(
	'total epochs:', len(history.history['loss'])
)

print(
	model.predict(  [ [0,0], [0,1], [1,0], [1,1] ]  )
)


# another way (by saving checkpoints)
'''
# checkpoint_cb = keras.callbacks.ModelCheckpoint('foo', save_best_only=True)
# history = model.fit(x_train, y_train, epochs=10, validation_data=(x_valid, y_valid), callbacks=[checkpoint_cb])
'''