
_main:

;MyProject.c,2 :: 		void main() {
;MyProject.c,3 :: 		CMCON = 0x07;                // Disable Comparators
	MOVLW      7
	MOVWF      CMCON+0
;MyProject.c,4 :: 		ADCON1 = 0x80;              // ADC module configuration
	MOVLW      128
	MOVWF      ADCON1+0
;MyProject.c,6 :: 		TRISA = 0xFF;               // PORTA as Input
	MOVLW      255
	MOVWF      TRISA+0
;MyProject.c,7 :: 		TRISB = 0x00;               // PORTB as Output
	CLRF       TRISB+0
;MyProject.c,8 :: 		TRISC = 0x00;               // PORTC as Output
	CLRF       TRISC+0
;MyProject.c,10 :: 		do {
L_main0:
;MyProject.c,11 :: 		adc = ADC_Read(1);       // Read ADC value from channel 1
	MOVLW      1
	MOVWF      FARG_ADC_Read_channel+0
	CALL       _ADC_Read+0
	MOVF       R0+0, 0
	MOVWF      _adc+0
	MOVF       R0+1, 0
	MOVWF      _adc+1
;MyProject.c,12 :: 		PORTB = adc;             // Send lower 8 bits of ADC value to PORTB
	MOVF       R0+0, 0
	MOVWF      PORTB+0
;MyProject.c,13 :: 		PORTC = adc >> 2;        // Send higher 2 bits to PORTC
	MOVF       R0+0, 0
	MOVWF      R2+0
	MOVF       R0+1, 0
	MOVWF      R2+1
	RRF        R2+1, 1
	RRF        R2+0, 1
	BCF        R2+1, 7
	RRF        R2+1, 1
	RRF        R2+0, 1
	BCF        R2+1, 7
	MOVF       R2+0, 0
	MOVWF      PORTC+0
;MyProject.c,14 :: 		} while(1);
	GOTO       L_main0
;MyProject.c,15 :: 		}
L_end_main:
	GOTO       $+0
; end of _main
