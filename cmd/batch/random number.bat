@echo off

:: between 0 and 32767
echo %RANDOM%

:: between 100 and 32768
set /a num=%RANDOM% * 100 / 32768 + 1

:: between min and max
set min=100
set max=200
set /a num=%RANDOM% * (%max% - %min% + 1) / 32768 + %min%

pause