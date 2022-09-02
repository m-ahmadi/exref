ni foo.txt -ItemType File          # create file
ni foo.txt -Type File              # ... though -Type isn't in docs
ni foo -ItemType Directory         # create dir
ni a1,'a 2',a3 -ItemType Directory # create multiple dirs
rni a.txt -NewName b.txt           # rename file
ri foo.txt                         # delete file
ri 'f o'                           # delete dir
ri mydir -Force -Recurse           # ... & all subdirs
mi a.txt -Destination E:\          # move file or dir
mi a.txt,b.txt -D E:\              # ... multiple
cpi C:\file.txt -Destination E:\   # copy file
cpi C:\foo -D E:\ -Recurse         # copy dir and everything inside

# write file with content                          encoding:
ni file.js -ItemType File -Value "some content"  # UTF-8
"some content" | Out-File main.js -Encoding utf8 # UTF-8-BOM
echo "some content" > file.js                    # UCS-2 LE BOM

# read file
$str = gc index.js -Encoding UTF8 | Out-String

# read and parse .json file
$obj = gc file.json -Encoding UTF8 | Out-String | ConvertFrom-Json
$obj.key

# .lnk shortcut - create 
$WshShell = New-Object -ComObject WScript.Shell;
$Shortcut = $WshShell.CreateShortcut('foo.lnk');
$Shortcut.TargetPath = '%comspec%';
$Shortcut.Arguments = '/k echo hello';
# $Shortcut.Description
# $Shortcut.FullName
# $Shortcut.Hotkey
# $Shortcut.IconLocation
# $Shortcut.RelativePath
# $Shortcut.WindowStyle
# $Shortcut.WorkingDirectory
$Shortcut.Save();

# .lnk shortcut - create oneliner
$s=(New-Object -COM WScript.Shell).CreateShortcut('foo.lnk');$s.TargetPath='%comspec%';$s.Arguments='/k echo hello';$s.Save();

# .lnk shortcut - function
function Make-Shortcut {
	param( [string]$Name, [string]$Target, [string]$Arguments, [string]$Hotkey, [string]$StartIn )
	$WshShell = New-Object -ComObject WScript.Shell;
	$Shortcut = $WshShell.CreateShortcut($Name+'.lnk');
	$Shortcut.TargetPath = $Target;
	$Shortcut.Arguments = $Arguments;
	$Shortcut.Hotkey = if ($Hotkey) {$Hotkey} else {''}
	$Shortcut.WorkingDirectory = if ($StartIn) {$StartIn} else {''}
	$Shortcut.Save();
}
Make-Shortcut 'foo' '%comspec%' '/k echo hello'

# .lnk shortcut - modify to "Run As Administrator"
$file = "foo.lnk";
$bytes = [System.IO.File]::ReadAllBytes($file);
$bytes[0x15] = $bytes[0x15] -bor 0x20; # set byte 21 (0x15) bit 6 (0x20) ON (Use –bor to set RunAsAdministrator option and –bxor to unset)
[System.IO.File]::WriteAllBytes($file, $bytes);

# mklink
ni -ItemType SymbolicLink -Path C:\src -Value E:\dest
ni -ItemType SymbolicLink -Path C:\src.txt -Value E:\dest.txt
(gi C:\src).Delete()
(gi C:\src.txt).Delete()

# unzip
Expand-Archive -Path C:\file.zip -DestinationPath C:\out
tar xzf file.zip -C C:\out # available on win10

# check if folder exists
if (Test-Path $path) {
	'exists'
} else {
	'does not exist'
}

# regex replace file's content
(gc file.csv) `
	-replace '(\d+),(\d{1,})', '$1.$2' `
	-replace 'second regex', 'second replacement' |
		Out-File file.txt

# prepend text to file
ac -Path b.txt -Value ('hello'+(gc a.txt)) # or: gc a.txt -Raw


# multiple files:
# prepend text
dir -File -Rec | %{ sc -Path $_.name -Value ("hello`n`n"+(gc $_.name)) }

# replace text
dir -File -Rec | %{ $f=$_; (gc $f.PSPath) | %{$_ -replace '\\', '/'} | sc $f.PSPath }

# rename
dir -File | ri -NewName { 'Prefix_' + $_.Name }

# count lines of file
(type .\file.csv | Measure-Object -line).Lines # count lines in 1 file
type *.csv | Measure-Object -line              # sum of all files lines