model = tf.keras.Sequential([
	tf.keras.layers.Dense(units=100, activation='sigmoid', input_shape=[2]),
	tf.keras.layers.Dense(units=100, activation='sigmoid'),
	tf.keras.layers.Dense(units=1,   activation='sigmoid'),
])
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])




model = tf.keras.Sequential([
	tf.keras.layers.Dense(units=100, activation='relu', input_shape=[2]),
	tf.keras.layers.Dense(units=1,   activation='sigmoid'),
])
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])




model = tf.keras.Sequential([
	tf.keras.layers.Dense(units=1, input_shape=[2], activation='linear', kernel_regularizer=tf.keras.regularizers.L2() ),
	tf.keras.layers.Dense(units=1, activation='sigmoid'),
])
model.compile(optimizer='adam', loss='hinge', metrics=['accuracy'])




x = [ [1,2], [3,4], [5,6], [7,8] ]
y = [0,1,0,1]
model = tf.keras.Sequential([
	tf.keras.layers.Dense(units=1, input_shape=[2], activation='linear', kernel_regularizer=tf.keras.regularizers.L2())
])
model.compile(optimizer='adam', loss='hinge')
model.fit(np.array(x), np.array(y), epochs=5000)
print(
	model.predict(  np.array([ [1,2], [3,4], [5,6], [7,8] ])  )
)
# [[-0.9996199 ]
#  [-0.33255684]
#  [ 0.33450615]
#  [ 1.0015692 ]]