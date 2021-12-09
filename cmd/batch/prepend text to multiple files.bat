@echo off
for /r %%a in (tf\*.md) do (
	type %%a > "%%a.tmp"
	echo --- > %%a
	echo layout: home >> %%a
	echo --- >> %%a
	echo. >> %%a
	type "%%a.tmp" >> %%a
	del "%%a.tmp"
)