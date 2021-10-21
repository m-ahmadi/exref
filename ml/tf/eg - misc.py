# two ways of defining activation (both equal)
model = keras.Sequential([
	keras.layers.Dense(1024, activation='relu', input_dim=64))
	keras.layers.Dense(256, activation='relu')
	keras.layers.Dense(10, activation='softmax')
])
model = keras.Sequential([
	keras.layers.Dense(1024, input_dim=64)
	keras.layers.Activation(relu)
	keras.layers.Dense(256)
	keras.layers.Activation('relu')
	keras.layers.Dense(10)
	keras.layers.Activation('softmax')
])

# functional api
input_ = keras.layers.Input(shape=X_train.shape[1:])
hidden1 = keras.layers.Dense(30, activation='relu')(input_)
hidden2 = keras.layers.Dense(30, activation='relu')(hidden1)
concat = keras.layers.Concatenate()([input_, hidden2])
output = keras.layers.Dense(1)(concat)
model = keras.Model(inputs=[input_], outputs=[output])

# functional api - multiple inputs
input_A = keras.layers.Input(shape=[5], name='wide_input')
input_B = keras.layers.Input(shape=[6], name='deep_input')
hidden1 = keras.layers.Dense(30, activation='relu')(input_B)
hidden2 = keras.layers.Dense(30, activation='relu')(hidden1)
concat = keras.layers.concatenate([input_A, hidden2])
output = keras.layers.Dense(1, name='output')(concat)
model = keras.Model(inputs=[input_A, input_B], outputs=[output])

# get learning curves (metrics measured at end of each epoch)
import pandas as pd
import matplotlib.pyplot as plt
history = model.fit(...)
pd.DataFrame(history.history).plot(figsize=(8, 5))
plt.grid(True)
plt.gca().set_ylim(0,1) # set the vertical range to [0-1]
plt.show()