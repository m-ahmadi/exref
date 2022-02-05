import tensorflow as tf
from tensorflow.python.framework.convert_to_constants import convert_variables_to_constants_v2
import numpy as np

train = 1

if train == 1:
	model = tf.keras.Sequential([
		tf.keras.layers.Dense(units=8, activation='sigmoid', input_shape=(2,)),
		tf.keras.layers.Dense(units=1, activation='sigmoid')
	])
	model.compile(optimizer=tf.keras.optimizers.SGD(0.6), loss='mean_squared_error')
	model.fit([ [0,0], [0,1], [1,0], [1,1] ], [0,1,1,0], epochs=1000)
	model.save('./model')
else:
	model = tf.keras.models.load_model('./model')

print(
	'normal model:\n\n',
	model.predict( np.array([ [0,0], [0,1], [1,0], [1,1] ]) )
)

# make frozen model

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# convert

# convert keras model to ConcreteFunction
full_model = tf.function(lambda x: model(x))
full_model = full_model.get_concrete_function(x=tf.TensorSpec(model.inputs[0].shape, model.inputs[0].dtype))

# get frozen ConcreteFunction
frozen_func = convert_variables_to_constants_v2(full_model)
frozen_func.graph.as_graph_def()
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# save

# save frozen graph from frozen ConcreteFunction
tf.io.write_graph(graph_or_graph_def=frozen_func.graph, logdir='./model_frozen', name='saved_model_frozen.pb', as_text=False)
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# load

# load frozen graph using tf v1 functions
with tf.io.gfile.GFile('./model_frozen/saved_model_frozen.pb', 'rb') as f:
	graph_def = tf.compat.v1.GraphDef()
	loaded = graph_def.ParseFromString(f.read())

# wrap frozen graph to ConcreteFunctions
wrapped_import = tf.compat.v1.wrap_function(lambda: tf.compat.v1.import_graph_def(graph_def, name=''), [])

import_graph = wrapped_import.graph

frozen_func = wrapped_import.prune(
	tf.nest.map_structure(import_graph.as_graph_element, ['x:0']),
	tf.nest.map_structure(import_graph.as_graph_element, ['Identity:0'])
)
# layers = [op.name for op in frozen_func.graph.get_operations()]
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# predict

print(
	'\nfrozen model:\n\n',
	frozen_func(x=tf.constant([ [0,0], [0,1], [1,0], [1,1] ], dtype='float32'))[0].numpy()
)
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@