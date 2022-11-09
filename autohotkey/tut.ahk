; ^q::
; Send, My First Script
; return



; ::javad::salam olaghe aziz halet chetore
; :*:javad::salam olaghe aziz halet chetore



; Esc::
; MsgBox, Escape!!!!
; return



; ::btw::
; MsgBox, You typed btw.
; return



; ^j::
; MsgBox, Wow!
; MsgBox, There are
; Run, notepad.exe
; WinActivate, Untitled - Notepad
; WinWaitActive, Untitled - Notepad
; Send, 7 lines{!}{Enter}
; SendInput, inside the CTRL{+}J hotkey.
; return



; Numpad0 & Numpad1::
; MsgBox, You pressed Numpad1 while holding down Numpad0.
; return
; Numpad0 & Numpad2::
; Run, notepad.exe
; return



; #IfWinActive Untitled - Notepad
; #Space::
; MsgBox, You pressed WIN+SPACE in Notepad.
; return



; #IfWinActive Untitled - Notepad
; !q::
; MsgBox, You pressed ALT+Q in Notepad.
; return
; #IfWinActive
; !q::
; MsgBox, You pressed ALT+Q in any window.
; return



; #IfWinActive ahk_class Notepad
; #Space::
; MsgBox, You pressed WIN+SPACE in Notepad.
; return
; ::msg::You typed msg in Notepad
; #IfWinActive Untitled - Paint
; #Space::
; MsgBox, You pressed WIN+SPACE in MSPaint!
; return
; ::msg::You typed msg in MSPaint!



; ^n::
; Run, notepad.exe
; return
; #i::
; Run, https://www.google.com/
; return



; ^b::
; Send, {Ctrl down}c{Ctrl up}  ; Send ^c
; SendInput, [b]{Ctrl down}v{Ctrl up}[/b]
; return



; ^q::
; Run, C:\Program Files\PowerToys\modules\FancyZones\FancyZonesEditor.exe
; WinActivate, FancyZones Editor
; WinWaitActive, FancyZones Editor
; Click, 100, 500
; Send, !{F4} ; Click, 1300, 20
; return



; ^w::
; Run, C:\Program Files\PowerToys\modules\FancyZones\FancyZonesEditor.exe
; WinActivate, FancyZones Editor
; WinWaitActive, FancyZones Editor
; Click, 550, 500
; Send, !{F4} ; Click, 1300, 20
; return