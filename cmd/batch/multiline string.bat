@echo off

echo this is a multiline string^

and it requires one empty^

line between the lines

echo.
echo.
echo.

:: must use "delayed expansion" to access variable
setlocal EnableDelayedExpansion
set multiLine=This is a ^

multiline text^

line3
echo !multiLine!
echo.
echo.
echo.

:: another way of "delayed expansion"
setlocal EnableDelayedExpansion
set LF=^


set multiLine=this is another way!LF!note that it needs the!LF!two empty lines above (in code)
echo !multiLine!
echo.
echo.
echo.

pause
