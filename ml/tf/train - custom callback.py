import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.callbacks import Callback

model = keras.Sequential([
	keras.layers.Dense(units=8, activation='sigmoid', input_shape=(2,)),
	keras.layers.Dense(units=1, activation='sigmoid')
])
model.compile(optimizer=keras.optimizers.SGD(0.6), loss='mean_squared_error')

# stop training if loss <= N
#=================================================
# basic
class MyCallback(Callback):
	def on_epoch_end(self, epoch, logs={}):
		if logs.get('loss') <= 0.005:
			self.model.stop_training = True
#=================================================
# plus restore best weights
class EarlyStoppingByLoss(keras.callbacks.Callback):
	def on_train_begin(self, logs=None):
		self.best = np.Inf
		self.best_weights = None
	def on_epoch_end(self, epoch, logs={}):
		current = logs.get('loss')
		if current < self.best:
			self.best = current
			self.best_weights = self.model.get_weights()
		if self.best <= 0.05:
			self.model.stop_training = True
			self.model.set_weights(self.best_weights)
	def on_train_end(self, logs={}):
		if logs.get('loss') > self.best:
			self.model.set_weights(self.best_weights)
#=================================================
# another
class MyCallback(Callback):
	def __init__(self, monitor='loss', value=0.005):
		super(MyCallback, self).__init__()
		self.monitor = monitor
		self.value = value
	
	def on_epoch_end(self, epoch, logs={}):
		current = logs.get(self.monitor)
		if current is None:
			return
		if current <= self.value:
			self.model.stop_training = True
#=================================================

history = model.fit([ [0,0], [0,1], [1,0], [1,1] ], [0,1,1,0], batch_size=1, epochs=20000, callbacks=[MyCallback()], verbose=1)

print(
	'total epochs:', len(history.history['loss'])
)

print(
	model.predict(  [ [0,0], [0,1], [1,0], [1,1] ]  )
)