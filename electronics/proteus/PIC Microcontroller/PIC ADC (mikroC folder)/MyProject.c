unsigned int adc;                // Variable for saving ADC value
void main() {
     CMCON = 0x07;                // Disable Comparators
     ADCON1 = 0x80;              // ADC module configuration
     
     TRISA = 0xFF;               // PORTA as Input
     TRISB = 0x00;               // PORTB as Output
     TRISC = 0x00;               // PORTC as Output
     
     do {
        adc = ADC_Read(1);       // Read ADC value from channel 1
        PORTB = adc;             // Send lower 8 bits of ADC value to PORTB
        PORTC = adc >> 2;        // Send higher 2 bits to PORTC
     } while(1);
}