@echo off
cd ../../
if exist bookmarks_*.html (
	del bookmarks.html
	rename bookmarks_*.html bookmarks.html
)
git log -1 --pretty=%%B > ttmmpp.txt
set /p last=<ttmmpp.txt
del ttmmpp.txt
set /a "new=%last%+1"
git add .
git commit -m "%new%"
git push origin master