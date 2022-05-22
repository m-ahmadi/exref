import tensorflow as tf

model = tf.keras.Sequential(layers=None|[], name=None)
model.compile(optimizer='sgd', loss='mse')
model.layers[0].input.shape
model.summary()
history = model.fit(...)
history.history['loss'][-1] # last loss
loss_and_metrics = model.evaluate(...)
preds = model.predict(...)
model.save(...)
json_string = model.to_json(**kwargs)

tf.keras.models.
	load_model(filepath='', custom_objects=None, compile=True, options=None)
	save_model(model, filepath, overwrite=True, include_optimizer=True, save_format=None, signatures=None, options=None, save_traces=True)
	model_from_json(json_string='', custom_objects=None)

tf.saved_model.save(obj=tf.Module|tf.train.Checkpoint, export_dir='', signatures=None, options=None)

tf.keras.
	Model(*args, **kwargs) <- Layer, Module
		.compile(optimizer='rmsprop', loss=None|fn|''|Loss, metrics=None, loss_weights=None, weighted_metrics=None, run_eagerly=None, steps_per_execution=None, **kwargs)
		.fit(
			x=None | arr<numpy> | list< arr<numpy> > | {'input':[]|Tensor} | tf.data | Sequence | DatasetCreator | ParameterServerStrategy,
			y=None | ...,
			batch_size=None, epochs=1, verbose=1|0|2|'auto',
			callbacks=None, validation_split=0.0, validation_data=None, shuffle=True|'batch',
			class_weight=None, sample_weight=None, initial_epoch=0, steps_per_epoch=None,
			validation_steps=None, validation_batch_size=None, validation_freq=1,
			max_queue_size=10, workers=1, use_multiprocessing=False
		)
		.evaluate(x=None, y=None, batch_size=None, verbose=1, sample_weight=None, steps=None, callbacks=None, max_queue_size=10, workers=1, use_multiprocessing=False, return_dict=False, **kwargs)
		.predict(x, batch_size=None, verbose=0, steps=None, callbacks=None, max_queue_size=10, workers=1, use_multiprocessing=False)
		.save(filepath='', overwrite=True, include_optimizer=True, save_format=None, signatures=None, options=None, save_traces=True)
	Input(shape=None, batch_size=None, name=None, dtype=None, sparse=None, tensor=None, ragged=None, type_spec=None, **kwargs)
	Sequential(layers=None, name=None) <- Model, Layer, Module
	
