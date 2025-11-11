@echo off

set /p SHOW_PATH="Show's path: "
set /p SHORTCUT_NAME="Shortcut name: "

if "%SHOW_PATH%"=="" goto :end

node %r%\win\script\showtracker.js %SHOW_PATH% %SHORTCUT_NAME%

:end
echo.
echo You didn't provide show's path.
echo Exiting...
echo.

pause
