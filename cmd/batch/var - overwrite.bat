@echo off

:: eg 1. first value comes from arg passed to script
set foo=%1
set foo=%foo:"=%

:: eg 2. first value comes from user
set /p bar="Enter bar: "
set bar=%bar:"=%


echo foo contains %foo%
echo bar contains %bar%

pause
