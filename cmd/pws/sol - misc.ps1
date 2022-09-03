# add to path
$env:Path += ';./node_modules/.bin'
$env:Path = "$($env:Path);./node_modules/.bin"

# change window title
$Host.ui.RawUI.WindowTitle = 'mytitle'

# get first n line of command output
dir | select -first 3
