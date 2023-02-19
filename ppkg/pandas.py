import pandas as pd # pip install pandas

pd.read_csv('file.csv', header='infer'|0|[0,..]|None, names=['',..], nrows=0, sep=',', index_col=None|0|''|False, parse_dates=False|[0|''|[],..], dtype=''|{}, ...)
pd.concat([df1, df2], ignore_index=False, sort=False, copy=True, ...)
pd.date_range(start=None|''|datetime, end=None|''|datetime, periods=None|0, freq='D'|DateOffset, tz=None|''|tzinfo, normalize=False, name=None|'', inclusive=None, **kwargs)

DataFrame(data=None|ndarray|[]|{}|DataFrame, index=None|[], columns=None|[], dtype=None, copy=None|bool)
DataFrame.columns
DataFrame.values
DataFrame.iloc[row, col]
DataFrame.loc[row, col]

DataFrame.filter(items=None, like=None|'', regex=None|'', axis=None|0|''|'columns')

DataFrame.sort_values(by=''|['',..], axis=0, ascending=True|[True,..], inplace=False, kind='quicksort|mergesort|heapsort|stable', na_position='last|first', ignore_index=False, ?key=None)

L = '' | 0 | [''|0,..]
DataFrame.drop(labels=None|L, axis=0, index=None|L, columns=None|L, level=None, inplace=False, errors='raise|ignore')

DataFrameGroupBy.filter(func, dropna=True, *args, **kwargs)

DataFrame.to_csv(path_or_buf=None|''|file_handle, sep=',', na_rep='', float_format=None|'', columns=None|[], header=True|['',..],
	index=True, index_label=None|''|[], mode='w', ?encoding='utf-8', compression='infer'|{}, quoting=csv.QUOTE_MINIMAL,
	quotechar='"', line_terminator=os.linesep, chunksize=None|0, date_format=None|'', doublequote=True, escapechar=None|'',
	decimal='.', errors='strict', storage_options=None|{})

DataFrame.to_json(path_or_buf=None, orient=None|'split|records|index|columns|values|table',
	date_format=None, double_precision=10, force_ascii=True, date_unit='ms', default_handler=None,
	lines=False, compression='infer', index=True, indent=None, storage_options=None)

DataFrame.copy(deep=True)
DataFrame.head(n=5)
DataFrame.describe(percentiles=None|[], include=None|'all'|[dtype,..], exclude=None|[dtype,..], datetime_is_numeric=False)
DataFrame.pop(item='')
DataFrame.fillna(value=None, method=None|'backfill|bfill|pad|ffill', axis=None|0|'', inplace=False, limit=None|0, downcast=None|{})
DataFrame.dropna(axis=0, how='any|all', ?thresh=None|0, subset=None|''|['',..], inplace=False)
DataFrame.join(other=DataFrame|Series|[DataFrame,..], on=None, how='left|right|outer|inner', lsuffix='', rsuffix='', sort=False)
DataFrame.equals(other=DataFrame|Series)
DataFrame.isna() | isnull()
DataFrame.all(axis=0|1|'index'|'columns'|None, bool_only=None|bool, skipna=True|bool, level=None|0|'', **kwargs)
DataFrame.any(*, ↑...)
DataFrame.reindex(labels=None|[], index=None|[], columns=None|[], axis=None|{}, method=None|'backfill/bfill|pad/ffill|nearest', copy=True, level=None|0|'', fill_value=np.NaN, limit=None|0, tolerance=None|0|[0,..])
DataFrame.isin(values=[]|Series|DataFrame|{})
DataFrame.count(axis=0, level=None|0|'', numeric_only=False)
DataFrame.value_counts(subset=None|[], normalize=False, sort=True, ascending=False, dropna=True)

DataFrame.sum(axis=None, skipna=True, level=None|0|'', numeric_only=None|bool, min_count=0, **kwargs)
DataFrame.mean(axis=<no_default>|'columns|index'|0, skipna=True, level=None|0|'', numeric_only=None|bool, **kwargs)
DataFrame.div(other=0|[]|Series|DataFrame, axis='columns|index'|0, level=None|0|'', fill_value=None)
DataFrame.add(↑...)
DataFrame.mul(↑...)
DataFrame.min(axis=<no_default>, skipna=True, level=None|0|'', numeric_only=None|bool, **kwargs)

