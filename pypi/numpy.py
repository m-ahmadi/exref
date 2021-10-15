import numpy as np # pip install numpy

∂ = array_like = array<numpy> | scalar<numpy | python> | object<PEP 3118 buffer interface>
	object<__array_struct__ | __array_interface__> | object<__array__ function>
	object<list of lists> | zero_dimensional_array< object<dtype> >
	
	zero_dimensional_array = scalar
		zda = np.array(1)
		zda.shape # ()
		zda.ndim  # 0

np.Inf | Infinity | PINF | infty
np.NAN
np.pi

np.array(object, dtype=None, *, copy=True, order='K', subok=False, ndmin=0, like=None)
np.arange(?start, stop, ?step, ?dtype=None, *, ?like=None)
np.zeros(shape=int|(int..), ?dtype=np.float64, *, ?like='C|F')
np.ones(↑..)
np.empty(↑..)
np.reshape(a=∂, newshape=int|(int..), order='C|F|A')
np.split(ary, indices_or_sections, axis=0)
np.split_array(↑..)
np.concatenate((a1, a2, ...), ?axis=0, ?out=None|ndarray, ?dtype=None|''|dtype, ?casting='same_kind|no|equiv|safe|unsafe')
np.diff(a=∂, ?n=1, ?axis=-1, ?prepend=∂, ?append=∂)
np.where()
np.shape()
np.flatten(?c='C|F|A|K')
np.append(arr=∂, values=∂, ?axis=None|int)

np.random.uniform(?low=0.0, ?high=1.0, ?size=None|int|(int..))
np.round_(a=[], ?decimals=0, ?out=None)

np.multiply()
np.ceil()
np.sum()
np.mean()
np.mean()
np.average()
np.std()
np.var()
np.matmul(a,b)
np.cov()
np.percentile()
np.quantile()
np.amin()
np.amax()


a = np.array() # `array` type is alies for `ndarray`

a.base
a.data
a.dtype
a.flags
a.flat        []
a.imag
a.itemset
a.itemsize    int # byte-size
a.nbytes
a.ndim        int
a.real
a.shape       (int,..)
a.size        int
a.T           []

a.all()
a.any()
a.argmax()
a.argmin()
a.argpartition()
a.argsort()
a.astype()
a.byteswap()
a.choose()
a.clip()
a.compress()
a.conj()
a.conjugate()
a.copy()
a.ctypes
a.cumprod()
a.cumsum()
a.diagonal()
a.dot()
a.dump()
a.dumps()
a.fill()
a.flatten(?order='C|F|A|K')
a.getfield()
a.item()
a.max()
a.mean()
a.min()
a.newbyteorder()
a.nonzero()
a.partition()
a.prod()
a.ptp()
a.put()
a.ravel()
a.repeat()
a.reshape()
a.resize()
a.round()
a.searchsorted()
a.setfield()
a.setflags()
a.sort()
a.squeeze()
a.std()
a.strides()
a.sum()
a.swapaxes()
a.take()
a.tobytes()
a.tofile()
a.tolist()
a.tostring() # deprecated 
a.trace()
a.transpose()
a.var()
a.view()