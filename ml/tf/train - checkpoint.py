from tensorflow import keras
from keras.callbacks import ModelCheckpoint

model = ...
model.compile(loss=..., optimizer=..., metrics=['accuracy'])

checkpoint = ModelCheckpoint(filepath='./mycheckpoint', monitor='val_accuracy', mode='max', save_weights_only=True, save_best_only=True)

model.fit(epochs=10, callbacks=[checkpoint]) # at `on_epoch_end` weights are saved only if best seen so far

model.load_weights(checkpoint_filepath)      # best weights loaded into model
