@echo off
set "x=this is=an test="
echo x=%x%

call :replaceEqualSign in x with _
echo x=%x%

pause

:replaceEqualSign in <variable> with <newString>
	setlocal enableDelayedExpansion
		set "_s=!%~2!#"
		set "_r="
		:_replaceEqualSign
			for /F "tokens=1* delims==" %%A in ("%_s%") do (
				if not defined _r ( set "_r=%%A" ) else ( set "_r=%_r%%~4%%A" )
				set "_s=%%B"
			)
		if defined _s goto _replaceEqualSign
	endlocal & set "%~2=%_r:~0,-1%"
exit /B