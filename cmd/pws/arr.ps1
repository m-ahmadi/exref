1,2,3      # array: 1,2,3
@(1,2,3)   # casted array: 1,2,3
@(dir)     # array from dir output
,1         # array with one item
(1,2,3)[1] # index access: 2
1..4       # range operator: 1,2,3,4

# any comma-separated list is considered array:
$x = 'hello', 'world'
$x[0] # hello
$x[1] # world

# hash table (associative array):
$a = @{'Key'='Value';'Key2'='Value2'}
$a.key  # Value
$a.key2 # Value2

# map
$a = @("file1.txt", "file2.txt")
$b = $a | % { join-path "c:\temp" $_ }

$a = @("file1.txt","file2.txt")
$b = "c:\temp\"
$c = $a | % { $b + $_ }

'file1.txt','file2.txt','file3.txt' -replace '(^.+$)','C:\temp\$1'

# first/last item of array
'1','2','3' | select -Last 1  # 3
'1','2','3' | select -Last 2  # 2 3

'1','2','3' | select -First 1 # 1
'1','2','3' | select -First 2 # 1 2

$a = '1','2','3'
$a[-1] # 3 (last)
$a[-2] # 2

$a[0]  # 1 (first)
$a[1]  # 2

# join
$a = 'foo', 'bar', 'baz'
[string]$a   # 'foo bar baz'
$a -join '@' # 'foo@bar@baz'
ni file.txt -ItemType File -Value ((1,2,3) -join "`n") -Force
