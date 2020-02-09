mov ah, 0x0e ; BIOS scrolling teletype function
mov al, 'H'
int 0x10
jmp $
times (510-($-$$)) db 0
db 0x55, 0xaa