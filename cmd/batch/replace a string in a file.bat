@echo off

setlocal EnableDelayedExpansion
set substr=olaghe
(
	for /f "usebackq delims=" %%v in (text1.txt) do (
		set line=%%v
		echo. !line:%substr%=!
	)
) > text2.txt
endlocal

pause