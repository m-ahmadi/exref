Get-Alias                          # show all aliases (cd: Set-Location cls: Clear-Host, ...)
Get-Alias echo                     # show alias for echo (if there's any)
Get-Alias -Definition Write-Output # show alias definition (oposite of above)
Get-Alias -D Get-Alias             # gal
gal -d Get-Command                 # gcm
gal -d Get-Help                    # does not exist

# alias					cmdlet  
help						Get-Help # not rly
gps ps					Get-Process
gal							Get-Alias
gcm							Get-Command
gm							Get-Member
gci dir ls			Get-ChildItem
clv							Clear-Variable
select					Select-Object
sort						Sort-Object

gi							Get-Item
ni							New-Item
rni ren					Rename-Item
ri del					Remove-Item
mi mv move			Move-Item
cpi cp copy			Copy-Item
gp							Get-ItemProperty
sp							Set-ItemProperty
rp							Remove-ItemProperty
gpv							Get-ItemPropertyValue
gc cat					Get-content
pushd						Push-Location
start saps			Start-Process
kill spps				Stop-Process
wget iwr curl		Invoke-WebRequest
irm							Invoke-RestMethod
gsv							Get-Service

ft							Format-Table
fl							Format-List
fw							Format-Wide
gcb							Get-Clipboard

% foreach				ForEach-Object
? where					Where-Object