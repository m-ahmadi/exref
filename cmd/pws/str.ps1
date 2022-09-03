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

# replace
'lord of the rings'.Replace('l', 'f')


$str.Length
$str.Clone()
$str.CompareTo()
$str.Contains()
$str.CopyTo()
$str.EndsWith()
$str.Equals()
$str.GetEnumerator()
$str.GetHashCode()
$str.GetType()
$str.GetTypeCode()
$str.IndexOf()
$str.IndexOfAny()
$str.Insert()
$str.IsNormalized()
$str.LastIndexOf()
$str.LastIndexOfAny()
$str.Normalize()
$str.PadLeft()
$str.PadRight()
$str.Remove()
$str.Replace()
$str.Split()
$str.StartsWith()
$str.Substring()
$str.ToBoolean()
$str.ToByte()
$str.ToChar()
$str.ToCharArray()
$str.ToDateTime()
$str.ToDecimal()
$str.ToDouble()
$str.ToInt16()
$str.ToInt32()
$str.ToInt64()
$str.ToLower()
$str.ToLowerInvariant()
$str.ToSByte()
$str.ToSingle()
$str.ToString()
$str.ToType()
$str.ToUInt16()
$str.ToUInt32()
$str.ToUInt64()
$str.ToUpper()
$str.ToUpperInvariant()
$str.Trim()
$str.TrimEnd()
$str.TrimStart()
$str.Chars()
