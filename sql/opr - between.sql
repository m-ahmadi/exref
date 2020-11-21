-- postgres

-- alternative for AND to query ranges
-- works with text|date
-- generaly slower on large data
-- always inclusive

SELECT title, price FROM book WHERE price >= 20 AND price <= 40 ORDER BY 2;
SELECT title, price FROM book WHERE price BETWEEN 20 AND 40 ORDER BY 2;       -- inclusive (20 and 40 are included)

-- date:
SELECT title, pubdate FROM book WHERE pubdate >= '06/15/2012' AND pubdate <= '06/30/2012' ORDER BY 2;
SELECT title, pubdate FROM book WHERE pubdate BETWEEN '06/15/2012' AND '06/30/2012' ORDER BY 2; -- same ↑

-- exclusive range (only possible with arithmetic operators)
SELECT title, price FROM book WHERE price > 20 AND price < 40 ORDER BY 2;
SELECT title, price FROM book WHERE price BETWEEN 20.1 AND 40.1 ORDER BY 2; -- workaround (not recommended)

-- text:
SELECT title, price FROM book WHERE title >= 'D' AND title <= 'T' ORDER BY 1;
SELECT title, price FROM book WHERE title BETWEEN 'D' AND 'T' ORDER BY 1; -- same ↑
/* caveat:
'T' <= 'Th'     false
'T' <= 'Tr'     false

'Th' > 'T'      true

outer limits are defined by next letter out
	<= 'U' to match 'T'
*/