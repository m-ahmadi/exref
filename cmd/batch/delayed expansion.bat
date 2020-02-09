@echo off

:: by default variables are expanded at parse time
set "foo=first"
set "foo=second" & echo %foo%

setlocal EnableDelayedExpansion
:: expand variables at execution time

set "foo=first"
set "foo=second" & echo !foo!

setlocal DisableDelayedExpansion

pause