# equality
2 -eq 4 # false
1 -eq 1 # true

# logical
1 -and 0 # false
1 -and 1 # true
0 -or 0  # false
0 -or 1  # true
-not 1   # false
!0       # true

# grouping + logical + equality
(1 -eq 1) -and (1 -eq 2) # false
-not (1 -eq 2)           # true
!(1 -eq 1)               # false

# comparison
32 -is 'int'          # type:        true
32 -is [Float]        # type:        false
'bar' -like '*ar'     # wildcard:    true
'a','b' -contains 'c' # containment: true
'foo' -match '\w+'    # regex:       true

# member access
'hellow world'.Length # 12
(gal echo).Name       # member access: echo
(gi *.*).Count        # ...: 9
$obj = ps explorer    # object return value
$obj.Name             # access prop
$obj.Kill()           # call method
[datetime]::Now       # static member

# subexpression
"Today: $(Get-Date)" # Today: 01/03/2020 02:03:02
'Today: $(Get-Date)' # 'Today: $(Get-Date)'

# call operator
&'Get-Executionpolicy' # Bypass

# assignment
$x = 'a'
$x += 'b'
$x += 'c'
$x # 'abc'

# pipe
dir | select FullName
ps explorer | gm
ps chrome | select Id
1,2,3 | %{ echo $_ }

# implicit print concatenation
$name = 'ball'
Write-Host 'foot'$name # football
echo 'foot'$name       # foot

# newline and semicolon are statement separators
$x = 2
$y = 3
$x = 2; $y = 3;

# single line comment
<#
	multiline comment
#>

# profile (autoruned script upon shell startup)
$PROFILE                   # default path
Test-Path $PROFILE         # has been created?
ni $PROFILE -ItemType File # create it
ri foo.txt                 # delete it

# execution policy
Get-ExecutionPolicy              # see current policy
Set-ExecutionPolicy Bypass       # allow execution of files
Set-ExecutionPolicy Unrestricted # ...

# powershell version
$PSVersionTable           # show powershell version info
$PSVersionTable.PSVersion # powershell version
(Get-Host).Version        # ...

# misc
Get-History                       # command history
Start-Transcript                  # start writing everything to file going forward (command and output)
Start-Transcript -Path C:\tmp.txt # ... different location
Stop-Transcript                   # ... stop writing