import multiprocessing as mp
import psutil as psu # pip install psutil

mp.cpu_count() # 4

psu.virtual_memory() # (total=, available=, percent=, used=, free=)
