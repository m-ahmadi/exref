import numpy as np # pip install numpy

∂ = array_like = array<numpy> | scalar<numpy | python> | object<PEP 3118 buffer interface>
	object<__array_struct__ | __array_interface__> | object<__array__ function>
	object<list of lists> | zero_dimensional_array< object<dtype> >
	
	zero_dimensional_array = scalar
		zda = np.array(1)
		zda.shape # ()
		zda.ndim  # 0

# types
'''
int             https://numpy.org/doc/stable/reference/arrays.scalars.html#signed-integer-types
uint            https://numpy.org/doc/stable/reference/arrays.scalars.html#unsigned-integer-types
float           https://numpy.org/doc/stable/reference/arrays.scalars.html#floating-point-types
<type><size>    https://numpy.org/doc/stable/reference/arrays.scalars.html#sized-aliases
'''
np.__all__
np.__builtins__
np.__cached__
np.__config__
np.__dir__
np.__doc__
np.__file__
np.__getattr__
np.__git_revision__
np.__loader__
np.__name__
np.__NUMPY_SETUP__
np.__package__
np.__path__
np.__spec__
np.__version__
np._add_newdoc_ufunc
np._distributor_init
np._globals
np._mat
np._NoValue
np._pytesttester
np._UFUNC_API
np.abs
np.absolute
np.add
np.add_docstring
np.add_newdoc
np.add_newdoc_ufunc
np.alen
np.all(a=∂, axis=None, out=None|<ndarray>, keepdims=bool, *, where=∂<bool>)
np.allclose(a=∂, b=∂, rtol=1e-05, atol=1e-08, equal_nan=False)
np.ALLOW_THREADS
np.alltrue
np.min | amax(a=∂, axis=None|0|[0,..], ?out=None|∂, ?keepdims=bool, ?initial=0, ?where=ndarray<bool>)
np.min | amin(a=∂, axis=None|0|[0,..], ?out=None|∂, ?keepdims=bool, ?initial=0, ?where=ndarray<bool>)
np.angle
np.any(a=∂, axis=None, out=None|<ndarray>, keepdims=bool, *, where=∂<bool>)
np.append(arr=∂, values=∂, ?axis=None|0)
np.apply_along_axis
np.apply_over_axes
np.arange(?start, stop, ?step, ?dtype=None, *, ?like=None)
np.arccos
np.arccosh
np.arcsin
np.arcsinh
np.arctan
np.arctan2
np.arctanh
np.argmax(a=∂, ?axis=None|0, ?out=None|[])
np.argmin(a=∂, ?axis=None|0, ?out=None|[])
np.argpartition
np.argsort
np.argwhere
np.around(a=∂, decimals=0, out=None)
np.array(object, dtype=None, *, copy=True, order='K', subok=False, ndmin=0, like=None)
np.array_equal
np.array_equiv
np.array_repr
np.array_split(ary, indices_or_sections, axis=0)
np.array_str
np.array2string
np.asanyarray
np.asarray
np.asarray_chkfinite
np.ascontiguousarray
np.asfarray
np.asfortranarray
np.asmatrix
np.asscalar
np.atleast_1d
np.atleast_2d
np.atleast_3d
np.average()
np.AxisError
np.bartlett
np.base_repr
np.binary_repr
np.bincount(x=[+0,..], ?weights=None|[], ?minlength=0)
np.bitwise_and
np.bitwise_not
np.bitwise_or
np.bitwise_xor
np.blackman
np.block
np.bmat
np.bool
np.bool_
np.bool8
np.broadcast
np.broadcast_arrays
np.broadcast_to
np.BUFSIZE
np.busday_count
np.busday_offset
np.busdaycalendar
np.byte
np.byte_bounds
np.bytes_
np.bytes0
np.c_
np.can_cast
np.cast
np.cbrt
np.cdouble
np.ceil()
np.cfloat
np.char
np.character
np.chararray
np.choose
np.clip
np.CLIP
np.clongdouble
np.clongfloat
np.column_stack
np.common_type
np.compare_chararrays
np.compat
np.complex
np.complex_
np.complex128
np.complex64
np.complexfloating
np.ComplexWarning
np.compress
np.concatenate((a1, a2, ...), ?axis=0, ?out=None|ndarray, ?dtype=None|''|dtype, ?casting='same_kind|no|equiv|safe|unsafe')
np.conj
np.conjugate
np.convolve
np.copy(a=∂, order='K|C|F|A', subok=False)
np.copysign
np.copyto
np.core
np.corrcoef
np.correlate
np.cos
np.cosh
np.count_nonzero
np.cov()
np.cross
np.csingle
np.ctypeslib
np.cumprod
np.cumproduct
np.cumsum
np.DataSource
np.datetime_as_string
np.datetime_data
np.datetime64
np.deg2rad
np.degrees
np.delete
np.deprecate
np.deprecate_with_doc
np.diag
np.diag_indices
np.diag_indices_from
np.diagflat
np.diagonal
np.diff(a=∂, ?n=1, ?axis=-1, ?prepend=∂, ?append=∂)
np.digitize
np.disp
np.divide
np.divmod
np.dot(a=∂, b=∂, ?out=None|ndarray)
np.double
np.dsplit
np.dstack
np.dtype
np.e
np.ediff1d
np.einsum
np.einsum_path
np.emath
np.empty(shape=0|(0,..), ?dtype=np.float64, *, ?like='C|F')
np.empty_like
np.equal
np.ERR_CALL
np.ERR_DEFAULT
np.ERR_IGNORE
np.ERR_LOG
np.ERR_PRINT
np.ERR_RAISE
np.ERR_WARN
np.errstate
np.euler_gamma
np.exp(x=∂, ...) # Math.pow(Math.E, x)
np.exp2
np.expand_dims
np.expm1
np.extract
np.eye
np.fabs
np.False_
np.fastCopyAndTranspose
np.fft
np.fill_diagonal
np.find_common_type
np.finfo
np.fix
np.flatiter
np.flatnonzero
np.flexible
np.flip(m=∂, axis=None|0|(0,..))
np.fliplr
np.flipud
np.float
np.float_
np.float_power
np.float16
np.float32
np.float64
np.floating
np.FLOATING_POINT_SUPPORT
np.floor
np.floor_divide
np.fmax
np.fmin
np.fmod
np.format_float_positional
np.format_float_scientific
np.format_parser
np.FPE_DIVIDEBYZERO
np.FPE_INVALID
np.FPE_OVERFLOW
np.FPE_UNDERFLOW
np.frexp
np.frombuffer
np.fromfile
np.fromfunction
np.fromiter
np.frompyfunc
np.fromregex
np.fromstring
np.full
np.full_like
np.fv
np.gcd
np.generic
np.genfromtxt
np.geomspace
np.get_array_wrap
np.get_include
np.get_printoptions
np.getbufsize
np.geterr
np.geterrcall
np.geterrobj
np.gradient
np.greater
np.greater_equal
np.half
np.hamming
np.hanning
np.heaviside
np.histogram
np.histogram_bin_edges
np.histogram2d
np.histogramdd
np.hsplit
np.hstack
np.hypot
np.i0
np.identity
np.iinfo
np.imag
np.in1d
np.index_exp
np.indices
np.inexact
np.inf | Inf | Infinity | PINF | infty
np.info(object=None|'', maxwidth=76, output=<_io.TextIOWrapper name='<stdout>' mode='w' encoding='utf-8'>, toplevel='numpy')
np.inner
np.insert(arr=∂, obj=0|[0,..], values=∂, axis=None|0)
np.int
np.int_
np.int0
np.int16
np.int32
np.int64
np.int8
np.intc
np.integer
np.interp(x=∂, xp=[0.,..], fp=[0.|0j,..], left=None|0.|0j, right=None|0.|0j, period=None|0.)
np.intersect1d
np.intp
np.invert
np.ipmt
np.irr
np.is_busday
np.isclose
np.iscomplex
np.iscomplexobj
np.isfinite
np.isfortran
np.isin
np.isinf
np.isnan
np.isnat
np.isneginf
np.isposinf
np.isreal
np.isrealobj
np.isscalar
np.issctype
np.issubclass_
np.issubdtype
np.issubsctype
np.iterable
np.ix_
np.kaiser
np.kron
np.lcm
np.ldexp
np.left_shift
np.less
np.less_equal
np.lexsort
np.lib
np.linalg
np.linspace(start, stop, num=50, endpoint=True, retstep=False, dtype=None, axis=0)
np.little_endian
np.load
np.loads
np.loadtxt(fname, dtype='float', comments='#', delimiter=None, converters=None, skiprows=0, usecols=None, unpack=False, ndmin=0, encoding='bytes', max_rows=None, *, quotechar=None, like=None)
np.log
np.log10
np.log1p
np.log2
np.logaddexp
np.logaddexp2
np.logical_and
np.logical_not
np.logical_or
np.logical_xor
np.logspace
np.long
np.longcomplex
np.longdouble
np.longfloat
np.longlong
np.lookfor
np.ma
np.MachAr
np.mafromtxt
np.mask_indices
np.mat
np.math
np.matmul(a,b)
np.matrix
np.matrixlib
np.max
np.MAXDIMS
np.maximum
np.maximum_sctype
np.MAY_SHARE_BOUNDS
np.MAY_SHARE_EXACT
np.may_share_memory
np.mean()
np.median
np.memmap
np.meshgrid
np.mgrid
np.min
np.min_scalar_type
np.minimum
np.mintypecode
np.mirr
np.mod
np.modf
np.ModuleDeprecationWarning
np.moveaxis
np.msort
np.multiply()
np.nan
np.NaN
np.NAN
np.nan_to_num
np.nanargmax
np.nanargmin
np.nancumprod
np.nancumsum
np.nanmax
np.nanmean
np.nanmedian
np.nanmin
np.nanpercentile
np.nanprod
np.nanquantile
np.nanstd
np.nansum
np.nanvar
np.nbytes
np.ndarray
np.ndenumerate
np.ndfromtxt
np.ndim
np.ndindex
np.nditer
np.negative
np.nested_iters
np.newaxis
np.nextafter
np.NINF | -np.inf 
np.nonzero
np.not_equal
np.nper
np.npv
np.numarray
np.number
np.NZERO
np.obj2sctype
np.object
np.object_
np.object0
np.ogrid
np.oldnumeric
np.ones(shape=0|(0,..), ?dtype=np.float64, *, ?like='C|F')
np.ones_like
np.os
np.outer
np.packbits
np.pad
np.partition
np.percentile()
np.pi
np.piecewise
np.place
np.pmt
np.poly
np.poly1d
np.polyadd
np.polyder
np.polydiv
np.polyfit
np.polyint
np.polymul
np.polynomial
np.polysub
np.polyval
np.positive
np.power
np.ppmt
np.printoptions
np.prod(a=∂, ?axis=None|0|(0,..), ?dtype=None, ?out=None, ?keepdims=, ?initial=, ?where=)
np.product
np.promote_types
np.ptp
np.put
np.put_along_axis
np.putmask
np.pv
np.PZERO
np.quantile()
np.r_
np.rad2deg
np.radians
np.RAISE
np.random
np.random.normal(loc=0.0|[0.,..], scale=1.0|[0.,..], size=None|0|(0,..)) # normal distr (gaussian)
np.random.permutation(x=0|∂)
np.random.rand(?d0=0, ?d1=0, ..., ?dn=0) # uniform distr
np.random.randint(low=0, ?high=None|0, ?size=None|0|(0,..), ?dtype=np.int)  |  random_integers() # low: inclusive, high: exclusive
np.random.randn(?d0=0, ?d0, ..., ?dn=0) # normal distr (gaussian)
np.random.random(size=None|0|(0,..))  |  random_sample()
np.random.uniform(?low=0.0, ?high=1.0, ?size=None|0|(0,..))
np.random.choice(a=[]|0, size=None|0|(0,..), replace=True, p=None|[])
np.RankWarning
np.rate
np.ravel(a=∂, order='C|F|A|K')
np.ravel_multi_index
np.real
np.real_if_close
np.rec
np.recarray
np.recfromcsv
np.recfromtxt
np.reciprocal
np.record
np.remainder
np.repeat
np.require
np.reshape(a=∂, newshape=0|(0,..), order='C|F|A')
np.resize
np.result_type
np.right_shift
np.rint
np.roll
np.rollaxis
np.roots
np.rot90
np.round_(a=∂, decimals=0, out=None|<ndarray>) | round
np.row_stack
np.s_
np.safe_eval
np.save
np.savetxt
np.savez
np.savez_compressed
np.ScalarType
np.sctype2char
np.sctypeDict
np.sctypeNA
np.sctypes
np.searchsorted(a=∂, v=∂, side='left|right', sorter=None|[])
np.select
np.set_numeric_ops
np.set_printoptions
np.set_string_function
np.setbufsize
np.setdiff1d
np.seterr
np.seterrcall
np.seterrobj
np.setxor1d
np.shape()
np.shares_memory
np.SHIFT_DIVIDEBYZERO
np.SHIFT_INVALID
np.SHIFT_OVERFLOW
np.SHIFT_UNDERFLOW
np.short
np.show_config
np.sign
np.signbit
np.signedinteger
np.sin
np.sinc
np.single
np.singlecomplex
np.sinh
np.size
np.sometrue
np.sort
np.sort_complex
np.source
np.spacing
np.split(ary, indices_or_sections, axis=0)
np.sqrt
np.square
np.squeeze
np.stack
np.std()
np.str
np.str_
np.str0
np.string_
np.subtract
np.sum(
np.swapaxes
np.sys
np.take(a=∂, indices=<ndarray>, axis=None|0, out=None, mode='raise')
np.take_along_axis(arr=∂, indices=<ndarray>, axis=0)
np.tan
np.tanh
np.tensordot
np.test
np.testing
np.tile
np.timedelta64
np.TooHardError
np.trace
np.tracemalloc_domain
np.transpose(a=∂, ?axes=None|[0,..])
np.trapz
np.tri
np.tril
np.tril_indices
np.tril_indices_from
np.trim_zeros
np.triu
np.triu_indices
np.triu_indices_from
np.True_
np.true_divide
np.trunc
np.typecodes
np.typeDict
np.typeNA
np.typename
np.ubyte
np.ufunc
np.UFUNC_BUFSIZE_DEFAULT
np.UFUNC_PYVALS_NAME
np.uint
np.uint0
np.uint16
np.uint32
np.uint64
np.uint8
np.uintc
np.uintp
np.ulonglong
np.unicode
np.unicode_
np.union1d
np.unique(ar=∂, return_index=False, return_inverse=False, return_counts=False, axis=None|0, *, equal_nan=True)
np.unpackbits
np.unravel_index
np.unsignedinteger
np.unwrap
np.use_hugepage
np.ushort
np.vander
np.var()
np.vdot
np.vectorize
np.version
np.VisibleDeprecationWarning
np.void
np.void0
np.vsplit
np.vstack
np.warnings
np.where(condition, ?x, ?y)
np.who
np.WRAP
np.zeros(shape=0|(0,..), ?dtype=np.float64, *, ?like='C|F')
np.zeros_like(a=∂, dtype=None, order='K|C|F|A', subok=True, shape=None|0|[0,..])
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

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
a.astype(dtype=''|dtype, order='K|C|F|A', casting='unsafe', subok=True, copy=True)
a.byteswap()
a.choose()
a.clip()
a.compress()
a.conj()
a.conjugate()
a.copy(order='C|F|A|K')
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