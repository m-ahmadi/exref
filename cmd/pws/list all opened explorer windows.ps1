$app = New-Object -COM 'Shell.Application'
$app.Windows() | Select-Object LocationURL

# another
function Get-WindowTitle($handle) {
  Get-Process |
    Where-Object { $_.MainWindowHandle -eq $handle } |
			Select-Object -Expand MainWindowTitle
}
$app = New-Object -COM 'Shell.Application'
$app.Windows() |
  Select-Object LocationURL, @{n='Title';e={Get-WindowTitle $_.HWND}}


# me
$app = New-Object -COM 'Shell.Application'
$list = $app.Windows() | Select-Object LocationURL
for ($i in $list) {
	# todo
}