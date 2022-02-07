import tensorflow as tf
import numpy as np

''' binary_crossentropy
label:           array of 0 or 1 (each index of array represents a different label)
output layer
	activation:    sigmoid
	units:         represent possible labels
'''
model = tf.keras.Sequential([
	tf.keras.layers.Dense(units=3, activation='sigmoid', input_shape=(2,)),
	tf.keras.layers.Dense(units=3, activation='sigmoid')
])
model.compile(optimizer='sgd', loss='binary_crossentropy')
model.fit(
	np.array([ [1,1],   [1,1],   [1,1],   [1,1],      [0,0],   [0,0],   [0,0],   [0,0],      [0,1]    ]),
	np.array([ [0,1,1], [0,1,1], [0,1,1], [0,1,1],    [1,0,1], [1,0,1], [1,0,1], [1,0,1],    [0,0,0]  ]),
	epochs=20000,
	verbose=0
)
print(
	model.predict( np.array([ [1,1], [0,0], [0,1] ]) )
)
# [[0.01728889 0.91751397 0.9086958 ]  # class 2 & 3
#  [0.91487676 0.02521273 0.88644505]  # class 1 & 3
#  [0.30615693 0.32413477 0.8358371 ]]