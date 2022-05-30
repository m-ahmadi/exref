from tensorflow.keras.losses import BinaryCrossentropy
from tensorflow.keras.losses import Reduction

loss = BinaryCrossentropy(from_logits=True)

# reduction type: 'auto|sum_over_batch_size'
loss(y_true=[0,1,0,0], y_pred=[0.,1.,0.,0.]).numpy() # 0.5981758


y_true = [ [0,1], [0,0] ],
y_pred = [ [0.,1.], [0.,0.] ]

# batch_size=2, n_samples=4
loss(y_true, y_pred).numpy() # 0.5981758

# sample_weight
loss(y_true, y_pred, sample_weight=[0.8, 0.2]).numpy() # 0.2705965

# reduction type: 'sum' 
loss = BinaryCrossentropy(from_logits=True, reduction=Reduction.SUM)
loss(y_true, y_pred).numpy() # 1.730916

# reduction type: 'none'
loss = BinaryCrossentropy(from_logits=True, reduction=Reduction.NONE)
loss(y_true, y_pred).numpy() # [0.23515667, 1.4957594]

# no `logits` (y_pred = probability)
BinaryCrossentropy()(y_true=[0,1,0,0], y_pred=[.0,.9,.0,.0]).numpy() # 0.0263401
