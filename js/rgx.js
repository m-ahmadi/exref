// method              return
str.match(regex)    // array of matches|firstMatch (depending on g flag)
str.matchAll(regex) // iterator of matches + capturing groups (regex must have g flag)
str.replace(regex, substr|replacer=(match, g1, g2, .., offset, string)=>) // new str
str.search(regex)   // index of the first match (-1 if not found)
regex.exec(str)     // array with only the first match (similar to str.match() without g)
regex.test(str)     // boolean. true: match found. (fast)

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

// regex object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp#syntax
var pattern = 'salam'
new RegExp(pattern, 'g') // /salam/g

// use variables in the regex (must use a `RegExp` object)
var replace = 'olaghe'
var rgx = new RegExp(replace, 'g')
'salam olaghe aziz'.replace(rgx, 'gave')

// escape - needed to escape: [ \ ^ $ . | ? * + ( )
str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&') // other variations: add \/ or remove -

// capturing groups (if group matches multiple times, only last match returns)
'abc'.match(/ab(c)/)         // ['abc', 'c']
'123s'.match(/(\d{3})(\w+)/) // ['123s', '123', 's']
'123456789'.match(/(\d)+/)   // ['123456789', '9']

// named capturing groups
var res = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/.exec('2015-01-02')
res.groups // {year: '2015', month: '01', day: '02'}

// global capturing groups
[...'a="1", a="2", a="3",'.matchAll(/a="(\w+)"/g)].map(i=> i[1]) // ['1', '2', '3']

// capturing group back reference
'abcd'.replace(/(a)(b)/, '@ $1 - @@ $2 - ')                   // '@ a - @@ b - cd'
'abcd'.replace(/(a)(b)/, (m,g1,g2)=> `@ ${g1} - @@ ${g2} - `) // ...

// return of .match()
'abac'.match(/a/)  // ['a', index: 0, input: 'abac', groups: undefined]
'abac'.match(/a/g) // ['a', 'a']
'x'.match(/a/)     // null
