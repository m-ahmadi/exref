# is `class_weight` ok with `binary_crossentropy`?
from tensorflow import keras
from keras.layers import InputLayer, Dense
from sklearn.utils.class_weight import compute_class_weight
import numpy as np

data = [
	[ [0,1], [1] ],
	[ [1,0], [1] ],
	
	[ [0,0], [0] ],
	[ [0,0], [0] ],
	[ [1,1], [0] ],
	[ [1,1], [0] ],
	
	[ [0,0], [0] ],
	[ [0,0], [0] ],
	[ [1,1], [0] ],
	[ [1,1], [0] ],
	
	[ [0,0], [0] ],
	[ [0,0], [0] ],
	[ [1,1], [0] ],
	[ [1,1], [0] ],
	
	[ [0,0], [0] ],
	[ [0,0], [0] ],
	[ [1,1], [0] ],
	[ [1,1], [0] ],
	
]
x_train = [i[0] for i in data]
y_train = [i[1] for i in data]

model = keras.Sequential([
	InputLayer(2),
	Dense(units=8, activation='sigmoid'),
	Dense(units=1, activation='sigmoid'),
])
model.compile(optimizer=keras.optimizers.SGD(0.8), loss='binary_crossentropy')

# manual
weights = {0: 1., 1: 10.} # every instance of class 1 == 10 instances of class 0

# computed
# y_org = np.array(y_train).reshape(len(y_train))
# weights = compute_class_weight('balanced', classes=np.unique(y_train), y=y_org)

use = 0
model.fit(x_train, y_train, batch_size=1, verbose=0, epochs=100, class_weight=weights if use else None)

print(
	model.predict(  [ [0,0], [0,1], [1,0], [1,1] ]  )
)
