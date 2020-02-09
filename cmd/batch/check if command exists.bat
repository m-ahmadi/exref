@echo off
where mycommand
if %errorlevel% == 0 (
	echo found
) else (
	echo not found
)


:: withoud any output to cmd window
@echo off
where mycommand >nul 2>nul
if %errorlevel% == 0 (
	echo found
) else (
	echo not found
)

pause