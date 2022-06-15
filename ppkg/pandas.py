import pandas as pd # pip install pandas

pd.read_csv('file.csv', header=None, nrows=5, sep=',', ...)
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

DataFrame.copy(deep=True)
DataFrame.head(n=5)
DataFrame.describe(percentiles=None|[], include=None|'all'|[dtype,..], exclude=None|[dtype,..], datetime_is_numeric=False)
DataFrame.pop(item='')
DataFrame.fillna(value=None, method=None|'backfill|bfill|pad|ffill', axis=None|0|'', inplace=False, limit=None|0, downcast=None|{})
DataFrame.dropna(axis=0, how='any|all', ?thresh=None|0, subset=None|''|['',..], inplace=False)
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples

df = pd.DataFrame({'a':[1,2,3], 'b':[4,5,6]})
df['a']
df[ ['a','b'] ]

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

# label location
df = pd.DataFrame([ [1,2], [4,5], [7,8] ], columns=['a','b'], index=['foo','bar','baz'])
df.loc['foo'] # [1,2]

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

df1 = pd.DataFrame([ {'a':1,'b':2}, {'a':3,'b':4} ])
df2 = pd.DataFrame([ {'a':5,'b':6}, {'a':7,'b':8} ])
cat = pd.concat([df1, df2], ignore_index=True)
cat.columns # ['a', 'b']
cat.values  # [ [1,2], [3,4], [5,6], [7,8] ]

# replace missing value
df = pd.DataFrame([ [1,np.nan], [np.nan,4] ])
df = df.fillna(8)
df # [ [1,8], [8,4] ]

# remove missing value
df = pd.DataFrame([ [1, np.nan], [3,4] ])
df1 = df.dropna()          # [ [3,4] ]
df2 = df.dropna(how='all') # [ [1,nan], [3,4] ]

# stats - exponentially weighted calculations
s = pd.Series([1,2,3,4,5,6,7,8])
a = s.ewm(com=2).mean()         # alpha = 1 / (com + 1)
b = s.ewm(span=5).mean()        # alpha = 2 / (span + 1)
c = s.ewm(alpha=2/(5+1)).mean() # alpha = direct
a.tolist() == b.tolist() == c.tolist() # True
s.ewm(halflife=1.70951129129999999).mean() # almost equal to above

# stats - moving average
pd.Series([1,2,3,4,5,6,7,8]).rolling(5).mean() # [nan, nan, nan, nan, 3.0, 4.0, 5.0, 6.0]
