@echo off

set /p name="Hi, What is your name? "
echo Hello %name%!

set /p lastname="What is you last name? "
echo Interesting last name Mr. %lastname%?

set /p job="What is your job? " || set job=unemployed
echo Oh!, so you are %job%

pause
