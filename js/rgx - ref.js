'the lord of the rings'.match(/the/ig)       ['the', 'the']            // literal
'you make my day'      .match(/.y/ig)        ['my', 'ay']              // .     any
'only 20'              .match(/\d/ig)        ['2', '0']                // \d    digit
'B2 is'                .match(/\D/ig)        ['B', ' ', 'i', 's']      // \D    not digit
'p: $5.28'             .match(/\w/ig)        ['p', '5', '2', '8']      // \w    word
'javad_g :12=<50%'     .match(/\W/ig)        [' ', ':', '=', '<', '%'] // \W    not a word
'foo bar s'            .match(/\s/ig)        [' ', ' ']                // \s    white space
'foo s'                .match(/\S/ig)        ['f', 'o', 'o', 's']      // \S    not white space
'lord of rings'        .match(/[gr]/ig)      ['r', 'r', 'g']           // []    character set
'abcd ef'              .match(/[a-c]/ig)     ['a', 'b', 'c']           // [a-c] ... range
'abcd ef'              .match(/[^abc]/ig)    ['d', ' ', 'e', 'f']      // [^]   ... negate
'lord of the rings'    .match(/lord|ring/ig) ['lord', 'ring']          // |     or
'the lord of the rings'.match(/^the/ig)      ['the']                   // ^     beginning of line
'the lord of the rings'.match(/ings$/ig)     ['ings']                  // $     end of line
'possibly dudlya'      .match(/ly\b/ig)      ['ly']                    // \b    zero-width word boundary
'at noon ono'          .match(/\bno/ig)      ['no']                    // ...
'possiblye yesterday'  .match(/ye\B/ig)      ['ye']                    // \B    zero-width non-word boundary
'abc'                .replace(/(abc)/, '$1def') 'abcdef'               // ()    capturing group back reference
'x x'                .replace(/(x)/g, '$1y')    'xy xy'                // ...
'x y'                .replace(/(x)y/g, 'L$&')   'Lxy Lxy'              // ... whole match backref

// emulating and
var str = 'all the leaves are brown and the sky is grey';
str.match(/the(=?.*and)/ig)   ['the leaves are brown and']
str.match(/brown(=?.*sky)/ig) ['brown and the sky']

/*
character
.         any character. except line terminators: \n \r \u2028 \u2029
\d        digit character. basic latin alphabet. eq: [0-9]
\D        not a digit character. any character that's not a digit. eq: [^0-9]
\w        word character. including underscore. eq: [A-Za-z0-9_]
\W        not a word character. eq: [^A-Za-z0-9_]
\s        white space character (space/tab/formfeed/linefeed/other unicode spaces)
\S        not a white space character
\t        horizontal tab
\r        carriage return
\n        linefeed
\v        vertical tab
\f        form-feed
\cX       control character. where X is a letter from A-Z. eg: \cM matches control-M
[\b]      backspace. not to be confused with \b
\0        NUL character. don't follow this with another digit

alternate
|         or

boundary
^         beginning of line (with multiline flag: matches one after a line break character)
$         end of line (multiline flag: matches one before a line break character)
\b        zero-width word boundary between a letter and a space (not to be confused with [\b])
\B        zero-width non-word boundary (between two letters or between two spaces)

quantifier
x*        0 or more times of preceding item x
x+        1 or more times of preceding item x (eq: {1,})
x?        0 or 1 time of preceding item x
x{n}      exactly n occurrences of the preceding item x
x{n,}     n or more occurrences of the preceding item x
x{n,m}    at least n and at most m occurrences of the preceding item x
x*?       0 or more times of preceding item x (smallest possible match)
x+?       1 or more times of preceding item x (smallest possible match)

assertion
x(?=y)    x only if x is followed by y
x(?!y)    x only if x is not followed by y

capturing groups
(x)       capturing group. recall matched substr from result array [1],[n] or use backrefs.
(?:x)     non-capturing group. matched substr cann't be recalled.

back references
$n        nth paren match from left. n = 1,...,100
$`        portion of the string that precedes the match
$'        portion of the string that follows the match
$&        whole match
\n        alt notation

character set
[]        character set
[a-d]     range of characters: [a-d] eq: [abcd]
[^]       negate of character set
eg:
	[abc]          (a|b|c)
	[a-z]          (a|b|...|z)
	[a-zA-Z_]      \w
	[^abc]         anything but (a|b|c)
	[0-9]          \d
	[^0-9]         \D
	[a-zA-Z0-9_]   (\w|\d)

flags
g    global match:  find all matches rather than stopping after the first match.
i    ignore case
u    unicode:       treat pattern as a sequence of unicode code points.
m    multiline:     treat ^ and $ as beginning/end of each line instead of whole input
y    sticky:        matches only from the index indicated by the lastIndex property of this regular expression. (and does not attempt to match from any later indexes).
*/