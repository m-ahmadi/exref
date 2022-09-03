# get
gpv HKCU:Environment Path               # specific value
(gp HKCU:Environment).Path              # ...
(gi HKCU:\Environment).GetValue('Path') # ...
gi HKCU:\Environment # all values under key
gi HKCU:Environment  # ...

# write path variable entries into file
ni path-sys.txt -ItemType File -Value ((gpv "HKLM:SYSTEM\CurrentControlSet\Control\Session Manager\Environment" Path).split(';') -join "`n")
ni path-usr.txt -ItemType File -Value ((gpv "HKCU:Environment" Path).split(';') -join "`n")

# add (REG_SZ by default)
sp -Path 'HKCU:Environment' -Name 'baz' -Value 'hi'
sp -Path 'HKCU:Environment' -Name 'foo' -Value '1' -Type DWord

# remove
rp -Path 'HKCU:Environment' -Name 'baz'

# through .net (abvrs not available)
[microsoft.win32.registry]::SetValue('HKEY_CURRENT_USER\Environment', 'foo', 'hello')
[microsoft.win32.registry]::SetValue('HKEY_CURRENT_USER\Environment', 'bar', 25)

# add entry to path variable
$rkey = 'HKCU:Environment'
$rval = 'Path'
$new = 'D:\foo'
$p = gpv $rkey $rval
$last = $p.Substring($p.Length - 1)
if ($last -ne ';') { $p += ';' }
$p += $new
sp -Path $rkey -Name $rval -Value $p -Type ExpandString # equal to `REG_EXPAND_SZ`
# or
$k='HKCU:Environment'; $v='Path'; sp -Path $k -Name $v -Value ((gpv $k $v)+';D:\foo') -Type ExpandString;
