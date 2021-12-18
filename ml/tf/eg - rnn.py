from tensorflow import keras
from keras.models import Sequential
from keras.layers import SimpleRNN, LSTM, GRU, Embedding, Dense, InputLayer

''' note about rnn input
since rnn can process any number of time steps
it doesn't need to know length of input sequences (unlike other models)
that's why first input dimension is set to None
'''

model = Sequential([
	SimpleRNN(1, input_shape=(None,1)),
])

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



model = Sequential([
	Embedding(input_dim=1000, output_dim=64),
	LSTM(128),
	Dense(10),
])
model.predict( [[[0]]] ).tolist()          # [ [0,0,0,0,0,0,0,0,0,0] ]
model.predict( [ [[0]], [[0]] ] ).tolist() # [ [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0] ]

model = Sequential([
	Embedding(input_dim=1000, output_dim=64),
	GRU(256, return_sequences=True),
	SimpleRNN(128),
	Dense(10),
])