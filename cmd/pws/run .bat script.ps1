my.bat            # error
.\my.bat          # ok
& '.\my file.bat' # if containing spaces

Start-Process file.bat
Start-Process "cmd.exe" "/c my.bat"
Start-Process "cmd.exe" "/k my.bat"