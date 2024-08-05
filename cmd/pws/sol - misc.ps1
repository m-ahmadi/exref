# add to path
$env:Path += ';./node_modules/.bin'
$env:Path = "$($env:Path);./node_modules/.bin"

# change window title
$Host.ui.RawUI.WindowTitle = 'mytitle'

# get first n line of command output
dir | select -first 3

# print table
$a = @()
$a += [pscustomobject]@{Name = 'John';  Job = 'Doctor'}
$a += [pscustomobject]@{Name = 'Jason'; Job = 'Engineer'}
$a += [pscustomobject]@{Name = 'Javad'; Job = 'Plumber'}
$a | Format-Table
