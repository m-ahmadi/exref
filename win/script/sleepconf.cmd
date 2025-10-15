@echo off

set /p t="Sleep after (minutes): "
if "%t%"=="" (
	echo 0
	powercfg /x standby-timeout-ac 0
) else (
	echo %t%
	powercfg /x standby-timeout-ac %t%
)

pause