tf.keras.layers.
	Layer(trainable=True, name=None, dtype=None, dynamic=False, **kwargs)
		class MyLayer(Layer):
			def __init__():
			def add_loss(losses, **kwargs):
			def add_metric(value, name=None, **kwargs):
			def add_weight(name=None, shape=None, ..., **kwargs)
			def get_weights():
			def set_weights(weights):
			...
	Dense(
		units=+0, activation=None, use_bias=True,
		kernel_initializer='glorot_uniform', bias_initializer='zeros',
		kernel_regularizer=None, bias_regularizer=None, activity_regularizer=None,
		kernel_constraint=None, bias_constraint=None, **kwargs)
	Dense(8, input_shape=(16,)) # kwarg `input_shape` implicitly creates an input layer to insert before the current layer (same as explicitly define `InputLayer`)
	
	Conv1D(
		filters=0, kernel_size=0|(0,0), strides=1, padding='valid',
		data_format='channels_last', dilation_rate=1, groups=1,
		activation=None, use_bias=True, kernel_initializer='glorot_uniform',
		bias_initializer='zeros', kernel_regularizer=None,
		bias_regularizer=None, activity_regularizer=None, kernel_constraint=None,
		bias_constraint=None, **kwargs)
	Conv2D(
		filters=0, kernel_size=0|(0,0), strides=(1,1), padding='valid',
		data_format=None, dilation_rate=(1,1), groups=1, activation=None,
		use_bias=True, kernel_initializer='glorot_uniform',
		bias_initializer='zeros', kernel_regularizer=None,
		bias_regularizer=None, activity_regularizer=None, kernel_constraint=None,
		bias_constraint=None, **kwargs)
	
	RNN(
		cell, return_sequences=False, return_state=False, go_backwards=False,
		stateful=False, unroll=False, time_major=False, **kwargs)
	SimpleRNN(
		units=+0, activation='tanh', use_bias=True,
		kernel_initializer='glorot_uniform',
		recurrent_initializer='orthogonal',
		bias_initializer='zeros', kernel_regularizer=None,
		recurrent_regularizer=None, bias_regularizer=None, activity_regularizer=None,
		kernel_constraint=None, recurrent_constraint=None, bias_constraint=None,
		dropout=0.0, recurrent_dropout=0.0, return_sequences=False, return_state=False,
		go_backwards=False, stateful=False, unroll=False, **kwargs)
	LSTM(
		units=+0, activation='tanh', recurrent_activation='sigmoid',
		use_bias=True, kernel_initializer='glorot_uniform',
		recurrent_initializer='orthogonal',
		bias_initializer='zeros', unit_forget_bias=True,
		kernel_regularizer=None, recurrent_regularizer=None, bias_regularizer=None,
		activity_regularizer=None, kernel_constraint=None, recurrent_constraint=None,
		bias_constraint=None, dropout=0.0, recurrent_dropout=0.0,
		return_sequences=False, return_state=False, go_backwards=False, stateful=False,
		time_major=False, unroll=False, **kwargs)
	GRU(
		units=+0, activation='tanh', recurrent_activation='sigmoid',
		use_bias=True, kernel_initializer='glorot_uniform',
		recurrent_initializer='orthogonal',
		bias_initializer='zeros', kernel_regularizer=None,
		recurrent_regularizer=None, bias_regularizer=None, activity_regularizer=None,
		kernel_constraint=None, recurrent_constraint=None, bias_constraint=None,
		dropout=0.0, recurrent_dropout=0.0, return_sequences=False, return_state=False,
		go_backwards=False, stateful=False, unroll=False, time_major=False,
		reset_after=True, **kwargs)
	
	Flatten(data_format=None, **kwargs)
	InputLayer(input_shape=(int,..)|TensorShape, batch_size=None, dtype=None, ?input_tensor=None, sparse=False, ?name='', ragged=False, type_spec=None, **kwargs)

tf.keras.activations.
	elu(x, alpha=1.0)
	exponential(x)
	gelu(x, approximate=False)
	hard_sigmoid(x)
	linear(x)
	relu(x, alpha=0.0, max_value=None, threshold=0)
	selu(x)
	sigmoid(x)
	softmax(x, axis=-1)
	softplus(x)
	softsign(x)
	swish(x)
	tanh(x)
	
	serialize(activation=fn)
	deserialize(name='', custom_objects=None|{'name': fn})
	get(identifier=fn|'')


tf.keras.losses.
	BinaryCrossentropy(from_logits=False, label_smoothing=0, axis=-1, reduction=losses_utils.ReductionV2.AUTO, name='binary_crossentropy')
	CategoricalCrossentropy(from_logits=False, label_smoothing=0, axis=-1, reduction=losses_utils.ReductionV2.AUTO, name='categorical_crossentropy')
	CategoricalHinge(reduction=losses_utils.ReductionV2.AUTO, name='categorical_hinge')
	CosineSimilarity(axis=-1, reduction=losses_utils.ReductionV2.AUTO, name='cosine_similarity')
	Hinge(reduction=losses_utils.ReductionV2.AUTO, name='hinge')
	Huber(delta=1.0, reduction=losses_utils.ReductionV2.AUTO, name='huber_loss')
	KLDivergence(reduction=losses_utils.ReductionV2.AUTO, name='kl_divergence|kullback_leibler_divergence|kld|KLD')
	LogCosh(reduction=losses_utils.ReductionV2.AUTO, name='log_cosh|logcosh')
	Loss(reduction=losses_utils.ReductionV2.AUTO, name=None)
	MeanAbsoluteError(reduction=losses_utils.ReductionV2.AUTO, name='mean_absolute_error|mae|MAE')
	MeanAbsolutePercentageError(reduction=losses_utils.ReductionV2.AUTO, name='mean_absolute_percentage_error|mape|MAPE')
	MeanSquaredError(reduction=losses_utils.ReductionV2.AUTO, name='mean_squared_error|mse|MSE')
	MeanSquaredLogarithmicError(reduction=losses_utils.ReductionV2.AUTO, name='mean_squared_logarithmic_error|msle|MSLE')
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

