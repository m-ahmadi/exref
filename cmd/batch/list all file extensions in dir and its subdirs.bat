rem lists current dir by default or takes an argument: script.bat myDir
@echo off

set target=%~1
if "%target%"=="" set target=%cd%

setlocal EnableDelayedExpansion

set LF=^


rem previous two lines deliberately left blank for LF to work.

for /f "tokens=*" %%i in ('dir /b /s /a:-d "%target%"') do (
	set ext=%%~xi
	if "!ext!"=="" set ext=FileWithNoExtension
	echo !extlist! | find "!ext!:" > nul
	if not !ERRORLEVEL! == 0 set extlist=!extlist!!ext!:
)

echo %extlist::=!LF!%

endlocal

pause