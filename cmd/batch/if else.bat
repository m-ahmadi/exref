@echo off
set var=Hello, World!

if exist foo.txt echo The file was found.

if %a%==%b% echo a equal b
if not %a%==%b% echo a not equal b

REM single-statement blocks
if "%var%"=="Hello, World!" (
	echo found
) else (
	echo not found
)

REM multi-statement blocks
if %ERRORLEVEL%==0 goto :trueblock
goto :endif
:trueblock
set var1=foo
set var2=bar
set var3=%var1%_%var2%
:endif
echo %var3%


REM default arg example
set arg=%1
if "%1"=="" set arg=default
echo %arg%

pause