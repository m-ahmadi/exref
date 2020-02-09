@echo off

setlocal
	:: variables here are invisible to all other batch scripts unless `endlocal & set`
endlocal

setlocal
	set item1="Ice Cream Maker"
	set item2=450
endlocal & set var1=%_item1% & set var2=%item2%
:: now the variables are visible


setlocal EnableDelayedExpansion
setlocal DisableDelayedExpansion

setlocal EnableExtensions
setlocal DisableExtensions

pause