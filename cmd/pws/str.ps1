# concat
'foot' + 'ball'        # football

# backtick as word-wrap operator
"ini `n mini"   # \n
"ini `r`n mini" # \r\n
"ini `t mini"   # \t
'ini `n mini'   # no effect (only with double quotes)

# escape
'I''m good'         # single:    "I'm good"
"breaking ""news""" # double:    'breaking "news"'
"breaking `"news`"" # backtick:  ...

# special chars
"
	`0       null
	`a       alert bell/beep
	`b       backspace
	`e       escape (v6+)
	`f       form feed (use with printer output)
	`n       newline
	`r       carriage return
	`r`n     carriage return + newline
	`t       horizontal tab
	`u{x}    unicode escape sequence (v6+)
	`v       vertical tab (use with printer output)
"

# multiline string
"foo
bar"

'foo
bar
'

@'
foo
bar
'@

'foo '+
'bar' # 'foo bar'

# split
'a b c'.split()    # a,b,c
'a/b/c'.split('/') # a,b,c

# last char
$s = 'foo;'
$s.Substring($s.Length - 1) # ';'

# replace
'lord of the rings'.Replace('l', 'f')

# all
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
