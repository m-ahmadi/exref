import gym
import numpy as np
import tensorflow as tf
from tf import keras

keras.backend.clear_session()
tf.random.set_seed(42)
np.random.seed(42)

n_inputs = 4 # == env.observation_space.shape[0]

model = keras.models.Sequential([
	keras.layers.Dense(5, activation='elu', input_shape=[n_inputs]),
	keras.layers.Dense(1, activation='sigmoid'),
])