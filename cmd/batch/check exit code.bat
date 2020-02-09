echo %errorlevel%

if errorlevel 1 echo Error

if %errorlevel% EQU 0 echo OK

if %errorlevel% GEQ 1 EXIT /B %ERRORLEVEL%

pause