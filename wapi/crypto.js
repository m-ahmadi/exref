window.encodeURI()           // encodes a whole url.
window.encodeURIComponent()  // encodes the value of a url parameter. (don't use for whole urls)
window.decodeURI()
window.decodeURIComponent()

// encodeURI()
var url = "http://www.example.org/a file with spaces.html";
encodeURI(url)          // ok: "http://www.example.org/a%20file%20with%20spaces.html"
encodeURIComponent(url) // destroys the url: "http%3A%2F%2Fwww.example.org%2Fa%20file%20with%20spaces.html"

// encodeURIComponent()
var p1 = encodeURIComponent("http://example.org/?a=12&b=55");
var url = "http://example.net/?param1=" + p1 + "&param2=99";
url // http://example.net/?param1=http%3A%2F%2Fexample.org%2F%Ffa%3D12%26b%3D55&param2=99

/* note
encodeURIComponent does not escape the ' character.
a common bug is to use it to create html attributes such as href='MyUrl', which could suffer an injection bug.
if you are constructing html from strings, either use " instead of ' for attribute quotes, or add an extra layer of encoding.
(' can be encoded as %27).
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// base64 encoding (absent in node.js)
var encodedData = window.btoa(stringToEncode);
var decodedData = window.atob(encodedData);
/*
stringToEncode:
	binary string to encode. (charCodes 0 to 255, each character represents an 8-bit byte)
	if string contains characters that can't be represented in 8 bits, it won't work correctly.

encodedData
	ascii string containing base64 representation of stringToEncode

decodedData:
	a "string" where each character represents an 8-bit byte.
	byte value is between 0 and 255, but it doesn't mean it's ascii.
*/
btoa("Hello, world")     // "SGVsbG8sIHdvcmxk"
atob("SGVsbG8sIHdvcmxk") // "Hello, world"

"Hello" // [72, 101, 108, 108, 111] below 255
"ÿĀāĂ"  // [32, 255, 256, 257, 258] above 255
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// encodeURI() vs encodeURIComponent()
/*
encodeURIComponent() encodes 11 characters that are not encoded by encodeURI()
character    encodeURI    encodeURIComponent
#            #            %23
$            $            %24
&            &            %26
+            +            %2B
,            ,            %2C
/            /            %2F
:            :            %3A
;            ;            %3B
=            =            %3D
?            ?            %3F
@            @            %40

how to generate the above table:  */
var arr = [];
for(let i=0;i<256;i++) {
	var char=String.fromCharCode(i);
	if(encodeURI(char)!==encodeURIComponent(char)) {
		arr.push({
			character: char,
			encodeURI: encodeURI(char),
			encodeURIComponent: encodeURIComponent(char)
		});
	}
}
console.table(arr);