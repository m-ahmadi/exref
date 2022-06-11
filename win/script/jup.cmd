@echo off

set secondLine=0
set count=0

setlocal EnableDelayedExpansion
for /f %%i in ('cmdow /t') do (
	set secondLine=%%i
	set /a "count=!count!+1"
	if !count! == 2 goto :done
)
:done
setlocal DisableDelayedExpansion

cmdow %secondLine% /siz 225 37
cmdow %secondLine% /mov 1701 1008

title jupyter
jupyter notebook