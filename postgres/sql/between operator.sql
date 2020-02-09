-- to check a range of values you can use an AND operator to make sure a value is between a low point and a high point:
SELECT title, price
FROM book
WHERE price >= 20 AND price <= 40
ORDER BY 2;

-- this works with text or date datatypes as well:
-- text:
SELECT title, price
FROM book
WHERE title >= 'D' AND title <= 'T'
ORDER BY 1;
/* caveat:
	when we have 'T' and 'Th' and 'Tr', it's not gonna be evaluated as being less than or equal to 'T'
	'Th' is greater than 'T', so the only way we would see a book is if the book was named 'T'
	when you're using something like this, you have to remember the outer limits are defined by the next letter out
	you would be looking for less than or equal to 'U' if you wanted to see those 'T' books
*/
-- date:
SELECT title, pubdate
FROM book
WHERE pubdate >= '06/15/2012' AND pubdate <= '06/30/2012'
ORDER BY 2;
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- BETWEEN operator can be userd as an alternative method to query ranges.
-- caveat: if you're dealing with a large set of data, BETWEEN will generaly run slower.
-- BETWEEN operator is always inclusive.

-- inclusive (20 and 40 are included)
SELECT title, price
FROM book
WHERE price BETWEEN 20 AND 40
ORDER BY 2;

-- same result as with AND
SELECT title, price
FROM book
WHERE title BETWEEN 'D' AND 'T'
ORDER BY 1;

-- same result as with AND
SELECT title, pubdate
FROM book
WHERE pubdate BETWEEN '06/15/2012' AND '06/30/2012'
ORDER BY 2;
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- you must use the mathematical operators instead if you don't want the range values to be inclusive:
SELECT title, price
FROM book
WHERE price > 20 AND price < 40
ORDER BY 2;
-- workaround (not recommended):
SELECT title, price
FROM book
WHERE price BETWEEN 20.1 AND 40.1
ORDER BY 2;