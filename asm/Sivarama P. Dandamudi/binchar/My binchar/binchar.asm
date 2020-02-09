
; .STACK 100H
	segment stack  stack
	resb 100H
	stacktop:

; .DATA
	segment data
	char_prompt    db  "Please input a character: ",0
	out_msg1       db  "The ASCII code of '",0
	out_msg2       db  "' in binary is ",0
	query_msg      db  "Do you want to quit (Y/N): ",0

; .CODE
	segment data
	segment bss
	segment text
	
; .STARTUP
	group dgroup data bss

	..start:
	mov AX, dgroup
	mov DS, AX
	mov AX, stack
	mov SS, AX
	mov SP, stacktop


read_char:
	; PutStr  char_prompt ---------------------- ; request a char. input
	push    AX
	mov     AX, char_prompt
	; call    proc_PutStr ======================
	push    ax
	push    dx
	push    bx
	pushf
	mov     bx, ax
	loc_101571:
		mov     dl, [bx]
		cmp     dl, 0
		jz      short loc_101652
		mov     ah, 2
		int     21h             ; DOS - DISPLAY OUTPUT
		; DL = character to send to standard output
		inc     bx
		jmp     short loc_101571
	loc_101652:
		popf
		pop     bx
		pop     dx
		pop     ax
	pop     AX
	;===========================================
	;-------------------------------------------
	
	; GetCh   AL ------------------------------- ; read input character
	push    SI
	xor     SI,SI
	inc     SI
	; call    proc_GetCh =======================
	push    dx
	pushf
	push    ax
	mov     dx, si
	mov     ah, 1
	int     21h                 ; DOS - KEYBOARD INPUT   Return: AL = character read
	dec     dl
	jz      short loc_101343
	dec     dl
	jnz     short loc_1013C4
	mov     dl, al
	pop     ax
	mov     ah, dl
	jmp     loc_1013D5
	loc_101343:
		mov     dl, al
		pop     ax
		mov     al, dl
		jmp     loc_1013D5
	loc_1013C4:
		pop     dx
	loc_1013D5:
		popf
		pop     dx
	;===========================================
    pop     SI
	;-------------------------------------------
	
	; nwln -------------------------------------
	; call    proc_nwln ========================
	push    ax
	push    dx
	mov     dl, 0Dh
	mov     ah, 2
	int     21h                 ; DOS - DISPLAY OUTPUT    ; DL = character to send to standard output
	mov     dl, 0Ah
	mov     ah, 2
	int     21h                 ; DOS - DISPLAY OUTPUT    ; DL = character to send to standard output
	pop     dx
	pop     ax
	;===========================================
	;-------------------------------------------
	
	; PutStr  out_msg1 -------------------------
	push    AX
	mov     AX, out_msg1
	; call    proc_PutStr ======================
	push    ax
	push    dx
	push    bx
	pushf
	mov     bx, ax

	loc_101576:
		mov     dl, [bx]
		cmp     dl, 0
		jz      short loc_101657
		mov     ah, 2
		int     21h             ; DOS - DISPLAY OUTPUT      ; DL = character to send to standard output
		inc     bx
		jmp     short loc_101576
		
	loc_101657:
		popf
		pop     bx
		pop     dx
		pop     ax
	;===========================================
	pop     AX
	;-------------------------------------------
	
	
	; PutCh   AL -------------------------------
	push    AX
	mov     AL, AL
	; call    proc_PutCh =======================
	push    ax
	push    dx
	mov     dl, al
	mov     ah, 2
	int     21h             ; DOS - DISPLAY OUTPUT    ; DL = character to send to standard output
	pop     dx
	pop     ax
	;===========================================
	pop     AX
	;-------------------------------------------
	
	; PutStr  out_msg2 -------------------------
	push    AX
	mov     AX, out_msg2
	; call    proc_PutStr ======================
	push    ax
	push    dx
	push    bx
	pushf
	mov     bx, ax

	loc_101578:
		mov     dl, [bx]
		cmp     dl, 0
		jz      short loc_101659
		mov     ah, 2
		int     21h             ; DOS - DISPLAY OUTPUT    ; DL = character to send to standard output
		inc     bx
		jmp     short loc_101578
		
	loc_101659:
		popf
		pop     bx
		pop     dx
		pop     ax
	;===========================================
	pop     AX
	;-------------------------------------------
	
	mov     AH,80H       ; mask byte = 80H
	mov     ECX,8        ; loop count to print 8 bits

