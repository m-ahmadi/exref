import tensorflow as tf
from tensorflow import keras

model = keras.Sequential([
	keras.layers.Dense(units=8, activation='sigmoid', input_shape=(2,)),
	keras.layers.Dense(units=1, activation='sigmoid')
])

model.compile(optimizer=keras.optimizers.SGD(0.6), loss='mean_squared_error')

cb = keras.callbacks.EarlyStopping(monitor='loss', patience=10, restore_best_weights=True)

history = model.fit([ [0,0], [0,1], [1,0], [1,1] ], [0,1,1,0], batch_size=1, epochs=500, callbacks=[cb], verbose=1)

print(
	'total epochs:', len(history.history['loss'])
)

print(
	model.predict(  [ [0,0], [0,1], [1,0], [1,1] ]  )
)


# another way (by saving checkpoints)
'''
# checkpoint_cb = keras.callbacks.ModelCheckpoint('foo', save_best_only=True)
# history = model.fit(x_train, y_train, epochs=10, validation_data=(x_valid, y_valid), callbacks=[checkpoint_cb])
'''