#	; win
^	; ctrl 
!	; alt 
+	; shift 
&	; combine keys

; hotstring
::str::expanded str  ; with "ending char"
:*:str::expanded str ; without "ending char"

:: ; end of statement
{} ; escape

; loop
Loop 3 {
	MsgBox %A_Index%

	Loop %A_Index% {
		MsgBox "here ".%A_Index%
	}
}
return
