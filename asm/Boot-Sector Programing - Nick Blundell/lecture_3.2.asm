; BIOS will load this to address 7c00
[org 0x7c00]

mov ah, 0x0e
mov al, [my_character]
int 0x10

my_character:
	db 'X'
	
jmp $
times (510-($-$$)) db 0
db 0x55, 0xaa