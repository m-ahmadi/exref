Get-Process                     # show all processes
Get-Process system              # show the process named system
Get-Process system | Get-Member # list all members of a process
Get-Process | ?{$_.MainWindowtitle} | select Id,Name,MainWindowtitle

Get-Service "ap*"               # list services with filter
Stop-Process -Name "Explorer"   # taskkill

# install .exe as service (like nssm or winsw, not tested)
New-Service -Name 'My Service' -BinaryPathName 'my.exe'
$params = @{
	Name = 'MyService'
	BinaryPathName = 'path/to/exe'
	DisplayName = 'My Service'
	StartupType = 'Automatic'
	Description = 'Description of my service'
}
New-Service @params

# control network adapters
Get-NetAdapter                                 # list all adapters
Disable-NetAdapter -Name "foo" -Confirm:$false # disable adapter
Enable-NetAdapter -Name "foo" -Confirm:$false  # enable adapter
