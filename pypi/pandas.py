import pandas as pd # pip install pandas

pd.read_csv('file.csv', header=None, nrows=5, sep=',', ...)

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
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples

df = pd.DataFrame({'a':[1,2,3], 'b':[4,5,6]})
df['a']
df[ ['a','b'] ]

# sort
df = pd.DataFrame([ {'a':1,'b':4}, {'a':2,'b':4}, {'a':3,'b':5} ])
sorted = df.sort_values(by='b', ascending=False)
sorted.index[0] # 2 (index of top item)

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

# to csv
pd.DataFrame([ [1,2], [3,4], [5,6] ]).to_csv(index=False, header=None) # '1,2\r\n3,4\r\n5,6\r\n'
pd.DataFrame([ [1,2], [3,4], [5,6] ]).to_csv('myfile.csv', index=False, header=None)

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