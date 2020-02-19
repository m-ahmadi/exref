+'42'                 // 42 (very fast, equivalent to Number())
+'3' + (+'4')         // 7

'6' - 3               // 3
'6' * 3               // 18
'6' / 3               // 2
'6' % 3               // 0
'6' + 3               // '63'

'42'*1                // 42 (super fast)
Number('42')          // 42
parseInt('42', 10)    // 42
parseInt('12px', 10)  // 12
parseInt( 0.0000001 ) // 1 (!)
// uncommon:
'42'-0                // 42
'42'>>0               // 42
'42'<<0               // 42
~~'42'                // 42

// parseInt & parseFloat implicit conversions if base is not specified
parseInt('123')      // 123   (implicit decimal)
parseInt('010')      // 8     (implicit octal)
parseInt('0xCAFE')   // 51966 (implicit hexadecimal)
parseInt('010', 10)  // 10    (explicit decimal)
parseInt('11', 2)    // 3     (explicit binary)
parseFloat('10.10')  // 10.1

parseInt('hello', 10) // NaN
Number.isNaN( parseInt('hello', 10) ) // true

// more examples
parseInt('10,000', 10)   // 10
parseInt('10.81', 10)    // 10
parseInt('10000', 10)    // 10000
parseFloat('10,000', 10) // 10
parseFloat('10.00', 10)  // 10
parseFloat('10.20', 10)  // 10.2
parseFloat('10.81', 10)  // 10.81
parseFloat('10000', 10)  // 10000