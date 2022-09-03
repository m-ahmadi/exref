# module vs package
# Install-Module      powershell modules only
# Install-Package     other types of packages

Get-Module -ListAvailable              # list installed modules
Get-Command -Module foo                # find all commands in a module

Install-Module foo -Scope CurrentUser  # install module
Uninstall-Module foo -Force            # uninstall module

Import-Module foo                      # import a module (that is not installed)
Remove-Module foo                      # remove module from current sessison

Get-PackageSource                      # view package sources (powershellgallery by default)
Get-PackageSource | select *           # ... full detail

Find-Package Sysinternals              # find package (needs package-provider)

Install-Package Sysinternals           # install package
Install-Package GoogleChrome           # ...
Find-Package Firefox | Install-Package # ...

Uninstall-Package Sysinternals         # uninstall package

Set-PackageSource -Name chocolatey -ProviderName chocolatey # change package source

# register a package source
Register-PackageSource -Name NuGet -ProviderName NuGet -Location https://www.nuget.org/api/v2
Register-PackageSource -Name chocolatey -ProviderName Chocolatey -Location http://chocolatey.org/api/v2 # or
Register-PackageSource -Name chocolatey -Location http://chocolatey.org/api/v2 -Provider PSModule -Trusted -Verbose
