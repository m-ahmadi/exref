import optuna # pip install optuna

optuna.create_study()
optuna.load_study()
optuna.delete_study()
optuna.copy_study()
optuna.get_all_study_summaries()
optuna.TrialPruned

trial = Trial(study, trial_id)
trial.datetime_start
trial.distributions
trial.number
trial.params
trial.system_attrs
trial.user_attrs

trial.report(value, step)
trial.set_system_attr(key, value)
trial.set_user_attr(key, value)
trial.should_prune()
trial.suggest_categorical(name, choices)
trial.suggest_discrete_uniform(name, low, high, q)
trial.suggest_float(name, low, high, *, ?step, ?log)
trial.suggest_int(name, low, high, ?step, ?log)
trial.suggest_loguniform(name, low, high)
trial.suggest_uniform(name, low, high)

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
import tensorflow as tf
from tf import keras
from keras.layers import Flatten, Dense

def objective(trial):
	n_layers = trial.suggest_int('n_layers', 1, 3)
	
	model = keras.Sequential()
	model.add(Flatten())
	
	for i in range(n_layers):
		n_units = trial.suggest_int(f'n_units_l{i}', 4, 128, log=True)
		model.add(Dense(n_units, activation='relu'))
	
	model.add(Dense(CLASSES))
	
	optimizer = keras.optimizers.Adam()
	
	accuracy = None
	
	with tf.device('/cpu:0'):
		for _ in range(EPOCHS):
			
			accuracy = tf.metrics.Accuracy('accuracy', dtype=tf.float32)
			for batch, (images, labels) in enumerate(dataset):
				with tf.GradientTape() as tape:
					logits = model(images, training=True)
					loss_value = tf.reduce_mean(
						tf.nn.sparse_softmax_cross_entropy_with_logits(logits=logits, labels=labels)
					)
					grads = tape.gradient(loss_value, model.variables)
					optimizer.apply_gradients(zip(grads, model.variables))
			
			
			accuracy = tf.metrics.Accuracy('accuracy', dtype=tf.float32)
			for batch, (images, labels) in enumerate(dataset):
				with tf.GradientTape() as tape:
					logits = model(images, training=False)
					accuracy(
						tf.argmax(logits, axis=1, output_type=tf.int64), tf.cast(labels, tf.int64)
					)
	
	return accuracy.result() # last validation accuracy


study = optuna.create_study(direction='maximize')
study.optimize(objective, n_trials=100)


print('Number of finished trials: ', len(study.trials))
print('Best trial:')
trial = study.best_trial
print('  Value: ', trial.value)
print('  Params: ')
for key, value in trial.params.items():
	print('    {}: {}'.format(key, value))