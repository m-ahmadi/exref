from tensorflow import keras
from keras.models import Sequential
from keras.layers import GRU, Embedding, SimpleRNN, Dense

model = Sequential([
	Embedding(input_dim=1000, output_dim=64),
	GRU(256, return_sequences=True),
	SimpleRNN(128),
	Dense(10),
])