import tensorflow as tf

tf.reduce_sum( tf.constant([[1,1,1], [1,1,1]]) ).numpy() # 6

tf.reduce_mean([ [2,2], [6,6] ], 0).numpy() # [4,4]  ie: (2+2+6+6)/4
tf.reduce_mean([ [2,2], [6,6] ], 1).numpy() # [2,6]

# logit (output of layer without activation)
labels = y_true
logits = model(x, training=True)
tf.nn.sigmoid_cross_entropy_with_logits(lables, logits)
tf.nn.softmax_cross_entropy_with_logits(labels, logits)

# convert logit to probability
pred = tf.round(tf.nn.sigmoid(logit))     # binary
pred = np.argmax(tf.nn.softmax(logit), 0) # multi-class