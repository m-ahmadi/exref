model = tf.keras.Sequential([
	tf.keras.layers.Dense(units=100, activation='sigmoid', input_shape=[2]),
	tf.keras.layers.Dense(units=100, activation='sigmoid'),
	tf.keras.layers.Dense(units=1,   activation='sigmoid'),
])
model.compile(optimizer='adam', loss='binaryCrossentropy', metrics=['accuracy'])




var model = tf.keras.Sequential([
	tf.keras.layers.Dense(units=100, activation='relu', input_shape=[2]),
	tf.keras.layers.Dense(units=1,   activation='sigmoid'),
])
model.compile(optimizer='adam', loss='binaryCrossentropy', metrics=['accuracy'])




var model = tf.keras.Sequential([
	tf.keras.layers.Dense(units=1, input_shape=[2], activation='linear', kernel_regularizer=tf.keras.regularizers.L2() ),
	tf.keras.layers.Dense(units=1, activation='sigmoid'),
])
model.compile(optimizer='adam', loss=tf.keras.losses.Hinge(), metrics=['accuracy'])




x = [ [1,2], [3,4], [5,6], [7,8] ]
y = [  0,     1,     0,     1    ]
model = tf.keras.Sequential([
	tf.keras.layers.Dense(units=1, input_shape=[2], activation='linear', kernel_regularizer=tf.keras.regularizers.L2())
])
model.compile(optimizer='adam', loss=tf.keras.losses.Hinge())
model.fit(np.array(x), np.array(y), epochs=5000)
print(
	model.predict(  np.array([ [1,2], [3,4], [5,6], [7,8] ])  )
)
# [[-1.0006356 ]
#  [-0.33428794]
#  [ 0.33205932]
#  [ 0.99840707]]