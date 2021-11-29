from tensorflow import keras
from tensorflow.keras.layers import InputLayer, Conv2D, MaxPooling2D, Flatten, Dense
import matplotlib.pyplot as plt
import numpy as np

# download & prepare cifar10 dataset
(train_images, train_labels), (test_images, test_labels) = keras.datasets.cifar10.load_data()
train_images, test_images = train_images / 255.0, test_images / 255.0 # normalize pixel values to be between 0 and 1

# verify the data
class_names = ['airplane', 'automobile', 'bird', 'cat', 'deer', 'dog', 'frog', 'horse', 'ship', 'truck']

plt.figure(figsize=(10,10))
for i in range(25):
	plt.subplot(5,5,i+1)
	plt.xticks([])
	plt.yticks([])
	plt.grid(False)
	plt.imshow(train_images[i])
	plt.xlabel(class_names[train_labels[i][0]]) # cifar labels happen to be arrays, which is why you need the extra index
plt.show()

train = 0

if train == 1:
	model = keras.models.Sequential([
		InputLayer(input_shape=(32,32,3)),
		
		# create convolutional base
		Conv2D(32, (3,3), activation='relu'),
		MaxPooling2D((2,2)),
		Conv2D(64, (3,3), activation='relu'),
		MaxPooling2D((2,2)),
		Conv2D(64, (3,3), activation='relu'),
		
		# add Dense layers on top
		Flatten(),
		Dense(64, activation='relu'),
		Dense(10)
	])

	model.summary()
	model.compile(optimizer='adam', loss=keras.losses.SparseCategoricalCrossentropy(from_logits=True), metrics=['accuracy'])
	
	history = model.fit(train_images, train_labels, epochs=10, validation_data=(test_images, test_labels))
	model.save('mymodel')
	
	# evaluate the model
	plt.plot(history.history['accuracy'], label='accuracy')
	plt.plot(history.history['val_accuracy'], label = 'val_accuracy')
	plt.xlabel('Epoch')
	plt.ylabel('Accuracy')
	plt.ylim([0.5, 1])
	plt.legend(loc='lower right')
	plt.show()
else:
	model = keras.models.load_model('mymodel')


test_loss, test_acc = model.evaluate(test_images,  test_labels, verbose=2)

print(test_acc)

print(
	'predict `test_images[0]`:  ',
	class_names[ model.predict( np.array([ test_images[0] ]) ).argmax() ]
)

# predict more images from test set
plt.figure(figsize=(6,7))
plt.suptitle('predictions')
for i in range(12):
	pred = model.predict( np.array([ test_images[i] ]) ).argmax()
	plt.subplot(4,3,i+1)
	plt.xticks([])
	plt.yticks([])
	plt.grid(False)
	plt.imshow(test_images[i])
	plt.xlabel(class_names[pred])
plt.show()