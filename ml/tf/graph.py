tf.graph_util.import_graph_def(graph_def, input_map=None, return_elements=None, name=None, producer_op_list=None, !op_dict=None)
	| tf.import_graph_def
	| tf.compat.v1.graph_util.import_graph_def
	| tf.compat.v1.import_graph_def


# both equal
f = tf.function(lambda x: x)
graph_def = f.get_concrete_function(2).graph.as_graph_def()

@tf.function
def f(x):
  return x
graph_def = f.get_concrete_function(2).graph.as_graph_def()





