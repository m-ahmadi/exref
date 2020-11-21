-- postgres
-- subqueries vs self-joins
/*
	to write a self-join you must use different table aliases,
	this will trick sql to think that there are two copies of the same table.
	
	you might use a self-join when a table has information in one column that refers to information on another column,
	these kind of relationships are called "recursive" since a table refers back to itself.
	
	self-joins are hard to visualize
*/

-- here's a simple subquery:
SELECT lastname, firstname
FROM editor
WHERE editor_id IN
	(SELECT manager_editor_id FROM editor WHERE editor_id = 3)
ORDER BY 1;
-- notice that the inner query is using the same table as the outer query.
-- subquery rewritten as a self-join:
SELECT e2.lastname, e2.firstname
FROM editor e1
	JOIN editor e2 ON (e1.editor_id = e2.managing_editor_id)
WHERE e1.editor_id = 3
ORDER BY 1, 2;
#------------------------------------------------
# mysql
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