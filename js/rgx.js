// regex literal:
var result;
result = /([A-Z])/g.test('ab'); // false
result = /([A-Z])/g.test('AB'); // true
'bia olagh, bia'.replace(/bia/g, 'boro') // 'boro olagh, boro'

// literal with flag:
'the lord of the rings'.match(/the/)   // without flag              ['the']
'the lord of the rings'.match(/the/g)  // global                    ['the', 'the']
'the lord of The rings'.match(/the/g)  // global, case-sensitive    ['the']
'the lord of The rings'.match(/the/ig) // global, case-insensitive  ['the', 'the']

// regex object:
var pattern = 'salam'
new RegExp(pattern, 'g') // /salam/g

// using regex object, you can use variables in the regular expression.
var replace = 'olaghe'
var rgx = new RegExp(replace, 'g')
'salam olaghe aziz'.replace(rgx, 'gave')

// escape
str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&') // other variations: add \/ or remove -
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// methods
str.match(regex)           // return: array of matches
str.search(regex)          // return: index of the first match (-1 if not found)
str.replace(regex, substr) // return: new str
regex.exec(str)            // return: array with only the first match
regex.test(str)            // return: boolean. true: match found. (fast)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