Series.value_counts(normalize=False, sort=True, ascending=False, bins=None|0, dropna=True)
Series.count(level=None|0|'')

Index.duplicated(keep='first|last'|False)
Index.union(other=Index|[], sort=None|bool)

DatetimeIndex(data=None, freq, tz=None, normalize=False, closed=None, ambiguous='raise', dayfirst=False, yearfirst=False, dtype=None, copy=False, name=None)

# missing type
pd.NA
pd.NaT
np.nan
None

# settings
# https://pandas.pydata.org/pandas-docs/stable/user_guide/options.html#available-options
pd.options.display.max_rows # 15
pd.options.display.max_rows = 999
pd.set_option('display.max_rows', 100)
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples

# creation
df = pd.DataFrame({'a':[1,2,3], 'b':[4,5,6]})
df2 = pd.DataFrame([ [1,4], [2,5], [3,6] ], columns=['a','b'])
df == df2 # True ...

df = pd.DataFrame(0, index=range(6), columns=range(6)) # 5x5 matrix init to 0

s = pd.Series([1,2,3,4])
s = pd.Series([1,2,3], index=['a','b','c'])

# index access
# https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html
df = pd.DataFrame({'a':[1,2,3], 'b':[4,5,6]})
df.a
df['a']
df[ ['a','b'] ]

df = pd.DataFrame([ [1, 2, 3],
										[4, 5, 6],
										[7, 8, 9] ])
df[0]       # [1,4,7]
df[ [0] ]   # ...
df[1]       # [2,5,8]
df[ [1,2] ] # [ [2,3], [5,6], [8,9] ]

# iteration
s = pd.Series([4,7,9])
[*s.items()]     # [ [0,4], [1,7], [2,9] ]
[*s.iteritems()] # ... v1.5 deprecated

# copy
s1 = pd.Series([1, 2])
s2 = s1.copy(deep=False) # data & index shared with orig
s2[0] = 3
s1[0] # 3
s1.values is s2.values # True
s1.index is s2.index   # True

s1 = pd.Series([1, 2])
s2 = s1.copy(deep=True) # has own copy of data & index
s2[0] = 3
s1[0] # 1
s1.values is s2.values # False
s1.index is s2.index   # False

s1 = pd.Series([[1, 2], [3, 4]])
s2 = s1.copy(deep=True) # ↑... but not for nested objects (they still share ref)
s2[0][0] = 7
s0[0][0] # 7

# equality
s1 = pd.Series([1,2,3])
s2 = pd.Series([1,2,3])
s1.equals(s2)        # True
np.all(s1 == s2)     # ...
s1.equals(s1.copy()) # ...

df1 = pd.DataFrame({'a':[1,3], 'b':[2,4]})
df2 = pd.DataFrame({'a':[1,3], 'b':[2,4]})
df1.equals(df2)        # True
np.all(df1 == df2)     # ...
df1.equals(df2.copy()) # ...

# df from list of rows
df = pd.DataFrame([ [1,2], [3,4] ])
df = pd.DataFrame([ ['a','b'], [1,2], [3,4] ])
df.a # err
df = pd.DataFrame([ [1,2], [3,4] ], columns=['a','b'])
df.a # [1,3]

# dict with num values
d = {'a':1, 'b':2}
df = pd.DataFrame(d)            # err
df = pd.DataFrame(d, index=[0]) # ok
df = pd.DataFrame([d])          # ok

# sort
df = pd.DataFrame([ {'a':1,'b':4}, {'a':2,'b':4}, {'a':3,'b':5} ])
_sorted = df.sort_values(by='b', ascending=False)
_sorted.iloc[0]  # {'a': 3, 'b': 5}  (         top item)
_sorted.index[0] # 2                 (index of top item)

# filter
df = pd.DataFrame({'a':[1,2,3,4,5,6], 'b':[9,8,7,6,5,4]})
df[df['a'] > 3]                              # {'a': [4,5,6], 'b': [6,5,4]}
df.groupby('a').filter(lambda i: i['a'] > 3) # ...

