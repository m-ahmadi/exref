@echo off
set var=Hello, World!

if exist foo.txt echo The file was found.

if a==a echo a equal a
if not a==b echo a not equal b

if "%var%"=="Hello, World!" (
	echo found
) else (
	echo not found
)

:: default arg
set arg=%1
if "%1"=="" set arg=default
echo %arg%

pause