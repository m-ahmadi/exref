strA.localeCompare(strB, ?locales, ?options)
// compares two strings in terms of sort order
// -1  strA  comes before  strB
//  1  strA  comes after   strB
//  0  strA  is same as    strB

'a'.localeCompare('b') // -1
'b'.localeCompare('a') // 1
'a'.localeCompare('a') // 0

'ب'.localeCompare('ج', 'fa')
'ج'.localeCompare('ب', 'fa')

'réservé'.localeCompare('RESERVE')                              // 1
'réservé'.localeCompare('RESERVE', 'en', {sensitivity: 'base'}) // 0