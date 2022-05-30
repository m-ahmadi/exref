'''
optimize:
	validation accuracy
	network architecture and optimizer config
(tf eager execution)
'''
import tensorflow as tf
from tensorflow import keras
from keras.layers import Flatten, Dense
from keras.datasets import mnist
import optuna

N_TRAIN_EXAMPLES = 3000
N_VALID_EXAMPLES = 1000
BATCHSIZE = 128
CLASSES = 10
EPOCHS = 1

def main():
	study = optuna.create_study(direction='maximize')
	study.optimize(objective, n_trials=100)

	print('Number of finished trials: ', len(study.trials))

	print('Best trial:')
	trial = study.best_trial

	print('  Value: ', trial.value)

	print('  Params: ')
	for key, value in trial.params.items():
		print('    {}: {}'.format(key, value))

def objective(trial):
	train_ds, valid_ds = get_mnist() # get mnist data

	# build model and optimizer
	model = create_model(trial)
	optimizer = create_optimizer(trial)

	# training and validating cycle
	with tf.device('/cpu:0'):
		for _ in range(EPOCHS):
			learn(model, optimizer, train_ds, 'train')
		
		accuracy = learn(model, optimizer, valid_ds, 'eval')
	
	return accuracy.result() # last validation accuracy

def create_model(trial):
	# we optimize the numbers of layers, their units and weight decay parameter
	n_layers = trial.suggest_int('n_layers', 1, 3)
	weight_decay = trial.suggest_float('weight_decay', 1e-10, 1e-3, log=True)
	model = keras.models.Sequential()
	model.add(Flatten())
	for i in range(n_layers):
		num_hidden = trial.suggest_int('n_units_l{}'.format(i), 4, 128, log=True)
		model.add(
			Dense(
				num_hidden,
				activation='relu',
				kernel_regularizer=keras.regularizers.l2(weight_decay),
			)
		)
	model.add(
		Dense(CLASSES, kernel_regularizer=keras.regularizers.l2(weight_decay))
	)
	return model

def learn(model, optimizer, dataset, mode='eval'):
	accuracy = keras.metrics.Accuracy('accuracy', dtype=tf.float32)

	for batch, (images, labels) in enumerate(dataset):
		with tf.GradientTape() as tape:
			logits = model(images, training=(mode == 'train'))
			loss_value = tf.reduce_mean(
				tf.nn.sparse_softmax_cross_entropy_with_logits(logits=logits, labels=labels)
			)
			if mode == 'eval':
				accuracy(
					tf.argmax(logits, axis=1, output_type=tf.int64), tf.cast(labels, tf.int64)
				)
			else:
				grads = tape.gradient(loss_value, model.variables)
				optimizer.apply_gradients(zip(grads, model.variables))

	if mode == 'eval':
		return accuracy

def create_optimizer(trial):
	# we optimize the choice of optimizers as well as their parameters
	optimizer_options = ['RMSprop', 'Adam', 'SGD']
	optimizer_selected = trial.suggest_categorical('optimizer', optimizer_options)
	
	k = {}
	if optimizer_selected == 'RMSprop':
		k['learning_rate'] = trial.suggest_float('rmsprop_learning_rate', 0.00001, 0.1, log=True)
		k['decay']         = trial.suggest_float('rmsprop_decay', 0.85, 0.99)
		k['momentum']      = trial.suggest_float('rmsprop_momentum', 0.00001, 0.1, log=True)
	elif optimizer_selected == 'Adam':
		k['learning_rate'] = trial.suggest_float('adam_learning_rate', 0.00001, 0.1, log=True)
	elif optimizer_selected == 'SGD':
		k['learning_rate'] = trial.suggest_float('sgd_opt_learning_rate', 0.00001, 0.1, log=True)
		k['momentum']      = trial.suggest_float('sgd_opt_momentum', 0.00001, 0.1, log=True)

	optimizer = getattr(keras.optimizers, optimizer_selected)(**k)
	return optimizer

def get_mnist():
	(x_train, y_train), (x_valid, y_valid) = mnist.load_data()
	x_train = x_train.astype('float32') / 255
	x_valid = x_valid.astype('float32') / 255

	y_train = y_train.astype('int32')
	y_valid = y_valid.astype('int32')

	train_ds = tf.data.Dataset.from_tensor_slices((x_train, y_train))
	train_ds = train_ds.shuffle(60000).batch(BATCHSIZE).take(N_TRAIN_EXAMPLES)

	valid_ds = tf.data.Dataset.from_tensor_slices((x_valid, y_valid))
	valid_ds = valid_ds.shuffle(10000).batch(BATCHSIZE).take(N_VALID_EXAMPLES)
	return train_ds, valid_ds

main()