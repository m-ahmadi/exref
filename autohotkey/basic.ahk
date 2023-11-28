#	; win
^	; ctrl 
!	; alt 
+	; shift 
&	; combine keys

; hotstring
::str::expanded str  ; with "ending char"
:*:str::expanded str ; without "ending char"

:: ; end of statement
`  ; escape char
{} ; escape char in `Send` or `hotstring`

; escaping:  https://www.autohotkey.com/docs/v1/misc/EscapeChar.htm
`,
`%
``
`;
`::
`n `r `b `t `v `a `f
"" ; only if inside literal string

; escaping in `Send` or `hotstring`
; special chars are {}^!+#
:*:f::hey{!} 4{^}2 equals 16`, didn't you know that?
Send hey{!} 4{^}2 equals 16`, also {{} is called open bracket

; loop
Loop 3 {
	MsgBox %A_Index%

	Loop %A_Index% {
		MsgBox "here ".%A_Index%
	}
}
return
