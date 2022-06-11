@echo off

set secondLine=0
set count=0

setlocal EnableDelayedExpansion
for /f %%i in ('dir /b') do (
	set secondLine=%%i
	set /a "count=!count!+1"
	if !count! == 2 goto :done
)
:done
setlocal DisableDelayedExpansion

echo %secondLine%

pause