import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
import tensorflow as tf
from timeit import default_timer as timer

# tf.compat.v1.disable_eager_execution()

# why: changing shape of input (probably)

data = [
	[ [0,0], [0] ],
	[ [0,1], [1] ],
	[ [1,0], [1] ],
	[ [1,1], [0] ],
]
x = [i[0] for i in data]
y = [i[1] for i in data]

mods = []

for i in range(10):
	model = tf.keras.Sequential([
		tf.keras.layers.Dense(units=8, activation='sigmoid', input_shape=(2,)),
		tf.keras.layers.Dense(units=1, activation='sigmoid')
	])
	model.compile(optimizer=tf.keras.optimizers.SGD(0.6), loss='mean_squared_error')
	
	t1 = timer()
	model.fit(x, y, batch_size=1, epochs=20, verbose=0)
	print('net'+str(i) + ' done in', round((timer()-t1)/60, 2), 'min')
	
	mods.append(model)

for i in range(10):
	print(
		mods[i].predict(  [ [0,0], [0,1], [1,0], [1,1] ]  )
	)