; BIOS will load this to address 7c00

mov ah, 0x0e
mov al, [0x7c07]
int 0x10

db 'X'

jmp $
times (510-($-$$)) db 0
db 0x55, 0xaa