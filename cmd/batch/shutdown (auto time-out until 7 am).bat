@echo off
node -p "var n=new Date(),h=n.getHours(),m=n.getMinutes(),s=n.getSeconds();h<7?(((((7-h)*60)-m)*60)-s)+600:'';" > secs.tmp.txt
set /p secs=<secs.tmp.txt
del secs.tmp.txt
shutdown /s /f /t %secs%
pause