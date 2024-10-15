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

:: emulate while loop (a body and a condition)
set count=0
:loop
set /a count=%count%+1
echo %count%
echo This is body of loop
if %count% neq 10 goto loop
echo This is after loop is done

:: keep calling a script if it does not return with ERRORLEVEL of 0
:: extra: keep count of runs
:: extra: sleep between runs (nobreak sleep)
:: extra: stop loop if ran beyound a threshold
:: extra: reset ERRORLEVEL to 0 before calling the script (not required though)
set maxruns=20
set count=0
:loop
set /a count=%count%+1
echo running for %count% time...
cd .
call another_script.bat
timeout %count% /nobreak
if %count% lss %maxruns% goto done
if %ERRORLEVEL% neq 0 goto loop
:done
