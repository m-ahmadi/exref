@echo off

set str=%*
if "%str:abc=%" neq "%str%" (
	echo found abc
) else echo could not find abc

pause