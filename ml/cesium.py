import cesium

from cesium import datasets
from cesium import featurize.featurize_time_series
from sklearn.model_selection import train_test_split

eeg = datasets.fetch_andrzejak()

features_to_use = [
	'amplitude',
	'percent_beyond_1_std',
	'percent_close_to_median',
	'skew',
	'max_slope'
]

fset_cesium = featurize_time_series(
	times=eeg['times'],
	values=eeg['measurements'],
	errors=None,
	features_to_use=features_to_use,
	scheduler=None
)

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# windows install

# 1. download "mingw" from https://winlibs.com/#download-release
# 2. extract to "c:\mingw64"
# 3. add "c:\mingw64\bin" to path
# 4. make file: "c:\python39\Lib\distutils\distutils.cfg"  (delete afterwards)
# 5. put following in it:
'''
[build]
compiler=mingw32

[build_ext]
compiler=mingw32
'''
# pip install cesium
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@