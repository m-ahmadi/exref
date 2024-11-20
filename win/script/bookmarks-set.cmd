@echo off
set d=%LOCALAPPDATA%\Google\Chrome\User Data\Default

echo Force closing chrome.exe processes...
for /f "tokens=2" %%i in ('tasklist ^| findstr chrome.exe') do @taskkill /pid %%i /f
echo		done.

timeout 5
echo		done.
echo.

echo Deleting backup file...
set b="%d%\Bookmarks.bak"
if exist %b% del %b%
echo		done.
echo.

echo Setting new bookmarks...
copy ..\..\bookmarks.json "%d%\Bookmarks" /y
echo		done.
echo.

echo All Done.
echo.

pause
