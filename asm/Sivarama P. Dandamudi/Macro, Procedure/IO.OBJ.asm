
.686p
.mmx
.model flat

; ===========================================================================

; Segment type: Pure data
data            segment byte public '' use16
assume cs:data
aBufferMustBeAt db 0Dh,0Ah              ; DATA XREF: proc_GetStr+Bo
db 'Buffer must be at least 2 bytes long--string is not read',0
aNumberOutOfRan db 0Dh,0Ah              ; DATA XREF: proc_GetInt+38o
db 'Number out of range (-32,768 to +32,767).',0Dh,0Ah
db 'Please try again: ',0
aNoNumberEntere db 0Dh,0Ah              ; DATA XREF: proc_GetInt+42o
                                        ; proc_GetLInt+45o
db 'No number entered.',0Dh,0Ah
db 'Please try again: ',0
aNumberOutOfR_0 db 0Dh,0Ah              ; DATA XREF: proc_GetLInt+3Bo
db 'Number out of range (-2,147,483,648 to +2,147,483,647).',0Dh,0Ah
db 'Please try again: ',0
byte_100F2      db 31h                  ; DATA XREF: proc_PutInt+1o
                                        ; proc_PutInt+32r ...
db  32h ; 2
db  33h ; 3
db  34h ; 4
db  35h ; 5
db  36h ; 6
db  37h ; 7
db  38h ; 8
db  39h ; 9
db  30h ; 0
db  31h ; 1
db  32h ; 2
db  33h ; 3
db  34h ; 4
db  35h ; 5
align 10h
data            ends


; ===========================================================================

; Segment type: Pure code
text            segment byte public '' use16
assume cs:text
assume es:nothing, ss:nothing, ds:nothing, fs:nothing, gs:nothing





; =============== S U B R O U T I N E =======================================


public proc_PutCh
	proc_PutCh      proc near
	push    ax
	push    dx
	mov     dl, al
	mov     ah, 2
	int     21h             ; DOS - DISPLAY OUTPUT
                            ; DL = character to send to standard output
	pop     dx
	pop     ax
	retn
proc_PutCh      endp


; =============== S U B R O U T I N E =======================================

public proc_GetCh
	proc_GetCh      proc near
	push    dx
	pushf
	push    ax
	mov     dx, si
	mov     ah, 1
	int     21h                 ; DOS - KEYBOARD INPUT
							    ; Return: AL = character read
	dec     dl
	jz      short loc_10134
	dec     dl
	jnz     short loc_1013C
	mov     dl, al
	pop     ax
	mov     ah, dl
	jmp     loc_1013D
	loc_10134:
		mov     dl, al
		pop     ax
		mov     al, dl
		jmp     loc_1013D
	loc_1013C:
		pop     dx
	loc_1013D:
		popf
		pop     dx
		retn
proc_GetCh      endp


 ; =============== S U B R O U T I N E =======================================


public proc_nwln
	proc_nwln       proc near
	push    ax
	push    dx
	mov     dl, 0Dh
	mov     ah, 2
	int     21h                 ; DOS - DISPLAY OUTPUT
					            ; DL = character to send to standard output
	mov     dl, 0Ah
	mov     ah, 2
	int     21h                 ; DOS - DISPLAY OUTPUT
					            ; DL = character to send to standard output
	pop     dx
	pop     ax
	retn
proc_nwln       endp


; =============== S U B R O U T I N E =======================================


public proc_PutStr
	proc_PutStr     proc near
	push    ax
	push    dx
	push    bx
	pushf
	mov     bx, ax

	loc_10157:
		mov     dl, [bx]
		cmp     dl, 0
		jz      short loc_10165
		mov     ah, 2
		int     21h             ; DOS - DISPLAY OUTPUT
						        ; DL = character to send to standard output
		inc     bx
		jmp     short loc_10157
		
	loc_10165:
		popf
		pop     bx
		pop     dx
		pop     ax
		retn
proc_PutStr     endp


; =============== S U B R O U T I N E =======================================

