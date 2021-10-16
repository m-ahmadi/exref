import tensorflow as tf
import numpy as np




'sparse_categorical_crossentropy'
# label:           an integer representing the index of a target class (exclusive classes)
#                  array of integers for inclusive classes? (like [ft,[7,4]], [ft,[2]], [ft,[3,8,5]], ...)
# output layer:    softmax

model = tf.keras.Sequential([
	tf.keras.layers.Dense(units=4, activation='sigmoid', input_shape=(2,)),
	tf.keras.layers.Dense(units=3, activation='softmax')
])
model.compile(optimizer='sgd', loss='sparse_categorical_crossentropy')
model.fit(
	np.array([ [1,1], [1,1], [1,1], [1,1],    [0,0], [0,0], [0,0], [0,0],    [0,1] ]),
	np.array([  2,     2,     2,     2,        0,     0,     0,     0,        1    ]),
	epochs=5000
)
print(
	model.predict( np.array([ [1,1], [0,0], [0,1] ]) )
)
# [[0.08918455 0.11516404 0.7956514 ]  # class 3
#  [0.89919835 0.05255239 0.04824934]  # class 1
#  [0.24719569 0.3149521  0.43785214]] # kinda equal class 1 & 2, more class 3 (as expected cuz of less patterns)




'categorical_crossentropy'
# label:           one_hot vector, eg: [0,0,1] to represent class 3 (one target probability per class)
# output layer:    softmax

model = tf.keras.Sequential([
	tf.keras.layers.Dense(units=4, activation='sigmoid', input_shape=(2,)),
	tf.keras.layers.Dense(units=3, activation='softmax')
])
model.compile(optimizer='sgd', loss='categorical_crossentropy')
model.fit(
	np.array([ [1,1],   [1,1],   [1,1],   [1,1],      [0,0],   [0,0],   [0,0],   [0,0],      [0,1]    ]),
	np.array([ [0,0,1], [0,0,1], [0,0,1], [0,0,1],    [1,0,0], [1,0,0], [1,0,0], [1,0,0],    [0,1,0]  ]),
	epochs=5000
)
print(
	model.predict( np.array([ [1,1], [0,0], [0,1] ]) )
)
# [[0.04251146 0.0512307  0.9062578 ]  # class 3
#  [0.8231923  0.12440635 0.0524013 ]  # class 2
#  [0.43339634 0.3411192  0.2254845 ]] # same as sparse




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