from tensorflow import keras
from keras.models import Sequential
from keras.layers import SimpleRNN, LSTM, GRU, Dense, InputLayer, BatchNormalization
import numpy as np

''' note about rnn input
since rnn can process any number of time steps,
it doesn't need to know length of input sequences (unlike other models)
that's why first input dimension is set to None
'''

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
inputs = np.random.random([32, 10, 8]).astype(np.float32)
inputs.shape # [batch, timesteps, feature]

simple_rnn = SimpleRNN(4)
output = simple_rnn(inputs)
output.shape # [32, 4]

simple_rnn = SimpleRNN(4, return_sequences=True, return_state=True)
whole_sequence_output, final_state = simple_rnn(inputs)
whole_sequence_output.shape # [32, 10, 4]
final_state.shape           # [32, 4]
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
x_train = [ [[0,0]], [[0,1]], [[1,0]], [[1,1]] ]
y_train = [ [0], [1], [1], [0] ]

model = Sequential([
	InputLayer((None,2)),
	SimpleRNN(8, activation='sigmoid'),
	Dense(units=1, activation='sigmoid'),
])
model.compile(optimizer=keras.optimizers.SGD(0.6), loss='mse')
model.fit(x_train, y_train, batch_size=1, epochs=500)

print(model.predict(x_train))
# [[0.05180356]
#  [0.93621683]
#  [0.9351667 ]
#  [0.07719162]]
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
x_train = np.random.normal(0, 0.1, (20,5,1))
y_train = np.random.randint(0, 2, (20,1))

model = Sequential([
	SimpleRNN(1, input_shape=(None,1)),
])

model = Sequential([
	SimpleRNN(20, return_sequences=True, input_shape=(None,1)),
	SimpleRNN(20, return_sequences=True),
	# BatchNormalization(),
	SimpleRNN(1)
])

model = Sequential([
	SimpleRNN(20, return_sequences=True, input_shape=(None,1)),
	SimpleRNN(20),
	# BatchNormalization(),
	Dense(1),
])

model.compile('adam', 'mse')
model.fit(x_train, y_train, epochs=500)
print(model.predict(x_train))
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@