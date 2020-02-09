@echo off

call :myfunc 123 456 789

echo %res%
pause

:myfunc
setlocal
	set arg1=%1
	set ret=you called with %1 and %2 and %3
endlocal & set res=%ret%