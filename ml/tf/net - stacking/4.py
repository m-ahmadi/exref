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