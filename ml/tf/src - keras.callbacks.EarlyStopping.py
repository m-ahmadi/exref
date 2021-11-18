# https://github.com/keras-team/keras/blob/master/keras/callbacks.py#L1713

class EarlyStopping(Callback):
	def __init__(self, monitor='val_loss', min_delta=0, patience=0, verbose=0, mode='auto', baseline=None, restore_best_weights=False):
		super(EarlyStopping, self).__init__()

		self.monitor = monitor
		self.patience = patience
		self.verbose = verbose
		self.baseline = baseline
		self.min_delta = abs(min_delta)
		self.wait = 0
		self.stopped_epoch = 0
		self.restore_best_weights = restore_best_weights
		self.best_weights = None

		if mode not in ['auto', 'min', 'max']:
			logging.warning('EarlyStopping mode %s is unknown, '
											'fallback to auto mode.', mode)
			mode = 'auto'

		if mode == 'min':
			self.monitor_op = np.less
		elif mode == 'max':
			self.monitor_op = np.greater
		else:
			if (self.monitor.endswith('acc') or self.monitor.endswith('accuracy') or
					self.monitor.endswith('auc')):
				self.monitor_op = np.greater
			else:
				self.monitor_op = np.less

		if self.monitor_op == np.greater:
			self.min_delta *= 1
		else:
			self.min_delta *= -1

	def on_train_begin(self, logs=None):
		# Allow instances to be re-used
		self.wait = 0
		self.stopped_epoch = 0
		self.best = np.Inf if self.monitor_op == np.less else -np.Inf
		self.best_weights = None
		self.best_epoch = 0

	def on_epoch_end(self, epoch, logs=None):
		current = self.get_monitor_value(logs)
		if current is None:
			return
		if self.restore_best_weights and self.best_weights is None:
			# Restore the weights after first epoch if no progress is ever made.
			self.best_weights = self.model.get_weights()

		self.wait += 1
		if self._is_improvement(current, self.best):
			self.best = current
			self.best_epoch = epoch
			if self.restore_best_weights:
				self.best_weights = self.model.get_weights()
			# Only restart wait if we beat both the baseline and our previous best.
			if self.baseline is None or self._is_improvement(current, self.baseline):
				self.wait = 0

		# Only check after the first epoch.
		if self.wait >= self.patience and epoch > 0:
			self.stopped_epoch = epoch
			self.model.stop_training = True
			if self.restore_best_weights and self.best_weights is not None:
				if self.verbose > 0:
					io_utils.print_msg(
							'Restoring model weights from the end of the best epoch: '
							f'{self.best_epoch + 1}.')
				self.model.set_weights(self.best_weights)

	def on_train_end(self, logs=None):
		if self.stopped_epoch > 0 and self.verbose > 0:
			io_utils.print_msg(
					f'Epoch {self.stopped_epoch + 1}: early stopping')

	def get_monitor_value(self, logs):
		logs = logs or {}
		monitor_value = logs.get(self.monitor)
		if monitor_value is None:
			logging.warning('Early stopping conditioned on metric `%s` '
											'which is not available. Available metrics are: %s',
											self.monitor, ','.join(list(logs.keys())))
		return monitor_value

	def _is_improvement(self, monitor_value, reference_value):
		return self.monitor_op(monitor_value - self.min_delta, reference_value)