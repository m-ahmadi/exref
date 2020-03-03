--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

SELECT lastname, firstname, city, state
	FROM author
	WHERE lastname = 'Hunter' AND firstname = 'Cindy';
	
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

SELECT lastname, firstname, city, state
	FROM author
	WHERE state = 'CA' OR state = 'UT';
	
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

SELECT lastname, firstname, city, state
	FROM author
	WHERE NOT (state = 'CA' OR state = 'UT');
	
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

SELECT book, title, price, advance
	FROM book
	WHERE (advance != 0 AND advance >= 1000) OR price > 30 OR price IS NULL
	
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
