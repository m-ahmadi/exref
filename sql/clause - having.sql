# mysql
/*
	The HAVING clause was added to SQL because the WHERE keyword could not be used with aggregate functions.
*/
SELECT column_name, aggregate_function(column_name)
FROM table_name
WHERE column_name operator value
GROUP BY column_name
HAVING aggregate_function(column_name) operator value;

SELECT Employees.LastName, COUNT(Orders.OrderID) AS NumberOfOrders
FROM Orders INNER JOIN Employees
	ON Orders.EmployeeID = Employees.EmployeeID
GROUP BY LastName
HAVING COUNT(Orders.OrderID) > 10;

-- postgres
/*
	The HAVING clause places conditions on groups created by the GROUP BY clause. (just like WHERE clause places conditions on the SELECT columns)
	The HAVING clause must follow the GROUP BY clause in a query and must precede the ORDER BY clause if used.
*/

-- how it works?
-- let's say you were looking for:
-- what is the average price of a book based on what type of book it is?
-- here's the query for that:
SELECT type, AVG(price)
FROM book
GROUP BY type
ORDER BY 1, 2;
-- any condition against the GROUP BY columns will appear in the HAVING clause.
-- now let's just look for where the average price is more than $25:
SELECT type, AVG(price)
FROM book
GROUP BY type
HAVING AVG(price) > 25
ORDER BY 1, 2;

-- you won't see any null values in the result, much the same way you don't see null when using WHERE clause.
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- you cannot use an aggregate in the WHERE clause.
-- error:
SELECT type, AVG(price)
FROM book
WHERE AVG(price) > 25
GROUP BY type
ORDER BY 1, 2;
-- PostgreSQL:	ERROR:  aggregate functions are not allowed in WHERE
-- Oracle:			ORA-00934: group function is not allowed here
-- MySQL:				MySQL-1111: Invalid use of group function
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- could you use a HAVING without using an aggregate function?
-- yes. but The GROUP BY clause will work like a WHERE clause then:
SELECT type
FROM book
GROUP BY type
HAVING type = 'computer'
ORDER BY 1;
-- produces the same number of as:
SELECT title, type
FROM book
WHERE type = 'computer'
ORDER BY 1;
-- but you can not list the title or any other column than the type column with the first statement
-- so the WHERE clause gives more flexibility, and you should not use HAVING clause in this way
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- HAVING clause with compound conditions
SELECT type, AVG(price), SUM(ytd_sales)
FROM book
GROUP BY type
HAVING AVG(price) > 25
	AND SUM(ytd_sales) > 20000
ORDER BY 1, 2;

-- multiple column group:
SELECT type, price, AVG(price), SUM(ytd_sales)
FROM book
GROUP BY type, price
HAVING AVG(price) > 10
	AND SUM(ytd_sales) > 5000
ORDER BY 1, 2;