import tensorflow as tf
import numpy as np

'binary_crossentropy' # same as 'log_loss'?
# label:           one or more binary labels
# output layer:    sigmoid

model = tf.keras.Sequential([
    tf.keras.layers.Dense(units=4, activation='tanh', input_shape=[2]),
    tf.keras.layers.Dense(units=1,  activation='sigmoid')
])

model.compile(optimizer='sgd', loss='binary_crossentropy')

model.fit(
	np.array([ [-1,1], [-1,1], [-1,1],    [1,1], [1,1],    [-1,-1] ]),
	np.array([ 1,      1,      1,         0,     0,        0       ]),
	epochs=2000
)

print(
	model.predict( np.array([ [-1,1], [1,1], [-1,-1] ]) ) # 0.9624369  0.02764368  0.11087951
)