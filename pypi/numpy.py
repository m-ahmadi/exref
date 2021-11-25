import numpy as np # pip install numpy

∂ = array_like = array<numpy> | scalar<numpy | python> | object<PEP 3118 buffer interface>
	object<__array_struct__ | __array_interface__> | object<__array__ function>
	object<list of lists> | zero_dimensional_array< object<dtype> >
	
	zero_dimensional_array = scalar
		zda = np.array(1)
		zda.shape # ()
		zda.ndim  # 0

np.info(object=None|'', maxwidth=76, output=<_io.TextIOWrapper name='<stdout>' mode='w' encoding='utf-8'>, toplevel='numpy')

np.Inf | np.inf |  np.Infinity | np.PINF | np.infty
np.NINF | -np.inf 
np.NAN
np.pi

np.array(object, dtype=None, *, copy=True, order='K', subok=False, ndmin=0, like=None)
np.arange(?start, stop, ?step, ?dtype=None, *, ?like=None)
np.zeros(shape=0|(0,..), ?dtype=np.float64, *, ?like='C|F')
np.ones(↑..)
np.empty(↑..)
np.reshape(a=∂, newshape=0|(0,..), order='C|F|A')
np.split(ary, indices_or_sections, axis=0)
np.split_array(↑..)
np.concatenate((a1, a2, ...), ?axis=0, ?out=None|ndarray, ?dtype=None|''|dtype, ?casting='same_kind|no|equiv|safe|unsafe')
np.diff(a=∂, ?n=1, ?axis=-1, ?prepend=∂, ?append=∂)
np.where(condition, ?x, ?y)
np.allclose(a=∂, b=∂, rtol=1e-05, atol=1e-08, equal_nan=False)
np.shape()
np.flatten(?c='C|F|A|K')
np.append(arr=∂, values=∂, ?axis=None|0)
np.insert(arr=∂, obj=0|[0,..], values=∂, axis=None|0)
np.flip(m=∂, axis=None|0|(0,..))

np.random.uniform(?low=0.0, ?high=1.0, ?size=None|0|(0,..))
np.random.random(size=None)  |  random_sample()
np.random.rand(?d0=0, ?d1=0, ..., ?dn=0)
np.random.randint(low=0, ?high=None|0, ?size=None|0|(0,..), ?dtype=np.int)  |  random_integers() # low: inclusive, high: exclusive
np.random.permutation(x=0|∂)

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
a.itemsize    0 # byte-size
a.nbytes
a.ndim        0
a.real
a.shape       (0,..)
a.size        0
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