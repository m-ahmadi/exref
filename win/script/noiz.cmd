@echo off
start /d "C:\Program Files\VideoLAN\VLC" vlc.exe "c:\dev\# General\noise\bass-1-pat20-space1.mp3"
start /d "C:\Program Files\VideoLAN\VLC" vlc.exe "c:\dev\# General\noise\bass-2.mp3"
start /d "C:\Program Files\VideoLAN\VLC" vlc.exe "c:\dev\# General\noise\noise-brown-3.mp3"
start /d "C:\Program Files\VideoLAN\VLC" vlc.exe "c:\dev\# General\noise\noise-white.mp3"
start /d "C:\Program Files\VideoLAN\VLC" vlc.exe "c:\dev\# General\noise\wave-1.mp3"
start /d "C:\Program Files\VideoLAN\VLC" vlc.exe "c:\dev\# General\noise\wave-2.mp3"
start /d "C:\Program Files\VideoLAN\VLC" vlc.exe "c:\dev\# General\noise\muz-3.mp3"

REM max=2  top=829
REM max=3  top=724
REM max=4  top=620
REM max=6  top=410

timeout 1
set max=6
set top=410
set count=0
set left=1430
set step=105

setlocal EnableDelayedExpansion
for /f %%i in ('cmdow /t') do (
	cmdow %%i /siz 400 100
	cmdow %%i /mov !left! !top!
	set /a "top=!top!+!step!"
	set /a "count=!count!+1"
	if "!count!" == "!max!" goto :done
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
