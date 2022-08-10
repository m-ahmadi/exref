import numba # pip install numba

@numba.jit(
	signature=None, nopython=False, nogil=False, cache=False,
	forceobj=False, parallel=False, error_model='python|numpy',
	fastmath=False, locals={}, boundscheck=False)
# https://numba.readthedocs.io/en/stable/reference/jit-compilation.html
@numba.njit == @numba.jit(nopython=True)

@numba.generated_jit(nopython=False, nogil=False, cache=False, forceobj=False, locals={})
@numba.vectorize(*, signatures=[], identity=None, nopython=True, target='cpu|parallel|cuda', forceobj=False, cache=False, locals={})
@numba.guvectorize(signatures, layout, *, identity=None, nopython=True, target='cpu|parallel|cuda', forceobj=False, cache=False, locals={})
@numba.cfunc(signature, nopython=False, cache=False, locals={})

@numba.stencil(neighborhood, func_or_mode, cval=0, standard_indexing, )
# https://numba.readthedocs.io/en/stable/user/stencil.html

@numba.extending.overload
@numba.jit_module(**kwargs)
@numba.experimental.jitclass

numba.typed.List
# https://numba.readthedocs.io/en/stable/reference/pysupported.html#typed-list
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples
from numba import jit, njit

@njit
def mufunc(a):
	return 2

# typed list
from numba.typed import List
@njit
def append(l, i):
  l.append(i)
  return l
a = List()
a            # ListType[Undefined]([])
a.append(1)  # ListType[int64]([1])
a.append(23) # ListType[int64]([1, 23])