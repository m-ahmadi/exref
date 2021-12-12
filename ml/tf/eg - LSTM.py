import tensorflow as tf
from tensorflow import keras
from keras.layers import LSTM
import numpy as np

# https://www.tensorflow.org/api_docs/python/tf/keras/layers/Embedding
# https://medium.com/analytics-vidhya/understanding-embedding-layer-in-keras-bbe3ff1327ce

inputs = tf.random.normal([32, 10, 8])
lstm = LSTM(4)
output = lstm(inputs)
output.shape # [32, 4]

lstm = LSTM(4, return_sequences=True, return_state=True)
whole_seq_output, final_memory_state, final_carry_state = lstm(inputs)
whole_seq_output.shape   # [32, 10, 4]
final_memory_state.shape # [32, 4]
final_carry_state.shape  # [32, 4]
