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