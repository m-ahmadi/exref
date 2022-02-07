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