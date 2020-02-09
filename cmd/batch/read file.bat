@echo off

:: read line by line (reads whitespace character as well)
for /f "delims=" %%a in (file.txt) DO (
  ECHO Line is: %%a
)

pause