print_bit:
	test    AL,AH        ; test does not modify AL
	jz      print_0      ; if tested bit is 0, print it
	; PutCh   '1' ------------------------------ ; otherwise, print 1
	push    AX
	mov     AL, '1'
	; call    proc_PutCh =======================
	push    ax
	push    dx
	mov     dl, al
	mov     ah, 2
	int     21h             ; DOS - DISPLAY OUTPUT   ; DL = character to send to standard output
	pop     dx
	pop     ax
	;===========================================
	pop     AX
	;-------------------------------------------
	jmp     skip1

print_0:
	; PutCh   '0' ------------------------------ ; print 0
	push    AX
	mov     AL, '0'
	; call    proc_PutCh =======================
	push    ax
	push    dx
	mov     dl, al
	mov     ah, 2
	int     21h             ; DOS - DISPLAY OUTPUT   ; DL = character to send to standard output
	pop     dx
	pop     ax
	;===========================================
	pop     AX
	;-------------------------------------------
	
skip1:
	shr     AH,1         ; right-shift mask bit to test next bit of the ASCII code
	loop    print_bit    
	
	; nwln -------------------------------------
	; call    proc_nwln ========================
	push    ax
	push    dx
	mov     dl, 0Dh
	mov     ah, 2
	int     21h                 ; DOS - DISPLAY OUTPUT    ; DL = character to send to standard output
	mov     dl, 0Ah
	mov     ah, 2
	int     21h                 ; DOS - DISPLAY OUTPUT    ; DL = character to send to standard output
	pop     dx
	pop     ax
	;===========================================
	;-------------------------------------------
	
	; PutStr  query_msg ------------------------ ; query user whether to terminate
	push    AX
	mov     AX, query_msg
	; call    proc_PutStr ======================
	push    ax
	push    dx
	push    bx
	pushf
	mov     bx, ax

	loc_1015710:
		mov     dl, [bx]
		cmp     dl, 0
		jz      short loc_1016511
		mov     ah, 2
		int     21h             ; DOS - DISPLAY OUTPUT     ; DL = character to send to standard output
		inc     bx
		jmp     short loc_1015710
		
	loc_1016511:
		popf
		pop     bx
		pop     dx
		pop     ax
	;===========================================
	pop     AX
	;-------------------------------------------
	
	; GetCh   AL ------------------------------- ; read response
	inc     SI
	; call    proc_GetCh =======================
	push    dx
	pushf
	push    ax
	mov     dx, si
	mov     ah, 1
	int     21h                 ; DOS - KEYBOARD INPUT    ; Return: AL = character read
	dec     dl
	jz      short loc_1013412
	dec     dl
	jnz     short loc_1013C13
	mov     dl, al
	pop     ax
	mov     ah, dl
	jmp     loc_1013D14
	loc_1013412:
		mov     dl, al
		pop     ax
		mov     al, dl
		jmp     loc_1013D14
	loc_1013C13:
		pop     dx
	loc_1013D14:
		popf
		pop     dx
	;===========================================
	;-------------------------------------------
	
	; nwln -------------------------------------
	; call    proc_nwln ========================
	push    ax
	push    dx
	mov     dl, 0Dh
	mov     ah, 2
	int     21h                 ; DOS - DISPLAY OUTPUT    ; DL = character to send to standard output
	mov     dl, 0Ah
	mov     ah, 2
	int     21h                 ; DOS - DISPLAY OUTPUT    ; DL = character to send to standard output
	pop     dx
	pop     ax
	;===========================================
	;-------------------------------------------
	
	cmp     AL,'Y'       ; if response is not 'Y'
	jne     read_char    ; read another character
	
done:                        ; otherwise, terminate program
	; .EXIT ------------------------------------
	mov    AX,0x4C00
	int    0x21
	;-------------------------------------------