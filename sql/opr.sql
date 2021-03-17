-- logical
SELECT lastname, firstname, city, state FROM author WHERE lastname = 'Hunter' AND firstname = 'Cindy';
SELECT lastname, firstname, city, state FROM author WHERE state = 'CA' OR state = 'UT';
SELECT lastname, firstname, city, state FROM author WHERE NOT (state = 'CA' OR state = 'UT');
SELECT book, title, price, advance FROM book WHERE (advance != 0 AND advance >= 1000) OR price > 30 OR price IS NULL

-- in (alternative to many AND)
SELECT lastname, firstname, state FROM author WHERE state='CA' or state='TX' or state='NY';
SELECT lastname, firstname, state FROM author WHERE state IN ('CA', 'TX', 'NY');

SELECT * FROM players WHERE score=250 OR score=220 OR score=170;
SELECT * FROM players WHERE score IN (250, 220, 170);

-- comparison
=  -- equal to
>  -- greater than
<  -- less    than
>= -- grather than or equal to
<= -- less    than or equal to
<> -- not equal

--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- between (alternative for AND to query ranges)
-- works with text|date
-- generaly slower on large data
-- always inclusive
SELECT title, price FROM book WHERE price >= 20 AND price <= 40 ORDER BY 2;
SELECT title, price FROM book WHERE price BETWEEN 20 AND 40 ORDER BY 2;  -- inclusive (20 and 40 are included)

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
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- like
-- wildcards: % _
SELECT name FROM author WHERE name LIKE 'S%'  ORDER BY 1, 2; -- authors whose name started with 'S'
SELECT name FROM author WHERE name LIKE '%s'  ORDER BY 1, 2; -- all last names that have any number of characters before the 's'
SELECT name FROM author WHERE name LIKE '%s%' ORDER BY 1, 2; -- any lastname that contains an 's' anywhere in the name
SELECT name FROM author WHERE name LIKE '%s%' OR name LIKE 'S%' ORDER BY 1, 2; -- ↑ plus last names that start with a capital 'S'

SELECT name FROM user WHERE name LIKE 'Green%' name LIKE 'Sm_th';

-- find a specific character in a specific position
SELECT lastname, firstname, phone FROM author WHERE phone LIKE '%836%' ORDER BY 1, 2, 3;
-- but that would also return a phone like: 818 567-8365, since 836 is included in the phone number
-- to get sql to look in the exact place where a prefix is, you can use the '_' instead of the '%' wildcard character.
-- The '_' means return all characters in the exact position in the text where the '_' is placed.
-- example:
WHERE lastname LIKE 'c_t' -- cat, cot, cut
-- back to the phone number,
-- match for anything in the first four characters,
-- then the next 3 characters must be '836',
-- then find a match for anything after that:
SELECT lastname, firstname, phone
FROM author
WHERE phone LIKE '____836%'
ORDER BY 1, 2, 3;
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
