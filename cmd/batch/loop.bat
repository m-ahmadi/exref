for /l %%x in (1, 1, 100) do echo %%x rem start at 1, step by one, finish at 100

:: multiple commands
for /l %%x in (1, 1, 100) do (
	echo %%x
	echo %%x D:\test.txt
)

:: using goto
:loop
echo endless
goto loop

:loop
echo a >> %file%
timeout /t %seconds% /nobreak > nul
goto loop

:: exit in middle of loop
setlocal EnableDelayedExpansion
set count=0
for /f %%i in ('dir /b') do (
	set /a "count=!count!+1"
	echo !count!
	if "!count!" == "4" goto :done
)
:done
setlocal DisableDelayedExpansion