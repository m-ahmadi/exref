# http://neuralnetworksanddeeplearning.com/chap1.html
# https://pythonalgos.com/create-a-neural-network-from-scratch-in-python-3/
import random
import numpy as np

sizes      = [784, 30, 10] # neurons in each layer
num_layers = len(sizes)
biases     = [np.random.randn(y, 1) for y   in     sizes[1:]]
weights    = [np.random.randn(y, x) for x,y in zip(sizes[:-1], sizes[1:])]

# helpers
sigmoid       = lambda z: 1.0 / (1.0 + np.exp(-z))
sigmoid_prime = lambda z: sigmoid(z) * (1 - sigmoid(z))


def feedforward(a):
	global biases, weights
	for b, w in zip(biases, weights):
		a = sigmoid(np.dot(w, a) + b)
	return a

def evaluate(test_data):
	test_results = [(np.argmax(feedforward(x)), y) for (x, y) in test_data]
	return sum(int(y[x]) for (x, y) in test_results)

def cost_derivative(output_activations, y):
	return output_activations - y

def backprop(x, y):
	global num_layers, biases, weights
	nabla_b = [np.zeros(b.shape) for b in biases]
	nabla_w = [np.zeros(w.shape) for w in weights]
	
	# feedforward
	activation  = x
	activations = [x] # stores activations layer by layer
	zs          = []  # stores z vectors   layer by layer
	for b, w in zip(biases, weights):
		z = np.dot(w, activation) + b
		zs.append(z)
		activation = sigmoid(z)
		activations.append(activation)
	
	# backward pass
	delta = cost_derivative(activations[-1], y) * sigmoid_prime(zs[-1])
	nabla_b[-1] = delta
	nabla_w[-1] = np.dot(delta, activations[-2].transpose())
	
	for _layer in range(2, num_layers):
		z = zs[-_layer]
		sp = sigmoid_prime(z)
		delta = np.dot(weights[-_layer+1].transpose(), delta) * sp
		nabla_b[-_layer] = delta
		nabla_w[-_layer] = np.dot(delta, activations[-_layer-1].transpose())
	return (nabla_b, nabla_w)

def update_mini_batch(mini_batch, learning_rate):
	# nabla symbol represents the gradients
	global biases, weights
	nabla_b = [np.zeros(b.shape) for b in biases]
	nabla_w = [np.zeros(w.shape) for w in weights]
	for x, y in mini_batch:
		delta_nabla_b, delta_nabla_w = backprop(x, y)
		nabla_b = [nb + dnb for nb, dnb in zip(nabla_b, delta_nabla_b)]
		nabla_w = [nw + dnw for nw, dnw in zip(nabla_w, delta_nabla_w)]
	a = learning_rate / len(mini_batch)
	weights = [ w - a * nw for w, nw in zip(weights, nabla_w) ]
	biases  = [ b - a * nb for b, nb in zip(biases, nabla_b) ]

def SGD(training_data, epochs, mini_batch_size, learning_rate, test_data=None):
	training_data = list(training_data)
	samples = len(training_data)
	
	if test_data:
		test_data = list(test_data)
		n_test = len(test_data)
	
	for j in range(epochs):
		random.shuffle(training_data)
		mini_batches = [ training_data[k : k+mini_batch_size] for k in range(0, samples, mini_batch_size) ]
		for mini_batch in mini_batches:
			update_mini_batch(mini_batch, learning_rate)
		if test_data:
			print(f'Epoch {j}: {evaluate(test_data)} / {n_test}')
		else:
			print(f'Epoch {j} complete')

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# import mnist_loader
# training_data, validation_data, test_data = mnist_loader.load_data_together()
'''
training_data = [
	[ [0.], [0.], ..., 784 ],    [  [0], [0], [0], [0], [0], [1], [0], [0], [0], [0]  ], # class 6 (digit 6)
	...,
	50000
]
validation_data = [..., 10000]
test_data       = [..., 10000]
'''
training_data   = zip(np.random.rand(313600).reshape(400, 784, 1),  np.random.rand(4000).reshape(400, 10, 1))
validation_data = zip(np.random.rand(78400 ).reshape(100, 784, 1),  np.random.rand(1000).reshape(100, 10, 1))
test_data       = zip(np.random.rand(78400 ).reshape(100, 784, 1),  np.random.rand(1000).reshape(100, 10, 1))
# y = np.zeros((10,1))
# y[ np.random.randint(0,10) ] = 1.0

SGD(training_data, epochs=10, mini_batch_size=10, learning_rate=3.0, test_data=test_data)