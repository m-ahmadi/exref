@echo off

set changed=0
for /f %%i in ('git status --porcelain') do set changed=1

if %changed%==1 goto :trueblock
goto :endif

:trueblock
git log -1 --pretty=%%B > ttmmpp.txt
set /p last=<ttmmpp.txt
del ttmmpp.txt
set /a "new=%last%+1"
git add .
git commit -m "%new%"
git push

:endif

pause
