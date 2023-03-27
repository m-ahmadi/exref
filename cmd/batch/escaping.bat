@echo off

echo This ^
is a single ^
line!
echo.

echo normal!
echo escape percent and double-qoute by doubling them:
echo   25%% of my share
echo   node -e "console.log(""hello dude"")"
echo escape rest with caret:
echo   ^\
echo   ^&
echo   ^|
echo   ^>
echo   ^<
echo   ^^
echo   ^~

setlocal EnableDelayedExpansion

echo escape exclamation in delayed expansion mode:
echo   two carrets: hello^^!
echo   "one caret inside quotes: hello^!"

:: an example
set str=^^^<script^^^>document.write(`^^^<script src="http://${ (location.host || 'localhost').split(':')[0] } :35800/livereload.js?snipver=1"^^^>^^^</script^^^>`)^^^</script^^^>

pause