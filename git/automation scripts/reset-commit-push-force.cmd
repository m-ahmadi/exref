@echo off
git log -1 --pretty=%%B > ttmmpp.txt
set /p last=<ttmmpp.txt
del ttmmpp.txt
git reset HEAD~
git add .
git commit -m "%last%"
git push -f