tf.keras.callbacks.
	Callback()
		class MyCallback(Callback):
			params
			model
			def __init__(self):
				super(MyCallback, self).__init__()
			def on_batch_begin(batch, logs=None)
			def on_batch_end(batch, logs=None)
			def on_epoch_begin(epoch, logs=None)
			def on_epoch_end(epoch, logs=None)
			def on_predict_batch_begin(batch, logs=None)
			def on_predict_batch_end(batch, logs=None)
			def on_predict_begin(logs=None)
			def on_predict_end(logs=None)
			def on_test_batch_begin(batch, logs=None)
			def on_test_batch_end(batch, logs=None)
			def on_test_begin(logs=None)
			def on_test_end(logs=None)
			def on_train_batch_begin(batch, logs=None)
			def on_train_batch_end(batch, logs=None)
			def on_train_begin(logs=None)
			def on_train_end(logs=None)
			def set_model(model)
			def set_params(params)
	CallbackList(callbacks=None, add_history=False, add_progbar=False, model=None, **params)
	BaseLogger(stateful_metrics=None)
	CSVLogger(filename='', separator=',', append=False)
	EarlyStopping(monitor='val_loss', min_delta=0, patience=0, verbose=0, mode='auto|min|max', baseline=None, restore_best_weights=False)
	History()
	LambdaCallback(on_epoch_begin=None, on_epoch_end=None, on_batch_begin=None, on_batch_end=None, on_train_begin=None, on_train_end=None, **kwargs)
	LearningRateScheduler(schedule=lambda epoch_idx=0, curr_lr=0.: 0., verbose=0)
	ModelCheckpoint(filepath=''|PathLike, monitor='val_loss', verbose=0|1, save_best_only=False, save_weights_only=False, mode='auto|min|max', save_freq='epoch', options=None, **kwargs)
	ProgbarLogger(count_mode='samples', stateful_metrics=None)
	ReduceLROnPlateau(monitor='val_loss', factor=0.1, patience=10, verbose=0, mode='auto', min_delta=0.0001, cooldown=0, min_lr=0, **kwargs)
	RemoteMonitor(root='http://localhost:9000', path='/publish/epoch/end/', field='data', headers=None, send_as_json=False)
	TensorBoard(log_dir='logs', histogram_freq=0, write_graph=True, write_images=False, write_steps_per_second=False, update_freq='epoch', profile_batch=2, embeddings_freq=0, embeddings_metadata=None, **kwargs)
	TerminateOnNaN()

tf.keras.initializers.
	Initializer()
	Constant(value=0)
	GlorotNormal(seed=None)
	GlorotUniform(seed=None)
	HeNormal(seed=None)
	HeUniform(seed=None)
	Identity(gain=1.0)
	LecunNormal(seed=None)
	LecunUniform(seed=None)
	Ones()
	Orthogonal(gain=1.0, seed=None)
	RandomNormal(mean=0.0, stddev=0.05, seed=None)
	RandomUniform(minval=-0.05, maxval=0.05, seed=None)
	TruncatedNormal(mean=0.0, stddev=0.05, seed=None)
	VarianceScaling(scale=1.0, mode='fan_in', distribution='truncated_normal', seed=None)
	Zeros()
	
	serialize(initializer)
	deserialize(config, custom_objects=None)
	get(identifier)

