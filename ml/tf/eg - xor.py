import tensorflow as tf
import numpy as np

data = [
	[ [0,0], [0] ],
	[ [0,1], [1] ],
	[ [1,0], [1] ],
	[ [1,1], [0] ],
]
features = [i[0] for i in data]
labels = [i[1] for i in data]

model = tf.keras.Sequential([
	tf.keras.layers.Dense(units=8, input_shape=(2,), activation='tanh'),
	tf.keras.layers.Dense(units=1, activation='sigmoid')
])
model.compile(optimizer=tf.keras.optimizers.SGD(0.6), loss='mean_squared_error')

model.fit(features, labels, batch_size=1, epochs=5000)

print(
	model.predict(  np.array([ [0,0], [0,1], [1,0], [1,1] ])  )
)

# epochs=5000
# [[0.00407845]
#  [0.9950259 ]
#  [0.9946092 ]
#  [0.00599459]]

# epochs=2000
# [[0.00601724]
#  [0.9888445 ]
#  [0.9894794 ]
#  [0.0120151 ]]

# epochs=1000
# [[0.00819433]
#  [0.9847765 ]
#  [0.9835819 ]
#  [0.01765227]]

# epochs=500
# [[0.01448798]
#  [0.97655636]
#  [0.97679883]
#  [0.02622622]]