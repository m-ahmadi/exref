@echo off

set file=d:\test.txt
set seconds=1

:: variable expansion (parse time by default, one line/paren-block at a time)
echo file: %file%
echo timeout: %seconds% second

pause