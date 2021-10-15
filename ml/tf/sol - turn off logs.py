import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '0|1|2|3' 
	'0' # all messages are logged (default)
	'1' # ... except INFO
	'2' # ... except INFO|WARNING
	'3' # ... except INFO|WARNING|ERROR
import tensorflow as tf

# another way
import tensorflow as tf
tf.get_logger().setLevel('DEBUG|INFO|WARNING|ERROR')