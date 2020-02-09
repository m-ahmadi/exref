Get-Alias                          # show all aliases (cd: Set-Location cls: Clear-Host, ...)
Get-Alias echo                     # show alias for echo (if there's any)
Get-Alias -Definition Write-Output # show alias definition (oposite of above)
Get-Alias -D Get-Alias             # gal
gal -d Get-Command                 # gcm
gal -d Get-Help                    # does not exist

# alias			cmdlet  
help				Get-Help # not rly
gps ps			Get-Process
gal					Get-Alias
gcm					Get-Command
gm					Get-Member
clv					Clear-Variable
select			Select-Object

gi					Get-Item
ni					New-Item
rni ren			Rename-Item
ri del			Remove-Item
mi mv move	Move-Item
cpi cp copy	Copy-Item
sp					Set-ItemProperty
rp					Remove-ItemProperty
gc cat			Get-content
pushd				Push-Location
start saps	Start-Process

ft					Format-Table
gcb					Get-Clipboard