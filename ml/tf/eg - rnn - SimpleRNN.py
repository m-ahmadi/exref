from tensorflow import keras
from keras.models import Sequential
from keras.layers import SimpleRNN, LSTM, GRU, Embedding, Dense, InputLayer
import numpy as np

''' note about rnn input
since rnn can process any number of time steps,
it doesn't need to know length of input sequences (unlike other models)
that's why first input dimension is set to None
'''

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
inputs = np.random.random([32, 10, 8]).astype(np.float32)

simple_rnn = SimpleRNN(4)
output = simple_rnn(inputs)
output.shape # [32, 4]

simple_rnn = SimpleRNN(4, return_sequences=True, return_state=True)
whole_sequence_output, final_state = simple_rnn(inputs)
whole_sequence_output.shape # [32, 10, 4]
final_state.shape           # [32, 4]
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
x_train = [ [[0,0]], [[0,1]], [[1,0]], [[1,1]] ]
y_train = [ [0], [1], [1], [0] ]

model = Sequential([
	InputLayer((None,2)),
	SimpleRNN(8, activation='sigmoid'),
	Dense(units=1, activation='sigmoid'),
])
model.compile(optimizer=keras.optimizers.SGD(0.6), loss='mse')
model.fit(x_train, y_train, epochs=1500)
print(model.predict(x_train))
# [[0.10568032]
#  [0.86845374]
#  [0.8640741 ]
#  [0.16029805]]
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# x_train = [ [[0]], [[1]], [[1]], [[0]] ]
x_train = [ [0], [1], [1], [0] ]
y_train = [ [0], [1], [1], [0] ]

model = Sequential([
	InputLayer((None,1)),
	SimpleRNN(1),
])
model.compile('adam', 'mse')
model.fit(x_train, y_train, epochs=500)
print(model.predict(x_train))

# [[0.12196616]
#  [0.7597158 ]
#  [0.7597158 ]
#  [0.12196616]]
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
model = Sequential([
	SimpleRNN(20, return_sequences=True, input_shape=(None,1)),
	SimpleRNN(20, return_sequences=True),
	SimpleRNN(1)
])

model = Sequential([
	SimpleRNN(20, return_sequences=True, input_shape=(None,1)),
	SimpleRNN(20),
	Dense(1),
])
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@