// We have comments in the language, 2 forms:
// slash-slash line comment
/*
	slash-star
	block
	comment
*/
// Use line comment for code.
// Use block comment for text. Why?:
// RegExp can sometimes have slash-star happening within them,
// so if you're trying to comment out code that contains RegExp,
// you might accidentally end the comment early and cause your program to be misinterpreted,
// that can't happen with slash-slash convention.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@