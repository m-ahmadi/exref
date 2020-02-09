/*
	many subqueries could be written as JOINs.
	it's often a judgement call on which one to use.
	for large sets of data, subqueries often run quicker since each SELECT statement is run individually.
	if you need to see information from more than one table, then you must use a JOIN,
	a subquery will only allow you to see columns from the outer query.
	another advantage to using a subquery is that you can compare a detail value to an aggregate value,
	(e.g. WHERE price = (SELECT AVG(price) FROM ...).
*/

-- for example:
SELECT title, 'is published by All Techo Books'
FROM book
WHERE pub_id IN
	(SELECT pub_id FROM publisher WHERE name = 'All Techo Books')
ORDER BY 1;

-- could be written as:
SELECT name, title
FROM book JOIN publisher USING(pub_id)
WHERE name = 'All Techo Books'
ORDER BY 1;