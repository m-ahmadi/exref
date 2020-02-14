// string methods
'abcd'.charAt(1)    // 'b'
'abcd'.charAt()     // first charater: 'a'

// bracket notation
'abcd'[0]           // 'a'
// cons:
// can't set the character using this notation
// trying to set a character via index does not throw an error, but the string itself is unchanged.
// (while trying to set a character through charAt results in an error)
// treating the string as an array is an es5 feature. (not availbale in es3)