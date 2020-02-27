+ - * / %               # arithmetic
=  +=  -=  *=  /=  %=   # assignment
-eq -ne -gt -ge -lt -le # equality
-and -or -not ! -xor    # logical
> >> 2> 2>> 2>&1        # redirect
++ -- +$n -$n           # unary
-split -join            # string related
-as                     # convert type

# special
( )  # grouping
$( ) # subexpression
@( ) # array subexpression (creates array from whats inside)
&    # call/background(v6)
[ ]  # index/cast
-f   # format
|    # pipeline
..   # range
.    # member access
,    # binary/unary
::   # static member

# NOT an operator but an alias
%{}  # alias for ForEach-Object (gal %)
?{}  # alias for Where-Object (gal ?)

# comparison
-match -notmatch -replace # regex
-like -notlike            # wildcard
-is -isnot                # type
-bAND -bOR -bXOR -bNOT    # bitwise
-contains -notcontains -in -notin # containment

# some examples
(1 -eq 1) -and (1 -eq 2) # false
-not (1 -eq 2)           # true
!(1 -eq 1)               # false
2 -eq 4                  # false
32 -is 'int'             # true
32 -is [Float]           # false
'bar' -like '*ar'        # true
'a','b' -contains 'c'    # true
'foo' -match '\w+'       # true
'hellow world'.Length    # 12
(gal echo).Name          # echo
(gi *.*).Count           # 9
'Today: $(Get-Date)'     # 'Today: $(Get-Date)'
"Today: $(Get-Date)"     # Today: 01/03/2020 02:03:02
$c = 'Get-Executionpolicy'
& $c                     # Bypass
1,2,3                    # 1,2,3 (array)
@(1,2,3)                 # 1,2,3 (definitely array)
@(dir)                   # array from dir output
,1                       # array with one item
(1,2,3)[1]               # 2
[datetime]::now          # Friday, January 3, 2020 2:18:58 AM
1..4                     # 1,2,3,4

# automatic variables (read-only, don't write, though you can)
$$ # last line's last  token
$^ # last line's first token
$? # last command's exec status
$_ # current obj in pipeline
$args $null $true $false $foreach ...
# $_
1,2,3 | %{ write-host $_ }
1,2,3 | %{ write-host $PSItem }
1,2,3 | %{ Write-Host $_ }
1,2,3 | ?{ $_ -gt 1 }
