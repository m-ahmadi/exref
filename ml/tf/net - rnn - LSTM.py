import tensorflow as tf
from tensorflow import keras
from keras.models import Sequential
from keras.layers import LSTM, Embedding, Dense
import numpy as np

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
inputs = tf.random.normal([32, 10, 8])
lstm = LSTM(4)
output = lstm(inputs)
output.shape # [32, 4]

lstm = LSTM(4, return_sequences=True, return_state=True)
whole_seq_output, final_memory_state, final_carry_state = lstm(inputs)
whole_seq_output.shape   # [32, 10, 4]
final_memory_state.shape # [32, 4]
final_carry_state.shape  # [32, 4]
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# not tested
x_train = np.random.normal(0, 0.1, (20,5,1))
y_train = np.random.randint(0, 2, (20,1))

model = Sequential([
	LSTM(1, input_shape=(None,1)),
])

model = Sequential([
	LSTM(20, return_sequences=True, input_shape=(None,1)),
	LSTM(20, return_sequences=True),
	LSTM(1)
])

model = Sequential([
	LSTM(20, return_sequences=True, input_shape=(None,1)),
	LSTM(20),
	Dense(1),
])

model.compile('adam', 'mse')
model.fit(x_train, y_train, epochs=500)
print(model.predict(x_train))
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# not tested
# general-purpose `RNN` layer

from keras.layers import RNN, LSTMCell

model = Sequential([
	RNN(LSTMCell(20), return_sequences=True, input_shape=(None,1)),
	RNN(LSTMCell(20), return_sequences=True),
	TimeDistributed(Dense(10))
])
# same as:
model = Sequential([
	LSTM(20, return_sequences=True, input_shape=(None,1)),
	LSTM(20, return_sequences=True),
	TimeDistributed(Dense(10))
])
# use `LSTM` since it's optimized on gpu
# use `RNN` when you define custom cells
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# not tested
# https://www.tensorflow.org/api_docs/python/tf/keras/layers/Embedding
# https://medium.com/analytics-vidhya/understanding-embedding-layer-in-keras-bbe3ff1327ce

model = Sequential([
	Embedding(input_dim=1000, output_dim=64),
	LSTM(128),
	Dense(10),
])
model.predict( [[[0]]] ).tolist()          # [ [0,0,0,0,0,0,0,0,0,0] ]
model.predict( [ [[0]], [[0]] ] ).tolist() # [ [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0] ]
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@