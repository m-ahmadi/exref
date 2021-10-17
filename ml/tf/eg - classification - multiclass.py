import tensorflow as tf
import numpy as np




''' sparse_categorical_crossentropy
label
	exclusive classes:    an integer (index of the target class)
	inclusive classes:    array of integers (like [ft,[7,4]], [ft,[2]], [ft,[3,8,5]], ...)

output layer
	activation:           softmax
	units:                must equal number of classes

note: exclusive classes means feature cannot belong to two classes
'''
model = tf.keras.Sequential([
	tf.keras.layers.Dense(units=4, activation='sigmoid', input_shape=(2,)),
	tf.keras.layers.Dense(units=3, activation='softmax')
])
model.compile(optimizer='sgd', loss='sparse_categorical_crossentropy')
model.fit(
	np.array([ [1,1], [1,1], [1,1], [1,1],    [0,0], [0,0], [0,0], [0,0],    [0,1] ]),
	np.array([  2,     2,     2,     2,        0,     0,     0,     0,        1    ]),
	epochs=10000,
	verbose=0
)
print(
	model.predict( np.array([ [1,1], [0,0], [0,1] ]) )
)
# [[0.00527653 0.04898071 0.9457428 ]  # class 3
#  [0.9466008  0.04578314 0.00761606]  # class 1
#  [0.23384024 0.50413597 0.2620238 ]] # kinda class 2 (as expected cuz of less patterns)




''' categorical_crossentropy
label:           one-hot vector, eg: [0,0,1] to represent class 3 (one target probability per class)
output layer
	activation:    softmax
	units:         must equal length of the "one-hot" vector
'''
model = tf.keras.Sequential([
	tf.keras.layers.Dense(units=4, activation='sigmoid', input_shape=(2,)),
	tf.keras.layers.Dense(units=3, activation='softmax')
])
model.compile(optimizer='sgd', loss='categorical_crossentropy')
model.fit(
	np.array([ [1,1],   [1,1],   [1,1],   [1,1],      [0,0],   [0,0],   [0,0],   [0,0],      [0,1]    ]),
	np.array([ [0,0,1], [0,0,1], [0,0,1], [0,0,1],    [1,0,0], [1,0,0], [1,0,0], [1,0,0],    [0,1,0]  ]),
	epochs=10000,
	verbose=0
)
print(
	model.predict( np.array([ [1,1], [0,0], [0,1] ]) )
)
# [[0.00926228 0.03544391 0.95529383]  # class 3
#  [0.9543723  0.03671788 0.00890983]  # class 2
#  [0.14765534 0.70233124 0.15001337]] # kinda class 2 (as expected cuz of less patterns)




# another example
# feature:  28*28 pixel images
# label:    name of image from 10 different names
# 2 hidden layers
model = tf.keras.Sequential([
	tf.keras.layers.Flatten(), # convert each 28x28 image into 1d arr (784)
	tf.keras.layers.Dense(units=300, activation='relu'),
	tf.keras.layers.Dense(units=100, activation='relu'),
	#tf.keras.layers.Flatten() # required (before last layer) if input layer is multi-dimensional but dimensionality is never reduced in mid layers
	tf.keras.layers.Dense(units=10, activation='softmax')
])
model.compile(optimizer='sgd', loss='sparse_categorical_crossentropy')