# scatter plot of blobs dataset
from sklearn.datasets import make_blobs
from matplotlib import pyplot
from pandas import DataFrame

X, y = make_blobs(n_samples=1000, centers=3, n_features=2, cluster_std=2, random_state=2) # generate 2d classification dataset

# scatter plot, dots colored by class value
df = DataFrame(dict(x=X[:,0], y=X[:,1], label=y))
colors = {0:'red', 1:'blue', 2:'green'}
fig, ax = pyplot.subplots()
grouped = df.groupby('label')
for key, group in grouped:
    group.plot(ax=ax, kind='scatter', x='x', y='y', label=key, color=colors[key])
pyplot.show()

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# develop an mlp for blobs dataset
from sklearn.datasets import make_blobs
from tensorflow.keras.utils import to_categorical
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from matplotlib import pyplot

X, y = make_blobs(n_samples=1100, centers=3, n_features=2, cluster_std=2, random_state=2) # generate 2d classification dataset
y = to_categorical(y) # one hot encode output variable

# split into train and test
n_train = 100
trainX, testX = X[:n_train, :], X[n_train:, :]
trainy, testy = y[:n_train], y[n_train:]
print(trainX.shape, testX.shape)

# define model
model = Sequential()
model.add(Dense(25, input_dim=2, activation='relu'))
model.add(Dense(3, activation='softmax'))
model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])

history = model.fit(trainX, trainy, validation_data=(testX, testy), epochs=500, verbose=0) # fit model

# evaluate the model
_, train_acc = model.evaluate(trainX, trainy, verbose=0)
_, test_acc = model.evaluate(testX, testy, verbose=0)
print('Train: %.3f, Test: %.3f' % (train_acc, test_acc))

# learning curves of model accuracy
pyplot.plot(history.history['accuracy'], label='train')
pyplot.plot(history.history['val_accuracy'], label='test')
pyplot.legend()
pyplot.show()
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# example of saving sub-models for later use in a stacking ensemble
from sklearn.datasets import make_blobs
from tensorflow.keras.utils import to_categorical
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from matplotlib import pyplot
from os import makedirs

def fit_model(trainX, trainy): # fit model on dataset
	model = Sequential()
	model.add(Dense(25, input_dim=2, activation='relu'))
	model.add(Dense(3, activation='softmax'))
	model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])
	model.fit(trainX, trainy, epochs=500, verbose=0)
	return model

X, y = make_blobs(n_samples=1100, centers=3, n_features=2, cluster_std=2, random_state=2) # generate 2d classification dataset
y = to_categorical(y) # one hot encode output variable

# split into train and test
n_train = 100
trainX, testX = X[:n_train, :], X[n_train:, :]
trainy, testy = y[:n_train], y[n_train:]
print(trainX.shape, testX.shape)

makedirs('models') # create directory for models

# fit and save models
n_members = 5
for i in range(n_members):
	model = fit_model(trainX, trainy)
	filename = 'models/model_' + str(i + 1) + '.h5'
	model.save(filename)
	print('&gt;Saved %s' % filename)
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# stacked generalization with linear meta model on blobs dataset (separate stacking model)
from sklearn.datasets import make_blobs
from sklearn.metrics import accuracy_score
from sklearn.linear_model import LogisticRegression
from tensorflow.keras.models import load_model
from tensorflow.keras.utils import to_categorical
from numpy import dstack

# load models from file
def load_all_models(n_models):
	all_models = list()
	for i in range(n_models):
		filename = 'models/model_' + str(i + 1) + '.h5'
		model = load_model(filename)
		all_models.append(model)
		print('&gt;loaded %s' % filename)
	return all_models

# create stacked model input dataset as outputs from the ensemble
def stacked_dataset(members, inputX):
	stackX = None
	for model in members:
		yhat = model.predict(inputX, verbose=0)
		if stackX is None: # stack predictions into [rows, members, probabilities]
			stackX = yhat
		else:
			stackX = dstack((stackX, yhat))
	
	stackX = stackX.reshape((stackX.shape[0], stackX.shape[1]*stackX.shape[2])) # flatten predictions to [rows, members x probabilities]
	return stackX

