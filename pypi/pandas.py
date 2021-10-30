import pandas as pd # pip install pandas

pd.read_csv('file.csv', header=None, nrows=5)

DataFrame.filter(items=None, like=None|'', regex=None|'', axis=None|0|'')

DataFrame.sort_values(by=''|['',..], axis=0, ascending=True|[True,..], inplace=False, kind='quicksort|mergesort|heapsort|stable', na_position='last|first', ignore_index=False, ?key=None)

DataFrameGroupBy.filter(func, dropna=True, *args, **kwargs)

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples

# filter by content
df = pd.DataFrame({'foo':[1,2,3,4,5,6], 'bar':[9,8,7,6,5,4]})
grouped = df.groupby('foo')
grouped.filter(lambda i: i['foo'] > 3)

# filter by labels (not on contents)
df = pd.DataFrame([[1,2,3], [4,5,6]], index=['mouse','rabbit'], columns=['one','two','three'])
df.filter(items=['one', 'three'])
df.filter(regex='e$', axis=1)
df.filter(like='bbi', axis=0)