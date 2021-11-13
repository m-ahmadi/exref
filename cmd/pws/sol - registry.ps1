# get
gi HKCU:\Environment\...\...
gi HKCU:Environment\...\...

# add (REG_SZ by default)
sp -Path 'HKCU:Environment' -Name 'baz' -Value 'kir'
sp -Path 'HKCU:Environment' -Name 'foo' -Value '1' -Type DWord

# remove
rp -Path 'HKCU:Environment' -Name 'baz'

# through .net (abvrs not available)
[microsoft.win32.registry]::SetValue('HKEY_CURRENT_USER\Environment', 'foo', 'hello')
[microsoft.win32.registry]::SetValue('HKEY_CURRENT_USER\Environment', 'bar', 25)