from tensorflow import keras
import numpy as np

import matplotlib.pyplot as plt
from itertools import chain

def generate_time_series(batch_size, n_steps):
	freq1, freq2, offsets1, offsets2 = np.random.rand(4, batch_size, 1)
	time = np.linspace(0, 1, n_steps)
	series = 0.5 * np.sin((time - offsets1) * (freq1 * 10 + 10)) # wave 1
	series += 0.2 * np.sin((time - offsets2) * (freq2 * 20 + 20)) # + wave 2
	series += 0.1 * (np.random.rand(batch_size, n_steps) - 0.5) # + noise
	return series[..., np.newaxis].astype(np.float32)

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
n_steps = 50
series = generate_time_series(10000, n_steps + 1)

fig, axes = plt.subplots(4,4, figsize=(12,8), tight_layout=True)
axes = [*chain(*axes)]
for i in range(16):
  y = series[i].reshape((series[i].size))
  axes[i].plot(range(len(y)), y)
plt.show()

X_train, y_train = series[:7000, :n_steps], series[:7000, -1]
X_valid, y_valid = series[7000:9000, :n_steps], series[7000:9000, -1]
X_test, y_test = series[9000:, :n_steps], series[9000:, -1]
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# baseline metrics

# naive forecasting
y_pred = X_valid[:, -1]
res = np.mean(keras.losses.mean_squared_error(y_valid, y_pred)) # 0.020
print(res)

# fully connected net
model = keras.models.Sequential([
	keras.layers.Flatten(input_shape=(50,1)),
	keras.layers.Dense(1)
])
model.compile('adam', 'mse')
model.fit(X_train, y_train, epochs=20)
res = model.evaluate(X_valid, y_valid)
print(res) # 0.004
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# simple rnn

model = keras.models.Sequential([
	keras.layers.SimpleRNN(1, input_shape=(None,1))
])
model.compile('adam', 'mse')
model.fit(X_train, y_train, epochs=20)
res = model.evaluate(X_valid, y_valid)
print(res) # 0.014
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# deep rnn

model = keras.models.Sequential([
	keras.layers.SimpleRNN(20, return_sequences=True, input_shape=(None,1)),
	keras.layers.SimpleRNN(20, return_sequences=True),
	keras.layers.SimpleRNN(1)
])
model.compile('adam', 'mse')
model.fit(X_train, y_train, epochs=20)
res = model.evaluate(X_valid, y_valid)
print(res) # 0.003


model = keras.models.Sequential([
	keras.layers.SimpleRNN(20, return_sequences=True, input_shape=(None,1)),
	keras.layers.SimpleRNN(20),
	keras.layers.Dense(1),
	# keras.layers.Dense(1, activation='sigmoid'),
])
model.compile('adam', 'mse')
model.fit(X_train, y_train, epochs=20)
res = model.evaluate(X_valid, y_valid)
print(res) # 0.003
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# forecasting several time steps ahead

series = generate_time_series(1, n_steps + 10)
X_new, Y_new = series[:, :n_steps], series[:, n_steps:]
X = X_new
for step_ahead in range(10):
	y_pred_one = model.predict(X[:, step_ahead:])[:, np.newaxis, :]
	X = np.concatenate([X, y_pred_one], axis=1)
Y_pred = X[:, n_steps:]



series = generate_time_series(10000, n_steps + 10)
X_train, Y_train = series[:7000, :n_steps], series[:7000, -10:, 0]
X_valid, Y_valid = series[7000:9000, :n_steps], series[7000:9000, -10:, 0]
X_test, Y_test = series[9000:, :n_steps], series[9000:, -10:, 0]
model = keras.models.Sequential([
	keras.layers.SimpleRNN(20, return_sequences=True, input_shape=(None,1)),
	keras.layers.SimpleRNN(20),
	keras.layers.Dense(10)
])

Y_pred = model.predict(X_new)


Y = np.empty((10000, n_steps, 10)) # each target is a sequence of 10D vectors
for step_ahead in range(1, 10 + 1):
	Y[:, :, step_ahead - 1] = series[:, step_ahead:step_ahead + n_steps, 0]
Y_train = Y[:7000]
Y_valid = Y[7000:9000]
Y_test = Y[9000:]
model = keras.models.Sequential([
	keras.layers.SimpleRNN(20, return_sequences=True, input_shape=(None,1)),
	keras.layers.SimpleRNN(20, return_sequences=True),
	keras.layers.TimeDistributed(keras.layers.Dense(10))
])

def last_time_step_mse(Y_true, Y_pred):
	return keras.metrics.mean_squared_error(Y_true[:, -1], Y_pred[:, -1])

model.compile(loss='mse', optimizer=keras.optimizers.Adam(lr=0.01), metrics=[last_time_step_mse])