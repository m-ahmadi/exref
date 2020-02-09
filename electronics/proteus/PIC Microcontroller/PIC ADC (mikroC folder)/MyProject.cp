#line 1 "C:/Users/NYC/PIC ADC/MyProject.c"
unsigned int adc;
void main() {
 CMCON = 0x07;
 ADCON1 = 0x80;

 TRISA = 0xFF;
 TRISB = 0x00;
 TRISC = 0x00;

 do {
 adc = ADC_Read(1);
 PORTB = adc;
 PORTC = adc >> 2;
 } while(1);
}