# filter - boolean indexing
s = pd.Series([1,2,3,4,5,6,7,8,9,10])
s[s > 7]             # [8,9,10]
s[(s < 7) & (s > 4)] # and:  [5,6]
s[(s < 4) | (s < 5)] # or:   [1,2,3,4]
s[~(s > 4)]          # not:  [1,2,3,4]

df = pd.DataFrame([ [1,5],
										[2,6],
										[3,7],
										[4,8] ], columns=['a','b'])
df[ (df['a'] < 3) & (df['b'] < 7) ] # { 'a': [1,2], 'b': [5,6] }
df[ df['a'].map(lambda i: i > 3) ]  # { 'a': [4],   'b': [8]   }

# filter - consider all columns (like `subset` or `how`)
df = pd.DataFrame([ [0,0,1],
										[0,0,0],
										[0,0,0] ])
df[(df == 0).all(axis=1)].shape[0] # 2 (2 rows contain 0 in all cols)

n = float('nan')
df = pd.DataFrame([ [n,n,1],
										[n,n,n],
										[n,n,n] ])
df[df.isna().all(axis=1)].shape[0] # 2 (2 rows contain nan in all cols)

# filter - consider specific column
df = pd.DataFrame([ [1,1,1],
										[1,1,1],
										[1,0,1] ], columns=['a','b','c'])
df[df['b'] == 0].shape[0]   # 1 (1 row with col b equal to 0)

n = float('nan')
df = pd.DataFrame([ [1,1,1],
										[1,1,1],
										[1,n,1] ], columns=['a','b','c'])
df[df['b'].isna()].shape[0] # 1 (1 row with col b equal to nan)

# filter - truthy logic - all
pd.Series([True, True]).all()         # True
pd.Series([True, False]).all()        # False
pd.Series([]).all()                   # True
pd.Series([np.nan]).all()             # True
pd.Series([np.nan]).all(skipna=False) # ...

df = pd.DataFrame([ [True, True],
										[True, False] ], columns=['a','b'])
df.all()               # { 'a': True, 'b': False }
df.all(axis='columns') # [True, False]
df.all(axis=None)      # False

# filter - truthy logic - any
pd.Series([False, False]).any()       # False
pd.Series([True, False]).any()        # True
pd.Series([]).any()                   # False
pd.Series([np.nan]).any()             # False
pd.Series([np.nan]).any(skipna=False) # True

df = pd.DataFrame([ [1,0,0],
										[2,2,0] ], columns=['a','b','c'])
df.any()               # { 'a': True, 'b': True, 'c': False }
df.any(axis='columns') # [True, True]
df.any(axis=None)      # True
pd.DataFrame([]).any() # []

# filter by labels (not on values)
df = pd.DataFrame([[1,2,3], [4,5,6]], index=['mouse','rabbit'], columns=['one','two','three'])
df.filter(items=['one', 'three'])
df.filter(regex='e$', axis=1)
df.filter(like='bbi', axis=0)

# isin
df = pd.DataFrame({'a': [1,2,3], 'b': [3,4,5]})
df.isin([3,4]) # { 'a': [False,False,True], 'b': [True,True,False] }

# drop
df = pd.DataFrame([ [1,2], [3,4], [5,6], [7,8] ])
df.drop([2,3]) # [ [1,2], [3,4] ]

df = pd.DataFrame({'a': [1,2,3,4], 'b':[5,6,7,8], 'c':[9,10,11,12]})
df.drop(columns='c') # { 'a': [1,2,3,4], 'b':[5,6,7,8] }

df = pd.DataFrame({'x':[1,2,3], 'y':[5,6,7]}, index=['a','b','c'])
df.drop(columns='x') # {            'y':[5,6,7] }
df.drop('x', axis=1) # ...
df.drop('a')         # { 'x':[2,3], 'y':[6,7]   }
df.drop(['b','c'])   # { 'x':[1],   'y':[5]     }

# to csv
pd.DataFrame([ [1,2], [3,4], [5,6] ]).to_csv(index=False, header=None) # '1,2\r\n3,4\r\n5,6\r\n'
pd.DataFrame([ [1,2], [3,4], [5,6] ]).to_csv('myfile.csv', index=False, header=None)
pd.DataFrame([ [1,2], [3,4], [5,6] ]).to_csv('myfile.txt', sep='\t', index=False)

