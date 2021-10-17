import tensorflow as tf

model = tf.keras.Sequential(layers=None|[], name=None)

model.compile(optimizer='rmsprop', loss=None, metrics=None, loss_weights=None, weighted_metrics=None, run_eagerly=None, steps_per_execution=None, **kwargs)
model.compile(optimizer='sgd', loss='mse')

model.fit(
	x=None | arr<numpy> | list< arr<numpy> > | {'input':[]|Tensor} | tf.data | Sequence | DatasetCreator | ParameterServerStrategy,
	y=None | ...,
	batch_size=None, epochs=1, verbose=1|0|2|'auto',
	callbacks=None, validation_split=0.0, validation_data=None, shuffle=True,
	class_weight=None, sample_weight=None, initial_epoch=0, steps_per_epoch=None,
	validation_steps=None, validation_batch_size=None, validation_freq=1,
	max_queue_size=10, workers=1, use_multiprocessing=False
)

model.predict(x, batch_size=None, verbose=0, steps=None, callbacks=None, max_queue_size=10, workers=1, use_multiprocessing=False)

model.save(filepath='', overwrite=True, include_optimizer=True, save_format=None, signatures=None, options=None, save_traces=True)
json_string = model.to_json(**kwargs)

model.summary()

tf.keras.models.model_from_json(json_string='', custom_objects=None)
tf.keras.models.load_model(filepath='', custom_objects=None, compile=True, options=None)
tf.keras.models.save_model(model, filepath, overwrite=True, include_optimizer=True, save_format=None, signatures=None, options=None, save_traces=True)

tf.saved_model.save(obj=tf.Module|tf.train.Checkpoint, export_dir='', signatures=None, options=None)

tf.keras.layers.Dense(
	units=positive_integer, activation=None, use_bias=True,
	kernel_initializer='glorot_uniform',
	bias_initializer='zeros', kernel_regularizer=None,
	bias_regularizer=None, activity_regularizer=None, kernel_constraint=None,
	bias_constraint=None, **kwargs
)
tf.keras.layers.Dense(8, input_shape=(16,)) # kwarg `input_shape` implicitly creates an input layer to insert before the current layer (same as explicitly define `InputLayer`)

tf.keras.layers.Flatten(data_format=None, **kwargs)

tf.keras.layers.InputLayer(
    input_shape=(int,..)|TensorShape, batch_size=None, dtype=None, ?input_tensor=None, sparse=False,
    ?name='', ragged=False, type_spec=None, **kwargs
)


tf.function(
    func=None, input_signature=None, autograph=True, jit_compile=None,
    experimental_implements=None, experimental_autograph_options=None,
    experimental_relax_shapes=False, experimental_follow_type_hints=None
) -> tf.types.experimental.GenericFunction

tf.int32 is tf.dtypes.int32 # True

tf.TensorSpec(shape=TensorShape, dtype=tf.float32, name=None)
tf.TensorShape(dims=[int,..]|None)
tf.constant(value=num|[], dtype=None|''|tf.float32..., shape=None|(int,..), name='Const')
tf.zeros(shape=list<int> | tuple<int> | Tensor1D<int32>, dtype=tf.float32, ?name=None|'')