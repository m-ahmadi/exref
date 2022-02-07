from tensorflow import keras
from keras.layers import Embedding
import numpy as np

# https://www.tensorflow.org/api_docs/python/tf/keras/layers/Embedding
# https://medium.com/analytics-vidhya/understanding-embedding-layer-in-keras-bbe3ff1327ce

model = keras.models.Sequential([
	Embedding(input_dim=8, output_dim=2)
])
model.compile('adam', 'mse')
model.predict([0])   # [ [-0.03006601, -0.02409109] ]
model.predict([0,1]) # [ [-0.03006601, -0.02409109], [-0.01020784, -0.00353746] ]


embd = Embedding(input_dim=8, output_dim=2)
embd(np.array([0])).numpy()   # [ [0.0439852 , 0.04650558] ]
embd(np.array([0,1])).numpy() # [ [0.0439852 , 0.04650558], [-0.031122 , -0.02714368] ]
embd(np.array([8])).numpy()   # err


words = np.array(['nice', 'to', 'see', 'you', 'again', 'hope', 'soon'])
embd = Embedding(input_dim=len(words), output_dim=2, input_length=5)
words[[0,1,2,3,4]] # ['nice', 'to', 'see', 'you', 'again']
words[[5,1,2,3,6]] # ['hope', 'to', 'see', 'you', 'soon']
'''
	index    Embedding
	0        [1.2, 3.1]
	1        [0.1, 4.2]
	2        [1.0, 3.1]
	3        [0.3, 2.1]
	4        [2.2, 1.4]
	5        [0.7, 1.7]
	6        [4.1, 2.0]
'''