# to json
pd.Series([1,2,3]).to_json('out.json', orient='values')     # [1,2,3]
pd.Series([1,2,3]).to_json('out.json', orient='index')      # {"0":1,"1":2,"2":3}
pd.DataFrame([1,2,3]).to_json('out.json', orient='columns') # {"0":{"0":1,"1":2,"2":3}}

# count of csv rows
df = pd.DataFrame([ [1,2], [3,4], [5,6] ])
df.shape[0]   # 3
len(df.index) # 3
df.shape      # (3, 2)
df.size       # 6

# index of value
df = pd.DataFrame({'foo': [1,2,3,4]})
df['foo'].tolist().index(4)          # 3
df.index[ df['foo'] == 4 ].tolist()  # [3]
np.where(df['foo'] == 4)[0].tolist() # [3]

# int location
df = pd.DataFrame([ [1,1,1], [2,2,2], [4,4,4] ])
df.iloc[0:1] # 1  1  1
df.iloc[-1:] # 4  4  4
# ... single value
df.iat[0,0] # 1
df.iat[1,0] # 2
df.iat[2,0] # 4

# label location
df = pd.DataFrame([ [1,2], [4,5], [7,8] ], columns=['a','b'], index=['foo','bar','baz'])
df.loc['foo'] # [1,2]
# ... single value
df.at['foo','a'] # 1
df.at['bar','a'] # 4
df.at['baz','a'] # 7
# ... another thing
df = pd.DataFrame(columns=['a','b'])
df.loc[0] = [1,2]
df.loc[1] = [3,4]
df # [ [1,2], [3,4] ]

# row & col indexing
df = pd.DataFrame([ [11, 21, 31],
										[12, 22, 32],
										[13, 23, 33],
										[14, 24, 34],
										[15, 25, 35] ], index=range(5), columns=range(3))
df.loc[0]            # [11, 21, 31]
df.loc[0, 0]         # [11]
df.loc[0:1, 0]       # [11, 12]
df.loc[[0,1], 0]     # ...
df.iloc[0:2, 0]      # ...
df.loc[0, 0:1]       # [11, 21]
df.loc[0, [0,1]]     # ...
df.iloc[0, 0:2]      # ...
df.loc[0:1, 0:1]     # [ [11,21], [12,22] ]
df.loc[[0,1], [0,1]] # ...

# first n rows
df = pd.DataFrame([1,2,3,4,5,6,7,8,9])
df1 = df.head(4)
df1 # 1 2 3 4

# convert dict-like df to list
df = pd.DataFrame([ [1,2], [3,4] ], columns=['a','b'])
df.values.tolist()     # [ [1,2], [3,4] ]
df.to_numpy().tolist() # ...

df = pd.DataFrame([ {'a':1,'b':2}, {'a':3,'b':4} ])
df.values.tolist()     # [ [1,2], [3,4] ]
df.to_numpy().tolist() # ...
df.columns.tolist()    # ['a','b']

# concat two dfs
df1 = pd.DataFrame([ ['a','b'], [1,2], [3,4] ])
df2 = pd.DataFrame([ ['a','b'], [5,6], [7,8] ])
cat = pd.concat([df1, df2])
cat # [ ['a','b'], [1,2], [3,4], ['a','b'], [5,6], [7,8] ]
cat = pd.concat([df1, df2], ignore_index=True)

df1 = pd.DataFrame({'a':[1,3],'b':[2,4]})
df2 = pd.DataFrame({'a':[5,7],'b':[6,8]})
cat = pd.concat([df1, df2], ignore_index=True)
cat # { 'a':[1,3,5,7], 'b':[2,4,6,8] }

# concat - series
s1 = pd.Series([4,5,6])
s2 = pd.Series([7,8,9])
cat = pd.concat({'a':s1, 'b':s2}, axis=1)
cat # { 'a':[4,5,6], 'b':[7,8,9] }

