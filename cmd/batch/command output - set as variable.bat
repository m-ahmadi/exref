for /f "tokens=*" %%g IN ('npm -v') do (SET npmver=%%g)
echo %npmver%

:: some commands don't work in .bat files

pause