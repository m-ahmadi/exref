"thisStringIsGood"
    // insert a space before all caps
    .replace(/([A-Z])/g, ' $1')
    // uppercase the first character
    .replace(/^./, function (str) { return str.toUpperCase(); })
"This String Is Good"

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//													about $
/*
	$1 is not a variable
	it's a placeholder that is used in the replace() call.
	$n represents the nth capture group of the regular expression.
*/
"thisStringIsGood"
    .replace(/([A-Z])/g, '$1@')
    .replace(/^./, function (str) { return str.toUpperCase(); })
"ThisS@tringI@sG@ood"

//------------------------------------------------------------------------------------------------------------------------
num="11222333";
/*
	This regex captures the last 3 digits as capture group #2
	and all preceding digits as capture group #1
*/
re = /(\d+)(\d{3})/;

re.test(num);
/*
	This replace call replaces the match of the regex (which happensto match everything)
	with the first capture group ($1) followed by a comma, followed by the second capture group ($2)
*/
num.replace(re, "$1,$2");
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

"serviceAdmin".replace(/([A-Z])/g, '_$1')
"service_Admin"