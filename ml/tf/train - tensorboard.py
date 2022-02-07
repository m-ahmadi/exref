import tensorflow as tf
from tensorflow import keras
from time import strftime

model = keras.Sequential([
	keras.layers.Dense(units=8, activation='sigmoid', input_shape=(2,)),
	keras.layers.Dense(units=1, activation='sigmoid')
])

model.compile(optimizer=keras.optimizers.SGD(0.6), loss='mean_squared_error')

cb = keras.callbacks.TensorBoard('my_logs/'+strftime('run_%Y_%m_%d_%H_%M_%S'))

model.fit([ [0,0], [0,1], [1,0], [1,1] ], [0,1,1,0], batch_size=1, epochs=500, callbacks=[cb], verbose=1)

print(
	model.predict(  [ [0,0], [0,1], [1,0], [1,1] ]  )
)

# tensorboard --logdir ./my_logs


''' another way using low-level api
writer = tf.summary.create_file_writer('my_logs')

with writer.as_default():
	for step in range(1, 1000 + 1):
		tf.summary.scalar('my_scalar', np.sin(step / 10), step=step)
		
		data = (np.random.randn(100) + 2) * step / 100 # some random data
		tf.summary.histogram('my_hist', data, buckets=50, step=step)
		
		images = np.random.rand(2, 32, 32, 3) # random 32×32 RGB images
		tf.summary.image('my_images', images * step / 1000, step=step)
		
		texts = ['The step is ' + str(step), 'Its square is ' + str(step**2)]
		tf.summary.text('my_text', texts, step=step)
		
		sine_wave = tf.math.sin(tf.range(12000) / 48000 * 2 * np.pi * step)
		audio = tf.reshape(tf.cast(sine_wave, tf.float32), [1, -1, 1])
		tf.summary.audio('my_audio', audio, sample_rate=48000, step=step)
'''