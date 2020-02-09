mov bx, 0x7c0
mov ds, bx

mov ah, 0x0e
mov al, [0xc] ; (7c0 x 10 = 7c00 + c = 7C0C)
int 0x10

my_character:
	db 'X'
	
jmp $
times (510-($-$$)) db 0
db 0x55, 0xaa