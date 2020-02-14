// first character
'abc'.charAt(0) // 'a'

// last character
'abc'.slice(-1) // 'c'

// remove characters from begining
'12345'.slice(1)  // '2345'
'12345'.slice(2)  // '345'

'12345'.substr(1) // '2345'
'12345'.substr(2) // '345'

// remove last character
'12345.00'.slice(0, -1) // better
'12345.00'.substring(0, str.length - 1)