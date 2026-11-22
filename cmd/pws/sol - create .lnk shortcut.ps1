$desktop = [Environment]::GetFolderPath('Desktop')

$wsh = New-Object -ComObject WScript.Shell
$shortcut = $wsh.CreateShortcut("$desktop\ubuntu.lnk")

$shortcut.TargetPath = "$env:WINDIR\System32\wsl.exe"
$shortcut.Arguments = '-d Ubuntu --cd /mnt/d/xampp/htdocs'
# $shortcut.Hotkey = 'CTRL+ALT+`'
$shortcut.Save()
