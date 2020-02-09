;Add individual digits of a number   ADDIGITS.ASM
;
;        Objective: To find the sum of individual digits of 
;                   a given number. Shows character to binary
;                   conversion of digits.
;            Input: Requests a number from keyboard.
;           Output: Prints the sum of the individual digits.
%include  "io.mac"
.STACK 100H
.DATA
number_prompt  db  "Please type a number (<11 digits): ",0
out_msg        db  "The sum of individual digits is: ",0

.UDATA
number         resb  11

.CODE
        .STARTUP
        PutStr  number_prompt  ; request an input number
        GetStr  number,11    ; read input number as a string
        nwln
        mov     EBX,number   ; EBX = address of number
        sub     DX,DX        ; DX = 0 -- DL keeps the sum
repeat_add:
        mov     AL,[EBX]     ; move the digit to AL
        cmp     AL,0         ; if it is the NULL character
        je      done         ;  sum is done
        and     AL,0FH       ; mask off the upper 4 bits
        add     DL,AL        ; add the digit to sum
        inc     EBX          ; update EBX to point to next digit
        jmp     repeat_add   
done:
        PutStr  out_msg
        PutInt  DX           ; write sum
        nwln
        .EXIT
