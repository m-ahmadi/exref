# caused by changing shape of input (probably, just predict at once instead)
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
import tensorflow as tf
import numpy as np
from numpy.random import uniform, randint
from timeit import default_timer as timer

tf.compat.v1.disable_eager_execution() # no "5 out of the last 5 calls"

train = 1
mods = []
labels = [ [randint(2) for _ in range(5)] for _ in range(10) ]

for i in range(1,11):
	
	if train == 1:
		x = []
		y = []
		for j in range(10):
			x.append( list( uniform(0,1,i) ) )
			y.append( labels[ randint(len(labels)) ] )
		
		if i == 1:
			x = [i[0] for i in x]
		
		model = tf.keras.Sequential([
			tf.keras.layers.Dense(units=3, activation='sigmoid', input_shape=(i,)),
			tf.keras.layers.Dense(units=5, activation='sigmoid')
		])
		model.compile(optimizer='sgd', loss='binary_crossentropy', metrics=['accuracy'])
		t1 = timer()
		model.fit(np.array(x), np.array(y), batch_size=1, epochs=30, verbose=0)
		print('mod'+str(i) + ' took', round((timer()-t1)/60, 2), 'min')
		model.save('model'+str(i))

	else:
		model = tf.keras.models.load_model('model'+str(i))
	
	mods.append(model)

for i in range(9):
	input = np.array([ uniform(0,1,i+1) ])
	print(
		'\ninput: ', input,
		'\npredict:', mods[i].predict(input)
	)
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# another example (simple)
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
import tensorflow as tf
import numpy as np
from timeit import default_timer as timer

tf.compat.v1.disable_eager_execution() # no "5 out of the last 5 calls"

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
	model.fit(np.array(x), np.array(y), batch_size=1, epochs=20, verbose=0)
	print('net'+str(i) + ' done in', round((timer()-t1)/60, 2), 'min')
	
	mods.append(model)

for i in range(10):
	print(
		mods[i].predict(  np.array([ [0,0], [0,1], [1,0], [1,1] ])  )
	)