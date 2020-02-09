@echo off
set file=d:\test.txt
set seconds=1

:: variable expansion (parse time by default, one line/paren-block at a time)
echo.
echo file: %file%
echo timeout: %seconds% second
echo.
echo script is running...

set foo=first
set foo=second
echo %foo% &:: second

echo.
echo continuation character:
echo   This ^
is a single ^
line!

pause