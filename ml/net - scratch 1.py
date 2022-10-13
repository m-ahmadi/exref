def update_w_and_b(x, y, w, b, alpha):
	dl_dw = 0.0
	dl_db = 0.0
	N = len(x)
	
	for i in range(N):
		dl_dw += -2 * x[i] * ( y[i] - (w*x[i] + b) )
		dl_db += -2 * ( y[i] - (w * x[i] + b) )
		
		# update w and b
		frac = 1 / float(N)
		w = w - frac * dl_dw * alpha
		b = b - frac * dl_db * alpha
	
	return w, b


def train(x, y, w, b, alpha, epochs):
	for e in range(epochs):
		w, b = update_w_and_b(x, y, w, b, alpha)
		
		# log the progress
		if e % 400 == 0:
		print('epoch:', e, 'loss: ', avg_loss(x, y, w, b))
	
	return w, b


def avg_loss(x, y, w, b):
	N = len(x)
	total_error = 0.0
	
	for i in range(N):
		total_error += ( y[i] - (w * x[i] + b) ) ** 2
	
	return total_error / float(N)


def predict(x, w, b):
	return w*x + b


x = np.cumsum(np.random.randn(200))
x = x[x > 0]
y = np.random.normal(np.mean(x), np.std(x), len(x))
y = np.round(y, 1)

train(x, y, w=0.0, b=0.0, alpha=0.001, epoch=15000)

# w, b = train(x, y, 0.0, 0.0, 0.001, 15000)
w, b = w=0.0, b=0.0, alpha=0.001, epoch=15000
# epoch: 0 loss: 92.32078294903626
# epoch: 400 loss: 33.79131790081576
# epoch: 800 loss: 27.9918542960729
# epoch: 1200 loss: 24.33481690722147
# epoch: 1600 loss: 22.028754937538633
# ...
# epoch: 2800 loss: 19.07940244306619

x_new = 23.0
y_new = predict(x_new, w, b)
print(y_new)