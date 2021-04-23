@echo off
start /d "C:\Program Files\VideoLAN\VLC" vlc.exe "c:\dev\# General\noise\noise-brown-3.mp3"
start /d "C:\Program Files\VideoLAN\VLC" vlc.exe "c:\dev\# General\noise\noise-white.mp3"
start /d "C:\Program Files\VideoLAN\VLC" vlc.exe "c:\dev\# General\noise\wave-alpha.mp4"

timeout 2

setlocal EnableDelayedExpansion
set count=0
set top=620
set left=1430
set step=105
for /f %%i in ('cmdow /t') do (
	cmdow %%i /siz 400 100
	cmdow %%i /mov !left! !top!
	set /a "top=!top!+!step!"
	set /a "count=!count!+1"
	if "!count!" == "4" goto :done
)
:done
setlocal DisableDelayedExpansion


REM "C:\Program Files\VideoLAN\VLC" vlc.exe
REM "C:\Program Files (x86)\K-Lite Codec Pack\MPC-HC64" mpc-hc64.exe
REM "C:\Program Files\Windows Media Player" wmplayer.exe
REM "C:\Program Files\DAUM\PotPlayer" PotPlayerMini64.exe

REM vlc
REM set top=620
REM set left=1430
REM set step=105

REM mpc
REM set top=510
REM set left=1503
REM set step=138