@echo off

reg delete HKCR\*\shell\VSCode /f

for %%i in (HKCR\Directory\shell\VSCode, HKCR\Directory\Background\shell\VSCode, HKCR\Drive\shell\VSCode) do reg delete %%i /f

pushd %userprofile%\.vscode\extensions\ms-python.python-* && fart pythonFiles\lib\python\debugpy\_vendored\pydevd\_pydevd_bundle\pydevd_resolver.py "MAX_ITEMS_TO_HANDLE = 300" "MAX_ITEMS_TO_HANDLE = 100000"

pause
