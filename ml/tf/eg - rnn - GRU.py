
model = Sequential([
	Embedding(input_dim=1000, output_dim=64),
	GRU(256, return_sequences=True),
	SimpleRNN(128),
	Dense(10),
])