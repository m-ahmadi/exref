@echo off
set a=3
set b=4
set /a "c=%a%+%b%"
echo %c%
set /a "d=%c%+1"
echo %d%

pause