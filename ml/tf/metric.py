from tensorflow import keras

model = ...
metrics = [
	keras.metrics.FalsePositives(thresholds=0.95, name='fp'),
	keras.metrics.FalseNegatives(thresholds=0.95, name='fn'), 
	keras.metrics.TruePositives(thresholds=0.95, name='tp'),
	keras.metrics.TrueNegatives(thresholds=0.95, name='tn'),
	keras.metrics.SensitivityAtSpecificity(0.9),
]
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=metrics)


y_true = [[1], [1], [0], [0]]
y_pred = [[1], [1], [0], [0]]
m = keras.metrics.binary_accuracy(y_true, y_pred, threshold=0.5)
m.numpy() # [1, 1, 1, 1]
