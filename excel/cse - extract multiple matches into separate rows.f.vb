=IFERROR(
	INDEX(	'value
		names,	'array
		SMALL(	'row_num
			IF(groups=E$2, ROW(names) - MIN(ROW(names)) + 1),	'array
			ROWS($E$3:E3)																			'k
		)
	),
	""			'value_if_error
)