public proc_GetStr
	proc_GetStr     proc near
	pusha
	mov     si, bx
	dec     bx
	cmp     cx, 2
	jge     short loc_10195
	push    ax
	mov     ax, offset aBufferMustBeAt ; "\r\nBuffer must be at least 2 bytes long-"...
	call    proc_PutStr
	pop     ax
	jmp     loc_101B6
	loc_1017F:
		cmp     bx, si
		jz      short loc_1018E
		mov     dl, al
		mov     ah, 2
		int     21h             ; DOS - DISPLAY OUTPUT
						        ; DL = character to send to standard output
		inc     cx
		dec     bx
		dec     bx
		jmp     short loc_10195
	loc_1018E:
		mov     dl, 7
		mov     ah, 2
		int     21h             ; DOS - DISPLAY OUTPUT
						        ; DL = character to send to standard output
		dec     bx
	loc_10195:
		inc     bx
		mov     ah, 7
		int     21h             ; DOS - DIRECT STDIN INPUT, NO ECHO
		cmp     al, 0Dh
		jz      short loc_101AD
		cmp     al, 8
		jz      short loc_1017F
		mov     dl, al
		mov     ah, 2
		int     21h             ; DOS - DISPLAY OUTPUT
						        ; DL = character to send to standard output
		mov     [bx], al
		dec     cx
		jnz     short loc_10195
	loc_101AD:
		mov     dl, al
		mov     ah, 2
		int     21h             ; DOS - DISPLAY OUTPUT
						 ; DL = character to send to standard output
		mov     byte ptr [bx], 0
	loc_101B6:
		popa
		retn
proc_GetStr     endp


; =============== S U B R O U T I N E =======================================


public proc_PutInt
	proc_PutInt     proc near
		pusha
		mov     si, offset byte_100F2
		mov     byte ptr [si], 20h ; ' '
		cmp     ax, 0
		jge     short loc_101C9
		mov     byte ptr [si], 2Dh ; '-'
		neg     ax

	loc_101C9:
		mov     bx, 0Ah
		add     si, 6
		mov     byte ptr [si], 0
		dec     si
		mov     cx, 5

	loc_101D7:
		mov     dx, 0
		div     bx
		add     dl, 30h ; '0'
		mov     [si], dl
		dec     si
		dec     cx
		cmp     ax, 0
		jnz     short loc_101D7
		jcxz    short loc_101F6
		mov     bl, ds:byte_100F2
		mov     [si], bl
		cmp     bl, 20h ; ' '
		jnz     short loc_101F6
		inc     si

	loc_101F6:
		mov     ax, si
		call    proc_PutStr
		popa
		retn
proc_PutInt     endp


; =============== S U B R O U T I N E =======================================


public proc_GetInt
	proc_GetInt     proc near
	push    bx
	push    cx
	push    dx
	push    si
	push    di
	pushf

	loc_10203:
		mov     cx, 0Fh
		mov     bx, offset byte_100F2
		call    proc_GetStr
		mov     si, bx
		dec     si
	loc_1020F:
		inc     si
		cmp     byte ptr [si], 20h ; ' '
		jz      short loc_1020F
		mov     di, si
		mov     cx, 7
		mov     al, [si]
		cmp     al, 2Bh ; '+'
		jz      short loc_1022C
		cmp     al, 2Dh ; '-'
		jz      short loc_1022C
	loc_10224:
		cmp     al, 30h ; '0'
		jb      short loc_10248
		cmp     al, 39h ; '9'
		ja      short loc_10248
	loc_1022C:
		inc     si
		dec     cx
		jcxz    short loc_10234
		mov     al, [si]
		jmp     short loc_10224
	loc_10234:
		push    ax
		mov     ax, offset aNumberOutOfRan ; "\r\nNumber out of range (-32,768 to +32,7"...
		call    proc_PutStr
		pop     ax
		jmp     short loc_10203
	loc_1023E:
		push    ax
		mov     ax, offset aNoNumberEntere ; "\r\nNo number entered.\r\nPlease try again:"...
		call    proc_PutStr
		pop     ax
		jmp     short loc_10203
	loc_10248:
		mov     byte ptr [si], 0
		cmp     cx, 7
		jz      short loc_1023E
		mov     si, di
		xor     ax, ax
		xor     cx, cx
		mov     bx, 0Ah
		mov     cl, [si]
		cmp     cl, 2Dh ; '-'
		jz      short loc_10266
		cmp     cl, 2Bh ; '+'
		jnz     short loc_10267
	loc_10266:
		inc     si
	loc_10267:
		mov     cl, [si]
		cmp     cl, 0
		jz      short loc_10281
		sub     cl, 30h ; '0'
		mul     bx
		jb      short loc_10234
		add     ax, cx
		jb      short loc_10234
		cmp     ax, 8000h
		ja      short loc_10234
		inc     si
		jmp     short loc_10267
	loc_10281:
		mov     si, di
		mov     cl, [si]
		cmp     dx, 0
		jnz     short loc_10234
		cmp     ax, 8000h
		jb      short loc_10295
		cmp     cl, 2Dh ; '-'
		jnz     short loc_10234
	loc_10295:
		cmp     cl, 2Dh ; '-'
		jnz     short loc_1029C
		neg     ax
	loc_1029C:
		popf
		pop     di
		pop     si
		pop     dx
		pop     cx
		pop     bx
		retn
