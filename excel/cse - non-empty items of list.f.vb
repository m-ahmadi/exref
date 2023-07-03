=IFERROR(INDEX($A$1:$A$5,SMALL(IF(NOT(ISBLANK($A$1:$A$5)),ROW($A$1:$A$5),""),ROW(A1))),"")

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


' slightly different syntax
=IFERROR(INDEX($A$1:$A$9,SMALL(IF($A$1:$A$9<>"",ROW($A$1:$A$9)-ROW($A$1)+1),ROWS($A$1:$A1))),"")

=IFERROR(
	INDEX(
		$A$1:$A$9,
		SMALL(
			IF(
				$A$1:$A$9 <> "",
				ROW($A$1:$A$9) - ROW($A$1)+1
			),
			ROWS($A$1:$A1)
		)
	),
	""
)
