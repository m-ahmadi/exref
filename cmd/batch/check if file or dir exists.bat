@echo off

:: file
if exist file.js del file.js

if exist myFile (
	echo myFile exists
) else (
	echo myFile does not exist
)

:: folder
if exist myDir\ (
	echo myDir\ exists
) else (
	echo myDir\ does not exist
)

pause
