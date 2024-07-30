import tensorflow as tf
import numpy as np

model = tf.keras.Sequential()
model.add(tf.keras.layers.Dense(units=2, activation='softmax'))
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

x = np.array([ [1,0,0,0], [1,0,0,0], [0,0,1,0], [0,0,0,1] ])
y = np.array([ [0,1],     [0,1],     [1,0],     [1,0] ])
model.fit(x, y, epochs=3)

print(
	model.predict([ [1,0,0,0] ])
)

# [[0.622042, 0.377958]]
