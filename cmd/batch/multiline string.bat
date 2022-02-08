@echo off

echo this is a multiline string^

and it requires one empty^

line between the lines

echo.
echo.
echo.

setlocal EnableDelayedExpansion
set LF=^


set multiLine=this is another way!LF!note that it needs the!LF!two empty lines above (in code)
echo !multiLine!

pause