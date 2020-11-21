/*
	Unquoted identifiers:
		can contain alphanumeric characters in the system character set (utf8), plus the characters _ and $
		can start with any character that is legal in an identifier
		can start with a digit (source of ambiguity, has its issues)
		cannot consist entirely of digits
	
	Quoted identifiers (with `backtick`):
		any character except a byte with value 0 or 255
		useful when
			identifier is an SQL reserved word
			identifier contains spaces
			identifier contains special characters
*/