{=IFERROR(INDEX($A$1:$A$5,SMALL(IF(NOT(ISBLANK($A$1:$A$5)),ROW($A$1:$A$5),""),ROW(A1))),"")}
ctrl+shift+enter

one
two

three
four

=IFERROR(
	INDEX(
		$A$1:$A$5,
		SMALL(
			IF(
				NOT( ISBLANK($A$1:$A$5) ),
				ROW($A$1:$A$5),
				""
			),
			ROW(A1)
		)
	),
	""
)