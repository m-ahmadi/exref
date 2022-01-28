import tensorflowjs as tfjs

model = keras.models.Sequential()
...
model.compile(...)
model.fit(...)

tfjs.converters.save_keras_model(model, tfjs_target_dir)