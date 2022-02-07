from tensorflow import keras
from keras.layers import InputLayer, Dense
from sklearn.utils.class_weight import compute_class_weight
import numpy as np

data = [
	[ [0,1], [1] ],
	[ [1,0], [1] ],
	
	[ [0,0], [0] ],
	[ [0,0], [0] ],
	[ [1,1], [0] ],
	[ [1,1], [0] ],
	
	[ [0,0], [0] ],
	[ [0,0], [0] ],
	[ [1,1], [0] ],
	[ [1,1], [0] ],
	
	[ [0,0], [0] ],
	[ [0,0], [0] ],
	[ [1,1], [0] ],
	[ [1,1], [0] ],
	
	[ [0,0], [0] ],
	[ [0,0], [0] ],
	[ [1,1], [0] ],
	[ [1,1], [0] ],
	
]
x_train = [i[0] for i in data]
y_train = [i[1] for i in data]

use_output_bias = 0

if use_output_bias:
	neg, pos = np.bincount(y_org)
	initial_bias = np.log([pos/neg])

model = keras.Sequential([
	InputLayer(2),
	Dense(units=8, activation='sigmoid'),
	Dense(units=1, activation='sigmoid', bias_initializer=keras.initializers.Constant(initial_bias) if use_output_bias else 'zeros')
])
model.compile(optimizer=keras.optimizers.SGD(0.8), loss='binary_crossentropy')

use = 1
type = 1

if type == 0:
	# manual
	weights = {0: 1., 1: 10.} # every instance of class 1 == 10 instances of class 0
else:
	# auto
	y_org = np.array(y_train).reshape(len(y_train))
	weights = compute_class_weight('balanced', classes=np.unique(y_train), y=y_org)
	weights = dict(enumerate(weights))
	
	'''same as:
	neg, pos = np.bincount(y_org)
	total = neg + pos
	weight_for_0 = (1 / neg) * (total / 2.0)
	weight_for_1 = (1 / pos) * (total / 2.0)
	_weights = {0: weight_for_0, 1: weight_for_1}
	weights == _weights # True'''

model.fit(x_train, y_train, batch_size=1, verbose=0, epochs=100, class_weight=weights if use else None)

print(
	model.predict(  [ [0,0], [0,1], [1,0], [1,1] ]  )
)

'''
question:
	docs says "dictionary mapping class indices (integers) to a weight (float) value"
	ain't no class indice in 'binary_crossentropy'

answer:
	on "Classification on imbalanced data" tutorial
	'binary_crossentropy' is used
	so seems "manual" section of above code is correct
	
	or if this answer's wrong, then maybe implement binary classification with `sparse_categorical_crossentropy` (that has only one class)
'''
