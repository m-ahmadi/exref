@echo off

echo normal!
echo escape percent by doubling it:
echo   25%% of my share
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