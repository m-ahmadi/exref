{=IFERROR(INDEX($A$1:$A$5,SMALL(IF(NOT(ISBLANK($A$1:$A$5)),ROW($A$1:$A$5),""),ROW(A1))),"")}


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