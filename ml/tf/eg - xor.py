from tensorflow import keras
from keras.layers import InputLayer, Dense

data = [
	[ [0,0], [0] ],
	[ [0,1], [1] ],
	[ [1,0], [1] ],
	[ [1,1], [0] ],
]
x_train = [i[0] for i in data]
y_train = [i[1] for i in data]

model = keras.Sequential([
	InputLayer(2),
	Dense(units=8, activation='sigmoid'),
	Dense(units=1, activation='sigmoid'),
])
model.compile(optimizer=keras.optimizers.SGD(0.6), loss='mean_squared_error')

model.fit(x_train, y_train, batch_size=1, epochs=500)

print(
	model.predict(  [ [0,0], [0,1], [1,0], [1,1] ]  )
)

# epochs=5000
# [[0.00967437]
#  [0.9890412 ]
#  [0.9873526 ]
#  [0.01406878]]

# epochs=2000
# [[0.01678675]
#  [0.9773652 ]
#  [0.97801757]
#  [0.02806094]]

# epochs=1000
# [[0.02998796]
#  [0.9620552 ]
#  [0.96210206]
#  [0.04572105]]

# epochs=500
# [[0.06903324]
#  [0.92540336]
#  [0.9277877 ]
#  [0.08742997]]