proc_GetInt     endp


; =============== S U B R O U T I N E =======================================


public proc_PutLInt
	proc_PutLInt    proc near
	pushad
	mov     si, offset byte_100F2
	mov     byte ptr [si], 20h ; ' '
	cmp     eax, 0
	jge     short loc_102B9
	mov     byte ptr [si], 2Dh ; '-'
	neg     eax

	loc_102B9:
		mov     ebx, 0Ah
		add     si, 0Bh
		mov     byte ptr [si], 0
		dec     si
		mov     cx, 0Ah
	loc_102CA:
		mov     edx, 0
		div     ebx
		add     dl, 30h ; '0'
		mov     [si], dl
		dec     si
		dec     cx
		cmp     eax, 0
		jnz     short loc_102CA
		jcxz    short loc_102F0
		mov     bl, ds:byte_100F2
		mov     [si], bl
		cmp     bl, 20h ; ' '
		jnz     short loc_102F0
		inc     si
	loc_102F0:
		mov     ax, si
		call    proc_PutStr
		popad
		retn
proc_PutLInt    endp


; =============== S U B R O U T I N E =======================================


public proc_GetLInt
	proc_GetLInt    proc near
	push    ebx
	push    ecx
	push    edx
	push    si
	push    di
	pushf

	loc_10301:
		mov     cx, 0Fh
		mov     bx, offset byte_100F2
		call    proc_GetStr
		mov     si, bx
		dec     si
	loc_1030D:
		inc     si
		cmp     byte ptr [si], 20h ; ' '
		jz      short loc_1030D
		mov     di, si
		mov     cx, 0Ch
		mov     al, [si]
		cmp     al, 2Bh ; '+'
		jz      short loc_1032A
		cmp     al, 2Dh ; '-'
		jz      short loc_1032A
	loc_10322:
		cmp     al, 30h ; '0'
		jb      short loc_10346
		cmp     al, 39h ; '9'
		ja      short loc_10346
	loc_1032A:
		inc     si
		dec     cx
		jcxz    short loc_10332
		mov     al, [si]
		jmp     short loc_10322
	loc_10332:
		push    ax
		mov     ax, offset aNumberOutOfR_0 ; "\r\nNumber out of range (-2,147,483,648 t"...
		call    proc_PutStr
		pop     ax
		jmp     short loc_10301
	loc_1033C:
		push    ax
		mov     ax, offset aNoNumberEntere ; "\r\nNo number entered.\r\nPlease try again:"...
		call    proc_PutStr
		pop     ax
		jmp     short loc_10301
	loc_10346:
		mov     byte ptr [si], 0
		cmp     cx, 0Ch
		jz      short loc_1033C
		mov     si, di
		xor     eax, eax
		xor     ecx, ecx
		mov     ebx, 0Ah
		mov     cl, [si]
		cmp     cl, 2Dh ; '-'
		jz      short loc_10369
		cmp     cl, 2Bh ; '+'
		jnz     short loc_1036A
	loc_10369:
		inc     si
	loc_1036A:
		mov     cl, [si]
		cmp     cl, 0
		jz      short loc_10389
		sub     cl, 30h ; '0'
		mul     ebx
		jb      short loc_10332
		add     eax, ecx
		jb      short loc_10332
		cmp     eax, 80000000h
		ja      short loc_10332
		inc     si
		jmp     short loc_1036A
	loc_10389:
		mov     si, di
		mov     cl, [si]
		cmp     edx, 0
		jnz     short loc_10332
		cmp     eax, 80000000h
		jb      short loc_103A3
		cmp     cl, 2Dh ; '-'
		jnz     short loc_10332
	loc_103A3:
		cmp     cl, 2Dh ; '-'
		jnz     short loc_103AB
		neg     eax
	loc_103AB:
		popf
		pop     di
		pop     si
		pop     edx
		pop     ecx
		pop     ebx
		retn
proc_GetLInt    endp


text            ends
end