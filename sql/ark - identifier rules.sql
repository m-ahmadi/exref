/* mysql

unquoted identifier
	alphanumeric _ $
	can start with digit (source of ambiguity, has its issues)
	not all digits

quoted identifier with `backtick`
	any character except a byte with value 0 or 255
	useful when identifier
		is an SQL reserved word
		contains spaces
		contains special chars
*/