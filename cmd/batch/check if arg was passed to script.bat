@echo off

:: error on argless calls:
set args=%*
:: error on calls with more than one arg:
set args="%*"

if "%args:-foo=%" == "%args%" echo -foo not present
if "%args:-foo=%" neq "%args%" echo -foo present

pause