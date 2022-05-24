import tensorflow as tf
import optuna # pip install optuna


def objective(trial):
	n_layers = trial.suggest_int('n_layers', 1, 3)
	model = tf.keras.Sequential()
	model.add(tf.keras.layers.Flatten())
	for i in range(n_layers):
		num_hidden = trial.suggest_int(f'n_units_l{i}', 4, 128, log=True)
		model.add(tf.keras.layers.Dense(num_hidden, activation='relu'))
	model.add(tf.keras.layers.Dense(CLASSES))
	...
	
	return accuracy

study = optuna.create_study(direction='maximize')
study.optimize(objective, n_trials=100)