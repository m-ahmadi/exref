ni foo.txt -ItemType File          # create file
ni foo.txt -Type File              # ... though -Type isn't in docs
ni foo -ItemType Directory         # create dir
ni foo -Type Directory             # ...
ni a1,'a 2',a3 -ItemType Directory # create multiple dirs
rni a.txt -NewName b.txt           # rename file
ri foo.txt                         # delete file
(gi foo.txt).Delete()              # ...
ri 'my dir'                        # delete dir
ri mydir -Force -Recurse           # ... & all subdirs
mi a.txt -Destination E:\          # move file or dir
mi a.txt,b.txt -D E:\              # ... multiple
cpi C:\file.txt -Destination E:\   # copy file
cpi -LiteralPath a -Destination b  # ...
cpi C:\foo -D E:\ -Recurse         # copy dir and everything inside
Test-Path 'd'                      # folder exists?
Test-Path 'd' -PathType Container  # ... more restricted
Test-Path 'f.txt'                  # file exists?
Test-Path 'f.txt' -PathType Leaf   # ... more restricted
[System.IO.File]::Exists('f.txt')  # ...
Split-Path .\path\to\some -Leaf    # get path rightmost: 'some'
Split-Path .\path\to\some          # get path leftmost:  '.\path\to'

# write file with content                          encoding:
ni file.js -ItemType File -Value "some content"  # UTF-8
"some content" | Out-File main.js -Encoding utf8 # UTF-8-BOM
echo "some content" > file.js                    # UCS-2 LE BOM
gci -File $env:USERPROFILE\Desktop | select FullName | sort > file.txt

# read file
$str = gc index.js -Encoding UTF8 | Out-String

# read and parse .json file
$obj = gc file.json -Encoding UTF8 | Out-String | ConvertFrom-Json
$obj.key

# symlink (mklink)
ni -ItemType SymbolicLink -Path C:\link -Target E:\target # `-Target` is alias for `-Value`
ni -ItemType SymbolicLink -Path C:\link.txt -Target E:\target.txt
(gi C:\link).Target

# list files and folders
gci                                  # all
gci path/to                          # list under path only
gci -Directory                       # list dirs only
gci -dir                             # ...
gci | ?{$_.PsIsContainer -eq $true}  # ...
gci -File                            # list files only
gci | ?{$_.PsIsContainer -eq $false} # ...
gci | select Name                    # dir /b
gci | select -ExpandProperty Name    # ...
gci | select FullName                # abs path
gci -dir | select Name               # dir /a:d /b
gci .\*.mp3 | select Name | sort Name | fw -Column 1 # dir *.mp3 /b

# copy folder hierarchy without files
cpi src dest -Recurse -Filter {PSIsContainer} -Force
cpi src dest -Recurse -Filter {PSIsContainer -eq $true}
cpi src dest -r -fi PSIsContainer

# ↑... first level only
gci 'C:\Program Files' -Directory -Depth 1 | %{cpi $_.FullName -Destination D:\foo -Force}

# copy flat folders from n level deep (not like `robocopy /e /xf * /lev:3`)
gci 'C:\Program Files' -Directory -Depth 2 | %{cpi $_.FullName -Destination D:\foo -Force}

# copy flat files
New-Item $dest -Type Directory
Get-ChildItem $src -Recurse | `
	Where-Object { $_.PSIsContainer -eq $False } | `
	ForEach-Object { Copy-Item -Path $_.Fullname -Destination $dest -Force }
# ... shorty:
ni $dest -Type Directory
gci $src -Recurse | ?{$_.PSIsContainer -eq $False} | %{cpi -Path $_.Fullname -Destination $dest -Force}

# unzip
Expand-Archive -Path C:\file.zip -DestinationPath C:\out
tar xzf file.zip -C C:\out # available on win10

# check if folder exists + 2 blocks
if (Test-Path 'mydir') {
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

# .lnk shorctut - read target
$s = (New-Object -ComObject WScript.Shell).CreateShortcut('foo.lnk');
$s.TargetPath

# .lnk shorctut - list target of all shortcuts
$r = gci $env:USERPROFILE\Desktop\*.lnk -Recurse | %{ (New-Object -ComObject WScript.Shell).createShortcut($_.FullName).TargetPath }
$r | ?{$_ -ne ''} | sort > shortcuts.txt
