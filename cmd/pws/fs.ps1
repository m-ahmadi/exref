ni foo.txt -ItemType File          # create file
ni foo.txt -Type File              # ... though -Type isn't in docs
ni foo -ItemType Directory         # create dir
ni a1,'a 2',a3 -ItemType Directory # create multiple dirs
rni a.txt -NewName b.txt           # rename file
ri foo.txt                         # delete file
ri 'f o'                           # delete dir
mi a.txt -Destination E:\          # move file or dir
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

# create .lnk shortcut
$o = New-Object -ComObject WScript.Shell;
$s = $o.CreateShortcut('shortcut.lnk');
$s.TargetPath='dest';
$s.Save(); # or:
$s=(New-Object -COM WScript.Shell).CreateShortcut('foo.lnk');$s.TargetPath='dest';$s.Save()

# mklink
ni -Path C:\src -ItemType SymbolicLink -Value E:\dest
ni -Path C:\src.txt -ItemType SymbolicLink -Value E:\dest.txt
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