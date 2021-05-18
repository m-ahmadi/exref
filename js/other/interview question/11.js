//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	Write a simple function (less than 80 characters) that returns a boolean indicating whether or not a string is a palindrome.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// The following one line function will return true if str is a palindrome; otherwise, it returns false.

function isPalindrome(str) {
	str = str.replace(/\W/g, '').toLowerCase();
	return (str == str.split('').reverse().join(''));
}
// For example:
console.log(isPalindrome("level"));                   // logs 'true'
console.log(isPalindrome("levels"));                  // logs 'false'
console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true'
"A man, a plan, a canal, Panama"
"Go hang a salami. I'm a lasagna hog"
"Go hang a salami Im a lasagna hog"