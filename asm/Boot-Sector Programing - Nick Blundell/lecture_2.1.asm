loop:
	jmp $ ; Endless jump
db $
db $
db $
db $
db $
db $  ; initializes the byte to offset of this line which is 07 
db $$ ; initializes the byte to 00
db $$
db $$
db $$
times (510-($-$$)) db 0
db 0x55, 0xaa