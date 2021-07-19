import tensorflow as tf

model = tf.keras.Sequential(layers=None|[], name=None)
model.compile(
	optimizer='rmsprop', loss=None, metrics=None, loss_weights=None,
	weighted_metrics=None, run_eagerly=None, steps_per_execution=None, **kwargs
)
model.compile(optimizer='sgd', loss='mse')
model.fit(
	x=None, y=None, batch_size=None, epochs=1, verbose='auto',
	callbacks=None, validation_split=0.0, validation_data=None, shuffle=True,
	class_weight=None, sample_weight=None, initial_epoch=0, steps_per_epoch=None,
	validation_steps=None, validation_batch_size=None, validation_freq=1,
	max_queue_size=10, workers=1, use_multiprocessing=False
)
model.predict(
	x, batch_size=None, verbose=0, steps=None, callbacks=None, max_queue_size=10,
	workers=1, use_multiprocessing=False
)

tf.keras.layers.Dense(
	units, activation=None, use_bias=True,
	kernel_initializer='glorot_uniform',
	bias_initializer='zeros', kernel_regularizer=None,
	bias_regularizer=None, activity_regularizer=None, kernel_constraint=None,
	bias_constraint=None, **kwargs
)
tf.keras.layers.Dense(8, input_shape=(16,))



