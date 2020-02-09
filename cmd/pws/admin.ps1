Get-Process                              # show all processes
Get-Process system                       # show the process named system
Get-Process system | Get-Member          # list all members of a process
Get-Service "ap*"                        # list services with filter

gcm -Module PackageManagement   # list of commands related to package management
Get-PackageSource               # powershellgallery by default
Get-PackageSource | select *    # ... full detail

# register a package source
Register-PackageSource -Name NuGet -ProviderName NuGet -Location https://www.nuget.org/api/v2

Register-PackageSource -Name chocolatey -ProviderName Chocolatey -Location http://chocolatey.org/api/v2 #or
Register-PackageSource -Name chocolatey -Location http://chocolatey.org/api/v2 -Provider PSModule -Trusted -Verbose

# find package (needs package-provider)
Find-Package -Name Sysinternals

# install package
Find-Package -Name Firefox | Install-Package # or
Install-Package -Name GoogleChrome # or
Install-Package Sysinternals

Uninstall-Package Sysinternals

# ?
Set-PackageSource -Name chocolatey -ProviderName chocolatey
Import-Module -Name OneGet