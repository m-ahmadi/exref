@echo off
set d=%LOCALAPPDATA%\Google\Chrome\User Data\Default

for /f "tokens=2" %%i in ('tasklist ^| findstr chrome.exe') do @taskkill /pid %%i /f
timeout 5

del "%d%\Bookmarks.bak"
copy ..\..\bookmarks.json "%d%\Bookmarks" /y

pause
