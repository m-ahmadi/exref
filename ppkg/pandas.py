import pandas as pd # pip install pandas

pd.read_csv('file.csv', header='infer'|0|[0,..]|None, names=['',..], nrows=0, sep=',', index_col=None|0|''|False, parse_dates=False|[0|''|[],..], dtype=''|{}, ...)
pd.concat([df1, df2], ignore_index=False, sort=False, copy=True, ...)

DataFrame(data=None, index=None, columns=None, dtype=None, copy=None)
DataFrame.columns
DataFrame.values

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
DataFrame.join(other=DataFrame|Series|[DataFrame,..], on=None, how='left|right’|outer|inner', lsuffix='', rsuffix='', sort=False)

DataFrame.sum(axis=None, skipna=True, level=None|0|'', numeric_only=None|bool, min_count=0, **kwargs)
DataFrame.div(other=0|[]|Series|DataFrame, axis='columns'|0, level=None|0|'', fill_value=None)
DataFrame.add(↑...)
DataFrame.mul(↑...)

Index.duplicated(keep='first|last'|False)

DatetimeIndex(data=None, freq, tz=None, normalize=False, closed=None, ambiguous='raise', dayfirst=False, yearfirst=False, dtype=None, copy=False, name=None)

# missing type
pd.NA
pd.NaT
np.nan
None
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples

df = pd.DataFrame({'a':[1,2,3], 'b':[4,5,6]})
df.a
df['a']
df[ ['a','b'] ]

df = pd.DataFrame([ [1,2,3], [4,5,6], [7,8,9] ])
df[ [0] ]   # [1,4,7]
df[ [1,2] ] # [ [2,5,8], [3,6,9] ]

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

# filter by content
df = pd.DataFrame({'foo':[1,2,3,4,5,6], 'bar':[9,8,7,6,5,4]})
grouped = df.groupby('foo')
grouped.filter(lambda i: i['foo'] > 3)

# filter by labels (not on contents)
df = pd.DataFrame([[1,2,3], [4,5,6]], index=['mouse','rabbit'], columns=['one','two','three'])
df.filter(items=['one', 'three'])
df.filter(regex='e$', axis=1)
df.filter(like='bbi', axis=0)

# drop
df = pd.DateFrame([ [1,2], [3,4], [5,6], [7,8] ])
df = df.drop([2,3])
df # [ [1,2], [3,4] ]

df = pd.DataFrame({'a': [1,2,3,4], 'b':[5,6,7,8], 'c':[9,10,11,12]})
df.drop(columns='c')
df # { 'a': [1,2,3,4], 'b':[5,6,7,8] }

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

# replace missing value
df = pd.DataFrame([ [1,np.nan], [np.nan,4] ])
df = df.fillna(8)
df # [ [1,8], [8,4] ]

# remove missing value
df = pd.DataFrame([ [1, np.nan], [3,4] ])
df1 = df.dropna()          # [ [3,4] ]
df1 = df.dropna(how='all') # [ [1,nan], [3,4] ]

df = pd.DataFrame({'a':[1,2,np.nan], 'b': [4,np.nan,6]})
df1 = df.dropna(subset=['a']) # { 'a': [1,2],   'b': [4,nan] }
df1 = df.dropna(subset=['b']) # { 'a': [1,nan], 'b': [4,6] }

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
df = pd.DataFrame({'a':[1,2,3,4], 'b':[5,6,7,8]})
df.min(axis=0) # {'a':[1], 'b':[5]}
df.min(axis=1) # [1,2,3,4]

pd.DataFrame({'a':[2,2], 'b':[1,3]}).min(axis=1) # [1,2]

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
df = pd.DataFrame({'a':[3,4,5]}, index=[0,1,2])
df2 = df.reindex([1,2,0])
df  # {'a':[3,4,5]}
df2 # {'a':[4,5,3]}

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

# math
df = pd.DataFrame({'a':[1,2,3], 'b':[9,8,7]})
df + 1                         # {'a':[2,3,4], 'b':[10,9,8]}
df.add(1)                      # ...
df.div(2)                      # {'a':[0.5, 1, 1.5], 'b':[4.5, 4, 3.5]}
df - [1,3]                     # {'a':[0,1,2], 'b':[6,5,4]}
df.sub([1, 2], axis='columns') # ...

df2 = pd.DataFrame({'a': [2,2,3]})
df * df2                       # {'a':[2,4,9], 'b':[NaN,NaN,NaN]}
df.mul(df2, fill_value=0)      # {'a':[2,4,9], 'b':[0,0,0]}

# math - sum
df = pd.DataFrame({'a':[1,1,1], 'b':[1,1,1]})
df.sum()       # [3,3]
df.sum(axis=1) # [2,2,2]

# stats - exponentially weighted calculations
s = pd.Series([1,2,3,4,5,6,7,8])
a = s.ewm(com=2).mean()         # alpha = 1 / (com + 1)
b = s.ewm(span=5).mean()        # alpha = 2 / (span + 1)
c = s.ewm(alpha=2/(5+1)).mean() # alpha = direct
a.tolist() == b.tolist() == c.tolist() # True
s.ewm(halflife=1.70951129129999999).mean() # almost equal to above

# stats - moving average
pd.Series([1,2,3,4,5,6,7,8]).rolling(5).mean() # [nan, nan, nan, nan, 3.0, 4.0, 5.0, 6.0]