s1 = pd.Series([4,5,6], index=[0,1,2])
s2 = pd.Series([7,8,9], index=[3,4,5])
cat = pd.concat({'a':s1, 'b':s2}, axis=1)
cat # { 'a':[4,5,6,nan,nan,nan], 'b':[nan,nan,nan,7,8,9] }

# assign
df = pd.DataFrame({'a':[2,4]})
df1 = df.assign(bbb=lambda x: x.a * 4)
df1 # {'a':[2,4], 'bbb':[4,16]}

# fillna (replace missing value)
df = pd.DataFrame([ [1,np.nan], [np.nan,4] ])
df = df.fillna(8)
df # [ [1,8], [8,4] ]

# dropna (remove missing value)
na = floor('nan')
df1 = pd.DataFrame([ [1, na],  [3, 4] ])
df2 = pd.DataFrame([ [na, na], [2, na] ])
df1.dropna()          # [ [3,4] ]
df1.dropna(how='all') # [ [1,na], [3,4] ]
df2.dropna(how='all') # [ [2,na] ]

# dropna - consider specific column (drop row only if that column contains na)
na = float('nan')
df = pd.DataFrame([ [1,  2],
										[3,  na],
										[na, 6] ], columns=['a','b'])
df.dropna(subset=['a']) # [ [1,2], [3,na] ]
df.dropna(subset=['b']) # [ [1,2], [na,6] ]

# searchsorted (index of where to insert each num so serie remains sorted)
s = pd.Series([1,2,3])
s.searchsorted(4)          # 3
s.searchsorted([1.5, 2.5]) # [1,2]

# join - simple
df1 = pd.DataFrame({'a': [1,2,3]})
df2 = pd.DataFrame({'b': [9,8,7]})
df3 = df1.join(df2) # { 'a':[1,2,3], 'b':[9,8,7] }
df3 = df2.join(df1) # { 'b':[9,8,7], 'a':[1,2,3] }

# join - index-based
df1 = pd.DataFrame({'a': [1,2,3]}, index=['i0','i1','i2'])
df2 = pd.DataFrame({'b': [9,8]},   index=['i0','i1'])
df1.join(df2)              # { 'a':[1,2,3],   'b':[9,8,NaN] }
df1.join(df2, how='right') # { 'a':[1,2],     'b':[9,8] }
df2.join(df1)              # { 'b':[9,8],     'a':[1,2] }
df2.join(df1, how='right') # { 'b':[9,8,NaN], 'a':[1,2,3] }

# min
df = pd.DataFrame([ [1,4],
										[7,5],
										[3,6] ], columns=['a','b'])
df.min(axis=0) # {'a':1, 'b':4}
df.min(axis=1) # [1,5,3]

# min - skipna
na = float('nan')
df = pd.DataFrame([ [1,3],
										[2,na] ], columns=['a','b'])
df.min(axis=0)               # {'a':1, 'b':3}
df.min(axis=0, skipna=False) # {'a':1, 'b':na}
df.min(axis=1)               # [1,2]
df.min(axis=1, skipna=False) # [1,na]

# index
idx = pd.Index(['a','b','c','c'])
idx.duplicated(keep='first') # [False, False, False, True]
idx.duplicated(keep='last')  # [False, False, True,  False]
idx.duplicated(keep=False)   # [False, False, True,  True]

# index - datetime
import datetime as dt
idx = pd.DatetimeIndex([dt.datetime(2022,1,1), dt.datetime(2022,1,2), dt.datetime(2022,1,3)])
df = pd.DataFrame({'foo': [1,2,3]}, index=idx)

# index - reindex
df = pd.DataFrame({'a':[4,5,3]}, index=[0,1,2])
df2 = df.reindex([2,0,1,3])
df  # {'a':[4,5,3]}
df2 # {'a':[3,4,5,nan], 'index':[2,0,1,3]}

# index - reindex - method of how to fill holes in new index (holes in orig index are untouched)
idx1 = pd.date_range(start='2022/1/4', end='2022/1/6')
idx2 = pd.date_range(start='2022/1/2', end='2022/1/8')
na = float('nan')
df = pd.DataFrame({'prices': [1,na,2]}, index=idx1)
df.reindex(idx2)                   # [na,na,  1,na,2,  na,na]    don't fill
df.reindex(idx2, method='bfill')   # [1,1,    1,na,2,  na,na]    fill with next    valid
df.reindex(idx2, method='ffill')   # [na,na,  1,na,2,  2,2]      fill with prev    valid
df.reindex(idx2, method='nearest') # [1,1,    1,na,2,  2,2]      fill with nearest valid

