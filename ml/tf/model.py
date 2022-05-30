import tensorflow as tf
from tensorflow import keras
from keras import Input, Model
from keras.layers import Dense

input = Input(shape=[2])
dense = Dense(4, activation=tf.nn.relu)(input)
output = Dense(1, activation=tf.nn.softmax)(dense)
model = Model(input, output)


class MyModel(Model):
  def __init__(self):
    super().__init__()
    self.dense1 = Dense(4, activation=tf.nn.relu)
    self.dense2 = Dense(5, activation=tf.nn.softmax)
  def call(self, inputs):
    x = self.dense1(inputs)
    return self.dense2(x)
model = MyModel()