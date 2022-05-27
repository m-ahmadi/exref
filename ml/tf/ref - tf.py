tf.config.run_functions_eagerly(run_eagerly=True)

tf.Variable(
	initial_value=None, trainable=None, validate_shape=True, caching_device=None, name=None,
	variable_def=None, dtype=None, import_scope=None, constraint=None,
	synchronization=tf.VariableSynchronization.AUTO,
	aggregation=tf.compat.v1.VariableAggregation.NONE,
	shape=None
	# https://www.tensorflow.org/api_docs/python/tf/Variable
)
	.assign_add(delta, use_locking=False, name=None, read_value=True)

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


tf.math.reduce_sum(input_tensor, axis=None, keepdims=False, name=None) | tf.reduce_sum
	tf.reduce_sum( tf.constant([[1,1,1], [1,1,1]]) ) # 6


tf.data.Dataset()
	.from_tensor_slices()
	.batch(batch_size, drop_remainder=False, num_parallel_calls=None, deterministic=None, name=None)
	.range(*args, **kwargs)
		.as_numpy_iterator()