tf.keras.metrics.
	Metric(name=None, dtype=None, **kwargs) <- Layer, Module
		class MyMetric(Metric):
			def __init__(self, name='my_metric', **kwargs):
				super(MyMetric, self).__init__(name=name, **kwargs)
				self.res = self.add_weight(name='x', initializer='zeros')
			def update_state(self, y_true, y_pred, sample_weight=None):
				self.res.assign_add(...)
			def reset_state():
				...
			def merge_state(metrics):
				...
			def result():
				return self.res
	AUC(num_thresholds=200, curve='ROC', summation_method='interpolation', name=None, dtype=None, thresholds=None, multi_label=False, num_labels=None, label_weights=None, from_logits=False)
	Accuracy(name='accuracy', dtype=None)
	BinaryAccuracy(name='binary_accuracy', dtype=None, threshold=0.5)
	BinaryCrossentropy(name='binary_crossentropy', dtype=None, from_logits=False, label_smoothing=0)
	CategoricalAccuracy(name='categorical_accuracy', dtype=None)
	CategoricalCrossentropy(name='categorical_crossentropy', dtype=None, from_logits=False, label_smoothing=0)
	CategoricalHinge(name='categorical_hinge', dtype=None)
	CosineSimilarity(name='cosine_similarity', dtype=None, axis=-1)
	FalseNegatives(thresholds=0.5|[0.,..], name=None|'', dtype=None)
	FalsePositives(thresholds=0.5|[0.,..], name=None|'', dtype=None)
	Hinge(name='hinge', dtype=None)
	KLDivergence(name='kullback_leibler_divergence', dtype=None)
	LogCoshError(name='logcosh', dtype=None)
	Mean(name='mean', dtype=None)
	MeanAbsoluteError(name='mean_absolute_error', dtype=None)
	MeanAbsolutePercentageError(name='mean_absolute_percentage_error', dtype=None)
	MeanIoU(num_classes, name=None, dtype=None)
	MeanMetricWrapper(fn, name=None, dtype=None, **kwargs)
	MeanRelativeError(normalizer, name=None, dtype=None)
	MeanSquaredError(name='mean_squared_error', dtype=None)
	MeanSquaredLogarithmicError(name='mean_squared_logarithmic_error', dtype=None)
	MeanTensor(name='mean_tensor', dtype=None, shape=None)
	Poisson(name='poisson', dtype=None)
	Precision(thresholds=None, top_k=None, class_id=None, name=None, dtype=None)
	PrecisionAtRecall(recall, num_thresholds=200, class_id=None, name=None, dtype=None)
	Recall(thresholds=None, top_k=None, class_id=None, name=None, dtype=None)
	RecallAtPrecision(precision, num_thresholds=200, class_id=None, name=None, dtype=None)
	RootMeanSquaredError(name='root_mean_squared_error', dtype=None)
	SensitivityAtSpecificity(specificity, num_thresholds=200, class_id=None, name=None, dtype=None)
	SparseCategoricalAccuracy(name='sparse_categorical_accuracy', dtype=None)
	SparseCategoricalCrossentropy(name='sparse_categorical_crossentropy', dtype=None, from_logits=False, axis=-1)
	SparseTopKCategoricalAccuracy(k=5, name='sparse_top_k_categorical_accuracy', dtype=None)
	SpecificityAtSensitivity(sensitivity, num_thresholds=200, class_id=None, name=None, dtype=None)
	SquaredHinge(name='squared_hinge', dtype=None)
	Sum(name='sum', dtype=None)
	TopKCategoricalAccuracy(k=5, name='top_k_categorical_accuracy', dtype=None)
	TrueNegatives(thresholds=0.5|[0.,..], name=None|'', dtype=None)
	TruePositives(thresholds=0.5|[0.,..], name=None|'', dtype=None)
	
	# fn
	KLD(y_true, y_pred)
	MAE(...)
	MAPE(...)
	MSE(...)
	MSLE(...)
	binary_accuracy(..., threshold=0.5)
	binary_crossentropy(..., from_logits=False, label_smoothing=0.0, axis=-1)
	categorical_accuracy(...)
	categorical_crossentropy(..., from_logits=False, label_smoothing=0.0, axis=-1)
	hinge(...)
	kl_divergence(...)
	kld(...)
	kullback_leibler_divergence(...)
	log_cosh(...)
	logcosh(...)
	mae(...)
	mape(...)
	mean_absolute_error(...)
	mean_absolute_percentage_error(...)
	mean_squared_error(...)
	mean_squared_logarithmic_error(...)
	mse(...)
	msle(...)
	poisson(...)
	sparse_categorical_accuracy(...)
	sparse_categorical_crossentropy(..., from_logits=False, axis=-1)
	sparse_top_k_categorical_accuracy(..., k=5)
	squared_hinge(...)
	top_k_categorical_accuracy(..., k=5)
	
	serialize(metric)
	deserialize(config, custom_objects=None)
	get(identifier)