# fit a model based on the outputs from the ensemble members
def fit_stacked_model(members, inputX, inputy):
	stackedX = stacked_dataset(members, inputX) # create dataset using ensemble
	model = LogisticRegression() # fit standalone model
	model.fit(stackedX, inputy)
	return model

# make a prediction with the stacked model
def stacked_prediction(members, model, inputX):
	stackedX = stacked_dataset(members, inputX) # create dataset using ensemble
	yhat = model.predict(stackedX) # make a prediction
	return yhat

X, y = make_blobs(n_samples=1100, centers=3, n_features=2, cluster_std=2, random_state=2) # generate 2d classification dataset

# split into train and test
n_train = 100
trainX, testX = X[:n_train, :], X[n_train:, :]
trainy, testy = y[:n_train], y[n_train:]
print(trainX.shape, testX.shape)

# load all models
n_members = 5
members = load_all_models(n_members)
print('Loaded %d models' % len(members))

# evaluate standalone models on test dataset
for model in members:
	testy_enc = to_categorical(testy)
	_, acc = model.evaluate(testX, testy_enc, verbose=0)
	print('Model Accuracy: %.3f' % acc)

# fit stacked model using the ensemble
model = fit_stacked_model(members, testX, testy)

# evaluate model on test set
yhat = stacked_prediction(members, model, testX)
acc = accuracy_score(testy, yhat)
print('Stacked Test Accuracy: %.3f' % acc)
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# integrated stacking model
from sklearn.datasets import make_blobs
from sklearn.metrics import accuracy_score
from tensorflow.keras.models import load_model
from tensorflow.keras.utils import to_categorical
from tensorflow.keras.utils import plot_model
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Input
from tensorflow.keras.layers import Dense
from tensorflow.keras.layers.merge import concatenate
from numpy import argmax

# load models from file
def load_all_models(n_models):
	all_models = list()
	for i in range(n_models):
		filename = 'models/model_' + str(i + 1) + '.h5'
		model = load_model(filename)
		all_models.append(model)
		print('&gt;loaded %s' % filename)
	return all_models

# define stacked model from multiple member input models
def define_stacked_model(members):
	for i in range(len(members)): # update all layers in all models to not be trainable
		model = members[i]
		for layer in model.layers:
			layer.trainable = False
			layer._name = 'ensemble_' + str(i+1) + '_' + layer.name # avoid 'unique layer name' issue
	
	ensemble_visible = [model.input for model in members]  # define multi-headed input
	ensemble_outputs = [model.output for model in members] # concatenate merge output from each model
	merge = concatenate(ensemble_outputs)
	hidden = Dense(10, activation='relu')(merge)
	output = Dense(3, activation='softmax')(hidden)
	model = Model(inputs=ensemble_visible, outputs=output)
	plot_model(model, show_shapes=True, to_file='model_graph.png') # plot graph of ensemble
	model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy']) # compile
	return model

# fit a stacked model
def fit_stacked_model(model, inputX, inputy):
	X = [inputX for _ in range(len(model.input))] # prepare input data
	inputy_enc = to_categorical(inputy)           # encode output data
	model.fit(X, inputy_enc, epochs=300, verbose=0)

# make a prediction with a stacked model
def predict_stacked_model(model, inputX):
	X = [inputX for _ in range(len(model.input))] # prepare input data
	return model.predict(X, verbose=0)


X, y = make_blobs(n_samples=1100, centers=3, n_features=2, cluster_std=2, random_state=2) # generate 2d classification dataset

# split into train and test
n_train = 100 
trainX, testX = X[:n_train, :], X[n_train:, :]
trainy, testy = y[:n_train], y[n_train:]
print(trainX.shape, testX.shape)

# load all models
n_members = 5
members = load_all_models(n_members)
print('Loaded %d models' % len(members))

# define ensemble model
stacked_model = define_stacked_model(members)

# fit stacked model on test dataset
fit_stacked_model(stacked_model, testX, testy)

# make predictions and evaluate
yhat = predict_stacked_model(stacked_model, testX)
yhat = argmax(yhat, axis=1)
acc = accuracy_score(testy, yhat)
print('Stacked Test Accuracy: %.3f' % acc)
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@