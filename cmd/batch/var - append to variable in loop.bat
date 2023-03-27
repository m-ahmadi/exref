@echo off
setlocal EnableDelayedExpansion

set x=0
for /L %%i in (1,1,5) do @set x=!x!_%%i
echo %x%

setlocal DisableDelayedExpansion
pause