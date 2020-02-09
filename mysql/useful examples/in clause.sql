-- You can use IN clause to replace many OR conditions

SELECT	*
FROM	players
WHERE	score = 250 OR  
		score = 220 OR
		score = 170


SELECT	*
FROM	players
WHERE	score IN ( 250, 220, 170 )