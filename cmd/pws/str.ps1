# concat
'foot' + 'ball'        # football
$name='ball'
Write-Host 'foot'$name # football
echo 'foot'$name       # foot
"$($name)ball"         # football
$x = 'ini '
$x += 'mini '
$x += 'miny'
$x                     # ini mini miny
$env:Path += ';./node_modules/.bin'
$env:Path = "$($env:Path);./node_modules/.bin"

# backtick (word-wrap operator)
"ini `n mini"   # \n
"ini `r`n mini" # \r\n
"ini `t mini"   # \t
'ini `n mini'   # no effect (only with double quotes)

# split
'a b c'.split()    # a,b,c
'a/b/c'.split('/') # a,b,c

# last char
$s = 'foo;'
$s.Substring($s.Length - 1) # ';'
