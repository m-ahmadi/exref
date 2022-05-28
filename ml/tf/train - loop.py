import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import numpy as np

inputs = keras.Input(shape=(784,), name='digits')
x1 = layers.Dense(64, activation='relu')(inputs)
x2 = layers.Dense(64, activation='relu')(x1)
outputs = layers.Dense(10, name='predictions')(x2)
model = keras.Model(inputs=inputs, outputs=outputs)

(x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()
x_train = np.reshape(x_train, (-1, 784))
x_test = np.reshape(x_test, (-1, 784))

x_train, y_train = x_train[:-10000], y_train[:-10000]
x_val, y_val     = x_train[-10000:], y_train[-10000:]

BATCH_SIZE = 64
EPOCHS = 20

train_dataset = tf.data.Dataset.from_tensor_slices((x_train, y_train))
train_dataset = train_dataset.shuffle(buffer_size=1024).batch(BATCH_SIZE)
val_dataset   = tf.data.Dataset.from_tensor_slices((x_val, y_val))
val_dataset   = val_dataset.batch(BATCH_SIZE)

optimizer        = keras.optimizers.SGD(learning_rate=0.001)
loss_fn          = keras.losses.SparseCategoricalCrossentropy(from_logits=True)
train_acc_metric = keras.metrics.SparseCategoricalAccuracy()
val_acc_metric   = keras.metrics.SparseCategoricalAccuracy()

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# eager execution
for epoch in range(EPOCHS):
	for step, (x_batch_train, y_batch_train) in enumerate(train_dataset):
		with tf.GradientTape() as tape:
			logits = model(x_batch_train, training=True)
			loss_value = loss_fn(y_batch_train, logits)
		grads = tape.gradient(loss_value, model.trainable_weights)
		optimizer.apply_gradients(zip(grads, model.trainable_weights))
		train_acc_metric.update_state(y_batch_train, logits)
	train_acc = train_acc_metric.result()
	print('train_accuracy', float(train_acc))
	train_acc_metric.reset_states()
	
	for x_batch_val, y_batch_val in val_dataset:
		val_logits = model(x_batch_val, training=False)
		val_acc_metric.update_state(y_batch_val, val_logits)
	val_acc = val_acc_metric.result()
	print('val_accuracy', float(val_acc), '\n')
	val_acc_metric.reset_states()
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# graph execution
@tf.function
def train_step(x, y):
	with tf.GradientTape() as tape:
		logits = model(x, training=True)
		loss_value = loss_fn(y, logits)
	grads = tape.gradient(loss_value, model.trainable_weights)
	optimizer.apply_gradients(zip(grads, model.trainable_weights))
	train_acc_metric.update_state(y, logits)
	return loss_value

@tf.function
def test_step(x, y):
	val_logits = model(x, training=False)
	val_acc_metric.update_state(y, val_logits)

for epoch in range(EPOCHS):
	for step, (x_batch_train, y_batch_train) in enumerate(train_dataset):
		loss_value = train_step(x_batch_train, y_batch_train)
	
	train_acc = train_acc_metric.result()
	print('train_accuracy', float(train_acc))
	train_acc_metric.reset_states()
	
	for x_batch_val, y_batch_val in val_dataset:
		test_step(x_batch_val, y_batch_val)
	val_acc = val_acc_metric.result()
	val_acc_metric.reset_states()
	print('val_accuracy', float(val_acc), '\n')
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

pred = model.predict(x_test[0:1]).tolist()[0]
pred = pred.index(np.max(pred))
print(f'''
pred: {pred}
true: {y_test[0]}
''')