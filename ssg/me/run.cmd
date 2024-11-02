@echo off

echo Select method:
echo.
echo   1. preprocessy (better)
echo.
echo   2. clienty (incomplete, but works a little)
echo.

set /p type="Press 1 or 2: "

if %type%==1 set dir=preprocessy
if %type%==2 set dir=clienty

node .\%dir%\build.js

echo Done.
echo.

pause
