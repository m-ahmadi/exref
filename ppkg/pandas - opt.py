# https://pandas.pydata.org/docs/user_guide/enhancingperf.html

# https://docs.cython.org/en/stable/src/quickstart/cythonize.html

# https://pandas.pydata.org/community/ecosystem.html#out-of-core

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# install pandas performance dependencies
'''
https://pandas.pydata.org/docs/getting_started/install.html#install-recommended-dependencies

pip install numexpr bottleneck numba

or

pip install pandas[performance]
'''
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# pandas best practices regarding large datasets
# https://pandas.pydata.org/docs/user_guide/scale.html

# load less data
pd.read_csv('file.csv', usecols=['foo','bar'])
pd.read_parquet('file.parquet', columns=['foo','bar'])

# use efficient datatypes
df2 = df.copy()
df2['name'] = df2['name'].astype('category')
df2['id'] = pd.to_numeric(df2['id'], downcast='unsigned')
df2[['x', 'y']] = df2[['x', 'y']].apply(pd.to_numeric, downcast='float')
df2.memory_usage(deep=True).sum() / df.memory_usage(deep=True).sum() # 0.20 (20% reduction)

# use chunking
# read chunk file, process, then next

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# load time of file formats
'''
save dataframes into .pkl files for future operations (takes more space, as high as 2x)

reduces load times into Jupyter Notebook from 10-50 seconds with csv, to about 1-5 seconds with pkl

'''
from timeit import default_timer as timer

# pickle
t = timer()
df = pd.read_pickle('file.pkl')
df.shape # (10_820_089, 23)
print(f'{timer()-t: .2f} s') # 1.89 s

t = timer()
df = pd.read_csv('file.csv')
df.shape # (10_820_089, 23)
print(f'{timer()-t: .2f} s') # 18.9 s


# hdf5 fixed format
pd.read_hdf('file.h5')                 # 1.85 s
# feather
feather.read_dataframe('file.feather') # 3.21 s
# csv
pd.read_csv('file.csv')                # 12.3 s
# hdf5 table format
pd.read_hdf('file.h5')                 # 24.2 s
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# pandas and multiprocessing
import multiprocessing as mp
import pandas as pd

def process(row):
	return row

def main():
	df = pd.read_csv('mydata.csv')
	iterable = df.to_dict('records')
	func = process
	with mp.Pool(processes=mp.cpu_count()) as pool:
		pool.map(func, iterable)

if __name__ == '__main__':
	main()
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# numba
import numba
@numba.jit
def do_somethin():
	pass
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# bodo
import bodo
@bodo.jit
def process_data():
	df = pd.read_parquet('my_data.pq')
	df2 = pd.DataFrame({'A': df.apply(lambda r: 0 if r.A == 0 else (r.B // r.A), axis=1)})
	df2.to_parquet('out.pq')
process_data()
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# modin
'''
pip install modin[ray|dask|mpi|all]

or

pip install modin
set MODIN_ENGINE=ray|dask

py -m modin.config
'''
import modin.pandas as pd
import os
os.environ['MODIN_ENGINE'] = 'dask'
os.environ['MODIN_ENGINE'] = 'ray'
os.environ['MODIN_MEMORY'] = '8000000000'

# alt way of setting engine
import ray
ray.init(num_cpus=4)
import modin.pandas as pd

def main():
	pass
if __name__ == '__main__':
	main()


# example
from timeit import default_timer as timer

import pandas as pd
t  = timer()
df = pd.read_csv('my_dataset.csv')
print(f'{timer()-t: .1f} s') # 24.7 s
import modin.pandas as pd 
t  = timer()
df = pd.read_csv('my_dataset.csv')
print(f'{timer()-t: .1f} s') # 6.6 s

import pandas as pd
df = pd.read_csv('my_dataset.csv')
t  = timer()
df = pd.concat([df for _ in range(5)])
print(f'{timer()-t: .1f} s') # 3.69 s
import modin.pandas as pd
df = pd.read_csv('my_dataset.csv')
t  = timer()
df = pd.concat([df for _ in range(5)])
print(f'{timer()-t: .1f} s') # 0.058 s
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# dask
# pip install dask[distributed]

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# swifter
'''
pip install swifter           # first time installation
pip install swifter[notebook] # with rich progress bar in jupyter notebooks
pip install swifter[groupby]  # with `groupby.apply()` functionality
'''
import swifter

def some_function(row):
	return row * 10

df['out'] = df['in'].swifter.apply(some_function)

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# cylon
'''
conda create -n cylon-dev -c cylondata pycylon python=3.7
conda activate cylon-dev

note: installation requires some work and conda is easiest
'''
from pycylon import DataFrame, CylonEnv, read_csv
from pycylon.net import MPIConfig
import pandas as pd

env = CylonEnv(config=MPIConfig())
df = read_csv('path/to/csv')
df = DataFrame(pd.read_csv('http://path/to/csv'))
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
