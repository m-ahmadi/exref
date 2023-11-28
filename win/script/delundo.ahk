; copy a file and then delete it
Send #d                ; show desktop
Send {Click 1900 1024} ; click empty space on desktop (deselect anything else)
Send {Click 1710 940}  ; click on file
Send ^c                ; copy file
Send ^v                ; paste file
Send {Click 40 340}    ; click on copied file
Send +{Delete}         ; press shift delete
WinWaitActive ,"Delete Shortcut",, 0.1, ahk_exe Explorer.EXE ; wait for confirm box
sleep, 100             ; wait a bit more
Send {Enter}           ; press enter

; undo and then cancel
Send #d                ; show desktop
Send {Click 1900 1024} ; click empty space on desktop (deselect anything else)
Send ^z                ; press undo
WinWaitActive ,"Item Not Found",, 0.1, ahk_class OperationStatusWindow
sleep, 200             ; wait a bit more
Send {Esc}             ; press escape

; clear clipboard
Run, %comspec% /c echo off | clip


;@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
; copy, paste, delete file with clicks
; bad cuz unexpected context-menu items change height calcs

; Send {Click 1710 940 Right} ; right-click on file
; Send {Click 1710 827}       ; click copy
; Send {Click 1710 860 Right} ; right-click on empty space
; Send {Click 1750 720}       ; click paste
; Send {Click 1710 860 Right} ; right-click on copied file
; Send +{Click 1710 795}      ; hold shift and click delete
;@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