# index - union
idx1 = pd.Index([1,2,3,4])
idx2 = pd.Index([3,4,5,6])
idx1.union(idx2) # [1,2,3,4,5,6]

# read_csv - DatetimeIndex
''' file.csv
,count
2022-01-01 08:15:00,100
2022-01-01 08:45:00,150
2022-01-01 09:15:00,200
'''
df = pd.read_csv('file.csv', index_col=0, parse_dates=True)
df.index   # [Timestamp('2022-01-01 08:15:00'), Timestamp('2022-01-01 08:45:00'), Timestamp('2022-01-01 09:15:00')]
df.values  # [100, 150, 200]
df.columns # ['count']

# misc - count
s = pd.Series([1,2,3,3,4,4,4, np.nan])
s.value_counts() # pd.Series([3,2,1,1], index=[4,3,1,2])
s.count() # 7

df = pd.DataFrame({'a': [1,2,3,3,4,4,4]})
df.value_counts() # pd.Series([3,2,1,1], index=[4,3,1,2])
df.count()        # {'a':4, 'b':4}

s = pd.Series([0,0,1,1,1,1])
s.value_counts()                          # [ 2,  4]
s.value_counts(normalize=True)            # [.3, .6] relative frequency (count of item / sum of counts)
s.value_counts() / s.value_counts().sum() # ...

# misc - date range
pd.date_range(start='2022/1/1', periods=4)      # ['2022-01-01', '2022-01-02', '2022-01-03', '2022-01-04']
pd.date_range(start='2022/1/1', end='2022/1/4') # ...
pd.date_range(end='2022/1/4', periods=4)        # ...

# math
df = pd.DataFrame({'a':[2,4,6], 'b':[8,10,12]})
df + 1                        # {'a':[3,5,7], 'b':[9,11,13]}
df.add(1)                     # ...
df.div(2)                     # {'a':[1,2,3], 'b':[4,5,6]}
df - [1,3]                    # {'a':[1,3,5], 'b':[5,7,9]}
df.sub([1,2], axis='columns') # ...

df2 = pd.DataFrame({'a': [2,2,3]})
df * df2                       # {'a':[2,4,9], 'b':[NaN,NaN,NaN]}
df.mul(df2, fill_value=0)      # {'a':[2,4,9], 'b':[0,0,0]}

# math - sum
df = pd.DataFrame({'a':[1,1,1], 'b':[1,1,1]})
df.sum()       # [3,3]
df.sum(axis=1) # [2,2,2]

df = pd.DataFrame([ [1,1,1],
										[1,1,1] ])
df.sum()       # [2,2,2]
df.sum(axis=1) # [3,3]

# math - div
df = pd.DataFrame([ [6,6,6],
										[6,6,6] ])
df.div(2)                   # [ [3,3,3], [3,3,3] ]
df.div([2,2,3])             # [ [3,3,2], [3,3,2] ]
df.div([2,3], axis=0)       # [ [3,3,3], [2,2,2] ]
df.div([2,3], axis='index') # ...

# math - mean
df = pd.DataFrame([ [1,2],
										[1,2],
										[1,2]])
df.mean()       # [1, 2]
df.mean(axis=1) # [1.5, 1.5, 1.5]

# stats - exponentially weighted calculations
s = pd.Series([1,2,3,4,5,6,7,8])
a = s.ewm(com=2).mean()         # alpha = 1 / (com + 1)
b = s.ewm(span=5).mean()        # alpha = 2 / (span + 1)
c = s.ewm(alpha=2/(5+1)).mean() # alpha = direct
a.tolist() == b.tolist() == c.tolist() # True
s.ewm(halflife=1.70951129129999999).mean() # almost equal to above

# stats - moving average
pd.Series([1,2,3,4,5,6,7,8]).rolling(5).mean() # [nan, nan, nan, nan, 3.0, 4.0, 5.0, 6.0]
