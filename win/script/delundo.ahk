; copy a file and then delete it
Send {Click 1710 940 Right} ; right-click on file
Send {Click 1710 827}       ; click copy
Send {Click 1710 860 Right} ; right-click on empty space
Send {Click 1750 695}       ; click paste
Send {Click 1710 860 Right} ; right-click on copied file
Send +{Click 1710 795}      ; hold shift and click delete
WinWaitActive ,"Delete Shortcut",, 0.1, ahk_exe Explorer.EXE ; wait for confirm box
Send {Enter}                ; press enter

; undo and then cancel
Send ^z    ; press undo
WinWaitActive ,"Item Not Found",, 0.1, ahk_class OperationStatusWindow
Send {Esc} ; press escape

; clear clipboard
Run, %comspec% /c echo off | clip
