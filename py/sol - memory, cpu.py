import os
import multiprocessing as mp
import psutil as psu # pip install psutil

os.cpu_count() | mp.cpu_count() # 4

psu.virtual_memory() # (total=, available=, percent=, used=, free=)
# https://psutil.readthedocs.io/en/latest/#psutil.virtual_memory
