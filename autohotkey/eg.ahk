; open new tab in firefox
#t::
SetTitleMatchMode, 2
If WinExist ("ahk_exe firefox.exe") {
	WinActivate, ahk_exe firefox.exe
	WinWaitActive, ahk_exe firefox.exe
	Send ^t
}
return

; screenshot
#b::
Send #+s
return

; maximize current window
#+f::
Send #{Up}
return

; close current window
#q::
Send !{F4}
return
