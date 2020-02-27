Get-History                        # command history
Start-Transcript                   # start writing everything to file going forward (command and output)
Start-Transcript -Path C:\tmp.txt  # ... different location
Stop-Transcript                    # ... stop writing
$PSVersionTable                    # show powershell version info
$PSVersionTable.PSVersion          # powershell version
$env:path                          # same as echo %path% in cmd

Get-ExecutionPolicy                # see current policy
Set-ExecutionPolicy Bypass         # allow execution of files
Set-ExecutionPolicy Unrestricted   # ...

$foo = 'hello'          # create variable
clv -n foo              # delete variable
$obj = ps explorer      # object return value
$obj = ps explorer | gm # pipe to another cmdlet
$obj.Name               # access prop
$obj.Kill()             # call method

# newline and semicolon are statement separators
$x = 2
$y = 3
$x = 2; $y = 3;