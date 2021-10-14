import tensorflow as tf
import numpy as np

model = tf.keras.Sequential()
model.add(tf.keras.layers.Dense(units=1, input_shape=[1]))
model.compile(optimizer='sgd', loss='mean_squared_error')

x = np.array([ [1], [2], [3], [4] ])
y = np.array([ [1], [3], [5], [7] ])
model.fit(x, y, epochs=1)

print(
	model.predict([ [5] ])
)