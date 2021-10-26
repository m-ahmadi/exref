import tensorflow as tf

model = tf.keras.Sequential(layers=None|[], name=None)

model.compile(optimizer='rmsprop', loss=None|fn|''|Loss, metrics=None, loss_weights=None, weighted_metrics=None, run_eagerly=None, steps_per_execution=None, **kwargs)
model.compile(optimizer='sgd', loss='mse')

h = model.fit(
	x=None | arr<numpy> | list< arr<numpy> > | {'input':[]|Tensor} | tf.data | Sequence | DatasetCreator | ParameterServerStrategy,
	y=None | ...,
	batch_size=None, epochs=1, verbose=1|0|2|'auto',
	callbacks=None, validation_split=0.0, validation_data=None, shuffle=True,
	class_weight=None, sample_weight=None, initial_epoch=0, steps_per_epoch=None,
	validation_steps=None, validation_batch_size=None, validation_freq=1,
	max_queue_size=10, workers=1, use_multiprocessing=False
)
h.history['loss'][-1] # last loss

model.predict(x, batch_size=None, verbose=0, steps=None, callbacks=None, max_queue_size=10, workers=1, use_multiprocessing=False)

model.save(filepath='', overwrite=True, include_optimizer=True, save_format=None, signatures=None, options=None, save_traces=True)
json_string = model.to_json(**kwargs)

model.summary()

model.evaluate(
	x=None, y=None, batch_size=None, verbose=1, sample_weight=None, steps=None,
	callbacks=None, max_queue_size=10, workers=1, use_multiprocessing=False,
	return_dict=False, **kwargs
)

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

tf.keras.losses.
	BinaryCrossentropy(from_logits=False, label_smoothing=0, axis=-1, reduction=losses_utils.ReductionV2.AUTO, name='binary_crossentropy')
	CategoricalCrossentropy(from_logits=False, label_smoothing=0, axis=-1, reduction=losses_utils.ReductionV2.AUTO, name='categorical_crossentropy')
	CategoricalHinge(reduction=losses_utils.ReductionV2.AUTO, name='categorical_hinge')
	CosineSimilarity(axis=-1, reduction=losses_utils.ReductionV2.AUTO, name='cosine_similarity')
	Hinge(reduction=losses_utils.ReductionV2.AUTO, name='hinge')
	Huber(delta=1.0, reduction=losses_utils.ReductionV2.AUTO, name='huber_loss')
	KLDivergence(reduction=losses_utils.ReductionV2.AUTO, name='kl_divergence')
	LogCosh(reduction=losses_utils.ReductionV2.AUTO, name='log_cosh')
	Loss(reduction=losses_utils.ReductionV2.AUTO, name=None)
	MeanAbsoluteError(reduction=losses_utils.ReductionV2.AUTO, name='mean_absolute_error')
	MeanAbsolutePercentageError(reduction=losses_utils.ReductionV2.AUTO, name='mean_absolute_percentage_error')
	MeanSquaredError(reduction=losses_utils.ReductionV2.AUTO, name='mean_squared_error')
	MeanSquaredLogarithmicError(reduction=losses_utils.ReductionV2.AUTO, name='mean_squared_logarithmic_error')
	Poisson(reduction=losses_utils.ReductionV2.AUTO, name='poisson')
	SparseCategoricalCrossentropy(from_logits=False, reduction=losses_utils.ReductionV2.AUTO, name='sparse_categorical_crossentropy')
	SquaredHinge(reduction=losses_utils.ReductionV2.AUTO, name='squared_hinge')

tf.keras.optimizers.
	Adadelta(learning_rate=0.001, rho=0.95, epsilon=1e-07, name='Adadelta', **kwargs)
	Adagrad(learning_rate=0.001, initial_accumulator_value=0.1, epsilon=1e-07, name='Adagrad', **kwargs)
	Adam(learning_rate=0.001, beta_1=0.9, beta_2=0.999, epsilon=1e-07, amsgrad=False, name='Adam', **kwargs)
	Adamax(learning_rate=0.001, beta_1=0.9, beta_2=0.999, epsilon=1e-07, name='Adamax', **kwargs )
	Ftrl(learning_rate=0.001, learning_rate_power=-0.5, initial_accumulator_value=0.1,
		l1_regularization_strength=0.0, l2_regularization_strength=0.0,
		name='Ftrl', l2_shrinkage_regularization_strength=0.0, beta=0.0, **kwargs)
	Nadam(learning_rate=0.001, beta_1=0.9, beta_2=0.999, epsilon=1e-07, name='Nadam', **kwargs)
	Optimizer(name, gradient_aggregator=None, gradient_transformers=None, **kwargs)
	RMSprop(learning_rate=0.001, rho=0.9, momentum=0.0, epsilon=1e-07, centered=False, name='RMSprop', **kwargs)
	SGD(learning_rate=0.01, momentum=0.0, nesterov=False, name='SGD', **kwargs)

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