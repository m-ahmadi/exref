import tensorflow as tf

# load model, then call model.fit() again

resume = 1

data = [
	[ [0,0], [0] ],
	[ [0,1], [1] ],
	[ [1,0], [1] ],
	[ [1,1], [0] ],
]
features = [i[0] for i in data]
labels   = [i[1] for i in data]


if resume == 0:
	model = tf.keras.Sequential([
		tf.keras.layers.Dense(units=8, activation='tanh', input_shape=(2,)),
		tf.keras.layers.Dense(units=1, activation='sigmoid')
	])
	model.compile(optimizer=tf.keras.optimizers.SGD(0.6), loss='mean_squared_error')
	h = model.fit(features, labels, batch_size=1, epochs=1000, verbose=0)
	print('loss:', h.history['loss'][-1])
	model.save('model')
else:
	model = tf.keras.models.load_model('model')
	h = model.fit(features, labels, batch_size=1, epochs=1000, verbose=0)
	print('loss:', h.history['loss'][-1])
	# model.save('model') # re-save the further trained model


print(
	model.predict( [ [0,0], [0,1], [1,0], [1,1] ] )
)