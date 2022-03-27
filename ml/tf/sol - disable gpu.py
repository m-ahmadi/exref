import os
os.environ['CUDA_VISIBLE_DEVICES'] = '-1'

# or
try:
	# disable all gpus
	tf.config.set_visible_devices([], 'GPU')
	visible_devices = tf.config.get_visible_devices()
	for device in visible_devices:
		assert device.device_type != 'GPU'
except:
	# invalid device or cannot modify virtual devices once initialized.
	pass