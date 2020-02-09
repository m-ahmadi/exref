@echo off

:: set and run .exe (works only if you have that right)
set __COMPAT_LAYER=RunAsAdmin
start %windir%\regjump.exe HKLM\

:: set multiple ones
set __COMPAT_LAYER=Win98 640x480

:: unset
set __COMPAT_LAYER=

:: back to normal

echo a system environment variable that changes compatibilty settings (during script or until it's unset)
echo set it before the .exe call (NOT the same as: HKLM\...\AppCompatFlags\Layers)
echo.
echo some options:
echo   RunAsInvoker (prevents UAC pop-up)
echo   RunAsAdmin   (always triggers UAC)
echo   RunAsHighest (only triggers UAC if you have admin rights)
echo   Win7RTM
echo   WinXPSp3
echo   256Color
echo   640X480
echo   ...

pause