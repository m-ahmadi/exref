@echo off

for /f %%i in ('dir /b') do set lastLine=%%i

echo %lastLine%

pause