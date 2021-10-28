import tensorflow as tf
import numpy as np

''' binary_crossentropy (same as 'log_loss'?)
label:           one or more binary labels
output layer
	activation:    sigmoid
	units:         1 (or more depending on labeling)
'''
model = tf.keras.Sequential([
    tf.keras.layers.Dense(units=4, activation='sigmoid', input_shape=(2)),
    tf.keras.layers.Dense(units=1, activation='sigmoid')
])

model.compile(optimizer='sgd', loss='binary_crossentropy')

model.fit(
	np.array([ [-1,1], [-1,1], [-1,1],    [1,1], [1,1],    [-1,-1] ]),
	np.array([ 1,      1,      1,         0,     0,        0       ]),
	epochs=2000
)

print(
	model.predict( np.array([ [-1,1], [1,1], [-1,-1] ]) )
)
# [[0.9734495 ]
#  [0.03959703]
#  [0.04934222]]