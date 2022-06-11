@echo off

for /f %%i in ('dir /b') do (set firstLine=%%i & goto :next)
:next

echo %firstLine%

pause