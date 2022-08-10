import numba as nb # pip install numba

# https://numba.readthedocs.io/en/stable/reference/jit-compilation.html
@numba.jit(
	signature=None, nopython=False, nogil=False, cache=False,
	forceobj=False, parallel=False, error_model='python|numpy',
	fastmath=False, locals={}, boundscheck=False
)
@numba.njit == @numba.jit(nopython=True)

@numba.generated_jit(nopython=False, nogil=False, cache=False, forceobj=False, locals={})
@numba.vectorize(*, signatures=[], identity=None, nopython=True, target='cpu|parallel|cuda', forceobj=False, cache=False, locals={})
@numba.guvectorize(signatures, layout, *, identity=None, nopython=True, target='cpu|parallel|cuda', forceobj=False, cache=False, locals={})
@numba.cfunc(signature, nopython=False, cache=False, locals={})

# https://numba.readthedocs.io/en/stable/user/stencil.html
@numba.stencil(neighborhood, func_or_mode, cval=0, standard_indexing, )

@numba.extending.overload
@numba.jit_module(**kwargs)
@numba.experimental.jitclass

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples

@numba.jit(nopython=True) | @numba.njit
def mufunc(a): return 2